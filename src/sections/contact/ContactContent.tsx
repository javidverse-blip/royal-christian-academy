import { useState, type FormEvent, type ReactNode } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

const schoolEmail = 'royalchristianacademy07@gmail.com';
const schoolPhone = '+254-724-403-284';
const schoolPhoneHref = 'tel:+254724403284';
const schoolLocation = 'Kapsitwet, Kitale, Trans-Nzoia County, Kenya';
const fieldClass = 'h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-forest focus:ring-4 focus:ring-gold/20';

type ContactResponse = {
  success?: boolean;
  message?: string;
};

/* Contact page section composition. */
export default function ContactContent() {
  return (
    <>
      <PageBanner page="contact" />
      <ContactSection />
    </>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending' || status === 'success') return;

    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get('website') || '').trim()) return;

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setError('Please complete all required fields before sending your message.');
      return;
    }

    if (name.length > 120 || email.length > 254 || subject.length > 140 || message.length > 3000) {
      setStatus('error');
      setError('Please shorten your message details and try again.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message, website: String(data.get('website') || '') }),
      });
      const result = (await response.json().catch(() => ({}))) as ContactResponse;

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'We could not send your message right now. Please try again later.');
      }

      form.reset();
      setStatus('success');
    } catch (submissionError) {
      setStatus('error');
      setError(submissionError instanceof Error ? submissionError.message : 'We could not send your message right now. Please try again later.');
    }
  };

  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 bg-white">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-forest/15 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="relative overflow-hidden bg-forest p-7 text-white sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/15" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-white/10" />
          <div className="relative">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">GET IN TOUCH</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4 leading-tight">We Would Love to Hear From You</h2>
            <p className="text-white/80 leading-8 mb-7">
              Whether you have a question, concern, would like to partner with us, volunteer, or support the work of Royal Christian Academy, please reach out using the form.
            </p>

            <div className="space-y-4 mb-7">
              <ContactDetail icon={Mail} label="Email address">
                <a href={`mailto:${schoolEmail}`} className="hover:text-gold transition-colors break-all">{schoolEmail}</a>
              </ContactDetail>
              <ContactDetail icon={Phone} label="Phone or WhatsApp number">
                <a href={schoolPhoneHref} className="hover:text-gold transition-colors">{schoolPhone}</a>
              </ContactDetail>
              <ContactDetail icon={MapPin} label="School location">
                <span>{schoolLocation}</span>
              </ContactDetail>
            </div>

            <p className="border-t border-white/15 pt-5 text-gold font-serif text-lg font-semibold leading-relaxed">
              Together, we can create better opportunities for every child.
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <h2 className="text-3xl font-bold text-forest font-serif mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === 'sending'}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <FormField label="Full Name" htmlFor="name">
              <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="Your name" className={fieldClass} />
            </FormField>

            <FormField label="Email Address" htmlFor="email">
              <input id="email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="your@email.com" className={fieldClass} />
            </FormField>

            <FormField label="Subject" htmlFor="subject">
              <select id="subject" name="subject" required defaultValue="" className={fieldClass}>
                <option value="" disabled>Select an option</option>
                <option>General Inquiry</option>
                <option>Partner With Us</option>
                <option>Contribute or Support</option>
                <option>Volunteer</option>
                <option>Other</option>
              </select>
            </FormField>

            <FormField label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={6}
                placeholder="Tell us how we can help."
                className={fieldClass + ' h-auto min-h-36 resize-y py-3 leading-6'}
              />
            </FormField>

            <div aria-live="polite" role="status">
              {status === 'success' && (
                <p className="rounded-xl bg-forest/10 px-4 py-3 text-sm text-forest">
                  Thank you for contacting Royal Christian Academy. Your message has been received, and we will get back to you soon.
                </p>
              )}
              {status === 'error' && error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-white transition-colors hover:bg-forest-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              <Send size={17} aria-hidden="true" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
        <Icon size={17} aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/45 mb-1">{label}</p>
        <p className="text-sm leading-6 text-white/85">{children}</p>
      </div>
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-forest mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
