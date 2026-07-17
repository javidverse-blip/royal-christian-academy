import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const app = express();
const port = process.env.PORT || 3000;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const requestLog = new Map();

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: false, limit: '16kb' }));

app.post('/api/contact', async (req, res) => {
  if (!isAllowedRequest(req)) {
    return sendJson(res, 403, false, 'Your message could not be sent right now.');
  }

  if (isRateLimited(req)) {
    return sendJson(res, 429, false, 'Please wait a moment before sending another message.');
  }

  const honeypot = cleanText(req.body?.website, 200);
  if (honeypot) {
    return sendJson(res, 200, true, 'Thank you for contacting Royal Christian Academy.');
  }

  const name = cleanText(req.body?.name, 120);
  const email = cleanText(req.body?.email, 254);
  const subject = cleanText(req.body?.subject, 140);
  const message = cleanMessage(req.body?.message, 3000);

  if (name.length < 2) {
    return sendJson(res, 422, false, 'Please enter your full name.');
  }

  if (!isValidEmail(email)) {
    return sendJson(res, 422, false, 'Please enter a valid email address.');
  }

  if (subject.length < 2) {
    return sendJson(res, 422, false, 'Please choose a subject.');
  }

  if (message.length < 10) {
    return sendJson(res, 422, false, 'Please enter a message with at least 10 characters.');
  }

  const emailConfig = getEmailConfig();
  if (!emailConfig.valid) {
    console.error('Contact form email service is not configured.');
    return sendJson(res, 500, false, 'The email service is not configured yet. Please contact the school directly.');
  }

  const emailSent = await sendEmail({ ...emailConfig, name, email, subject, message, ip: req.ip });

  if (!emailSent) {
    return sendJson(res, 502, false, 'Your message could not be sent right now. Please try again later.');
  }

  return sendJson(res, 200, true, 'Thank you for contacting Royal Christian Academy. Your message has been sent.');
});

app.use(express.static(distDir, { index: false }));

app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  return res.sendFile(path.join(distDir, 'index.html'));
});

app.use((req, res) => {
  sendJson(res, 404, false, 'Not found.');
});

app.listen(port, () => {
  console.log(`Royal Christian Academy server listening on port ${port}`);
});

function sendJson(res, status, success, message) {
  return res.status(status).json({ success, message });
}

function cleanText(value, maxLength) {
  return String(value || '')
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .slice(0, maxLength);
}

function cleanMessage(value, maxLength) {
  return String(value || '')
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function isRateLimited(req) {
  const now = Date.now();
  const key = req.ip || req.socket.remoteAddress || 'unknown';
  const history = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (history.length >= rateLimitMax) {
    requestLog.set(key, history);
    return true;
  }

  history.push(now);
  requestLog.set(key, history);
  return false;
}

function isAllowedRequest(req) {
  const siteUrl = process.env.SITE_URL;
  if (!siteUrl) return false;

  let allowedHost;
  try {
    allowedHost = new URL(siteUrl).host;
  } catch {
    return false;
  }

  const origin = req.get('origin');
  if (origin) {
    try {
      return new URL(origin).host === allowedHost;
    } catch {
      return false;
    }
  }

  const referer = req.get('referer');
  if (referer) {
    try {
      return new URL(referer).host === allowedHost;
    } catch {
      return false;
    }
  }

  return req.get('host') === allowedHost;
}

function getEmailConfig() {
  const config = {
    apiKey: process.env.EMAIL_API_KEY || '',
    from: process.env.EMAIL_FROM || '',
    to: process.env.EMAIL_TO || '',
    fromName: process.env.EMAIL_FROM_NAME || 'Royal Christian Academy',
  };

  return {
    ...config,
    valid: Boolean(config.apiKey && isValidEmail(config.from) && isValidEmail(config.to)),
  };
}

async function sendEmail({ apiKey, from, to, fromName, name, email, subject, message, ip }) {
  const text = [
    'New website contact message',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `IP Address: ${ip || 'Unknown'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2>New website contact message</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>IP Address:</strong> ${escapeHtml(ip || 'Unknown')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        from: `${fromName} <${from}>`,
        to: [to],
        reply_to: email,
        subject: `Website contact: ${subject}`,
        text,
        html,
      }),
    });

    if (!response.ok) {
      console.error(`Contact email request failed with status ${response.status}.`);
      return false;
    }

    return true;
  } catch {
    console.error('Contact email request failed.');
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[char]);
}
