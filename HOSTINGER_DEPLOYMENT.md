# Hostinger Deployment Guide

## Detected Project

- Framework: React 18.3.1 with Vite 8.1.0 and TypeScript.
- Application type: Vite single-page app served by a small Express Node.js server.
- Backend endpoint: `POST /api/contact` in `server.js`.
- Package manager: npm with `package-lock.json`.
- Recommended Hostinger deployment type: Node.js Web App deployment from GitHub.
- Required Node.js version: `^20.19.0 || >=22.12.0`; use Node `22.x` in Hostinger when available.

## Hostinger Settings

- Root directory: repository root, usually `/`.
- Install command: `npm ci`.
- Build command: `npm run build`.
- Start command: `npm start`.
- Output directory: `dist`.
- Application entry point: `server.js`.
- Port: do not hardcode one. Hostinger provides `PORT`, and the server listens on `process.env.PORT`.

## What The Server Does

- Serves the built Vite files from `dist`.
- Provides `POST /api/contact` for the contact form.
- Sends email through the Resend API using server-side environment variables only.
- Keeps `EMAIL_API_KEY` out of frontend JavaScript and out of `dist`.
- Validates and sanitizes name, email, subject, and message.
- Uses a honeypot field and basic in-memory rate limiting.
- Allows contact requests only from the host configured in `SITE_URL`.
- Provides SPA fallback for direct route refreshes such as `/about` and `/contact` without interfering with `/api/contact`.

## Required Environment Variables

Configure these in Hostinger hPanel for the Node.js Web App.

```env
EMAIL_API_KEY=re_your_real_resend_api_key
EMAIL_FROM=website@your-verified-domain.com
EMAIL_TO=royalchristianacademy07@gmail.com
EMAIL_FROM_NAME=Kapsitwet Royal Christian Academy
SITE_URL=https://your-live-domain.com
```

Hostinger sets `PORT` automatically. Do not set a fixed production port unless Hostinger specifically instructs you to.

## Resend Setup

- Create a Resend account.
- Verify the sending domain used by `EMAIL_FROM`.
- Create a Resend API key and use it for `EMAIL_API_KEY`.
- Set `EMAIL_FROM` to an address on the verified domain, for example `website@example.com`.
- Set `EMAIL_TO` to the mailbox that should receive website enquiries.
- Email delivery will fail until the domain and API key are configured correctly.

## GitHub Deployment Instructions

- Connect this repository to Hostinger Node.js Web App deployment.
- Set the root directory to `/` unless Hostinger shows the repository root differently.
- Set Node.js version to `22.x`.
- Set install command to `npm ci`.
- Set build command to `npm run build`.
- Set start command to `npm start`.
- Set output directory to `dist` if Hostinger asks for one.
- Add the required environment variables in hPanel before testing the contact form.

## Client-Side Routing

- Express serves static assets from `dist`.
- API requests to `/api/contact` are handled before the SPA fallback.
- All other `GET` requests return `dist/index.html`, so direct refreshes of `/about`, `/our-story`, `/programs`, `/admissions`, `/staff`, `/gallery`, and `/contact` work.

## Local Verification

- Run `npm ci`.
- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Run `SITE_URL=http://127.0.0.1:3000 PORT=3000 npm start`.
- Open `http://127.0.0.1:3000/`.
- Open `http://127.0.0.1:3000/about` and `http://127.0.0.1:3000/contact`.
- Submit a test contact request. Without email variables configured, `/api/contact` should return a controlled configuration error.

## Domain And SSL Checklist

- Point the domain DNS to Hostinger.
- Enable SSL in hPanel.
- Force HTTPS after SSL is active.
- Set `SITE_URL` to the final HTTPS domain.
- If both apex and `www` are enabled, set `SITE_URL` to the canonical one and redirect the other in Hostinger.

## Post-Deployment Tests

- Open the homepage.
- Refresh `/about`, `/our-story`, `/programs`, `/admissions`, `/staff`, `/gallery`, and `/contact` directly.
- Confirm images, PDF links, CSS, JS, favicon, and logo load without 404s.
- Submit the contact form with missing fields and confirm validation appears.
- Submit the contact form with valid values and confirm a success message appears after the Resend variables are configured.
- Confirm the email arrives at `EMAIL_TO`.
- Submit repeated messages and confirm rate limiting responds safely.
- Test at 320px, 375px, 390px, 430px, 768px, 820px, 1024px, and desktop widths.

## Updating And Redeploying

- Push changes to GitHub.
- Trigger Hostinger redeployment or wait for automatic deployment.
- Hostinger should run `npm ci`, `npm run build`, then `npm start`.
- Keep real environment variables only in Hostinger hPanel, never in Git.
