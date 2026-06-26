import { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube,
  Send, CheckCircle,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contacts = [
  { role: 'Founder', name: 'Jesus Christ', phone: null },
  { role: 'Co-Founder', name: 'Diana Booker', phone: '(+1) 863-236-0503' },
  { role: 'Director', name: 'Mr. Kelzy Origi', phone: '(+254)-715-726-929' },
  { role: 'Principal', name: 'Mr. Maxwell Okoth', phone: '(+254)-724-403-284' },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#', color: 'bg-blue-600' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { icon: Twitter, label: 'Twitter / X', href: '#', color: 'bg-gray-900' },
  { icon: Youtube, label: 'YouTube', href: '#', color: 'bg-red-600' },
  { icon: Send, label: 'TikTok', href: '#', color: 'bg-black' },
];

const inquiryTypes = [
  'General Inquiry',
  'Admissions Information',
  'Program Details',
  'Fees and Funding',
  'Volunteer / Partner',
  'Donation / Support',
  'Other',
];

export default function ContactPage() {
  return (
    <>
      <PageBanner page="contact" />
      <ContactMain />
      <MapSection />
      <SocialSection />
    </>
  );
}

function ContactMain() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14">
          <div ref={leftRef} className="animate-on-scroll space-y-7">
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Reach Us</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-forest font-serif mb-3 leading-tight">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                We are here to answer your questions and welcome you into our school community. Reach out through any of the channels below.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm mb-1">Physical Address</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Kapsitwet Royal Christian Academy<br />
                    30200-1550<br />
                    Kapsitwet, Kitale<br />
                    Trans-Nzoia County, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm mb-0.5">Email</p>
                  <a href="mailto:royalchristianacademy07@gmail.com" className="text-sm text-gray-500 hover:text-forest transition-colors break-all">
                    royalchristianacademy07@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-forest text-sm mb-1">Office Hours</p>
                  <p className="text-gray-500 text-sm">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-400 text-xs mt-0.5">Saturday, Sunday &amp; Public Holidays: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <p className="font-semibold text-forest text-sm mb-4 border-b border-gray-100 pb-3">Phone Numbers</p>
              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gold font-bold uppercase tracking-wide">{c.role}</p>
                      <p className="text-gray-700 text-sm font-medium">{c.name}</p>
                    </div>
                    {c.phone ? (
                      <a
                        href={`tel:${c.phone.replace(/[^+\d]/g, '')}`}
                        className="flex items-center gap-1.5 bg-forest/10 text-forest text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-forest hover:text-white transition-colors"
                      >
                        <Phone size={11} />
                        {c.phone}
                      </a>
                    ) : (
                      <span className="text-gray-300 text-xs italic">Our Foundation</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={rightRef} className="animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', inquiry: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm h-full flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-5">
          <CheckCircle size={32} className="text-forest" />
        </div>
        <h3 className="text-2xl font-bold text-forest font-serif mb-3">Message Sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
          Thank you for reaching out. A member of our team will get back to you within one business day. God bless you!
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', contact: '', inquiry: '', message: '' }); }}
          className="text-sm text-forest font-medium hover:text-gold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
    >
      <h3 className="text-2xl font-bold text-forest font-serif mb-2">Send Us a Message</h3>
      <p className="text-gray-400 text-sm mb-7">We typically respond within one business day.</p>

      <div className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Your Name *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Phone or Email *
          </label>
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            required
            placeholder="Phone number or email address"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Inquiry Type
          </label>
          <select
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors bg-white"
          >
            <option value="">Select inquiry type…</option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help you?"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-forest text-white font-semibold py-4 rounded-xl hover:bg-forest-light transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Send size={16} />
          Send Message
        </button>
      </div>
    </form>
  );
}

function MapSection() {
  const ref = useScrollAnimation();
  return (
    <section className="px-4 sm:px-8 lg:px-16 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-forest font-serif mb-5">Our Location</h3>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Kapsitwet Royal Christian Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63757.33516547!2d34.9644!3d1.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810f4285c71285%3A0x4b32e7db3a9eb6e1!2sKitale%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-gray-400 text-xs mt-2 text-center">
            Kapsitwet, Kitale, Trans-Nzoia County, Kenya — exact pin will be updated with precise coordinates
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #250f5a 0%, #341d6f 100%)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Stay Connected</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">Follow Our Journey</h2>
          <p className="text-white/65 text-base leading-relaxed mb-10">
            Stay connected with us on social media for updates, events, student achievements, and inspiration from our school community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold text-white text-sm font-medium px-5 py-3 rounded-full transition-all duration-200"
                >
                  <Icon size={16} />
                  {s.label}
                </a>
              );
            })}
          </div>
          <p className="text-white/30 text-xs mt-8">
            Links will be updated when official accounts are created
          </p>
        </div>
      </div>
    </section>
  );
}
