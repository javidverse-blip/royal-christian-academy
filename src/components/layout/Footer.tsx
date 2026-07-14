import { Phone, Mail, MapPin, Youtube } from 'lucide-react';
import { usePage, type Page } from '../../context/PageContext';

const contactHref = 'mailto:royalchristianacademy07@gmail.com?subject=Contact%20Royal%20Christian%20Academy';

/* Footer navigation mirrors the active route list. */
const quickLinkColumns: { label: string; page: Page }[][] = [
  [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Our Story', page: 'our-story' },
    { label: 'Programs', page: 'programs' },
  ],
  [
    { label: 'Admissions', page: 'admissions' },
    { label: 'Our Staff', page: 'staff' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ],
];

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5V6.75c0-.5.34-.75.86-.75H17V2.2A28.6 28.6 0 0 0 13.87 2C10.76 2 8.63 3.9 8.63 7.38V8.5H5.1v4.25h3.53V22h4.33v-9.25h3.4L16.9 8.5H14Z" />
    </svg>
  );
}


/* Shared footer with school identity and direct contact details. */
export default function Footer() {
  const { navigate } = usePage();

  return (
    <footer id="site-footer" style={{ background: '#130828' }} className="text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 mb-5 text-left">
              <img
                src="/images/general/krca-new-logo.png"
                alt="Kapsitwet Royal Christian Academy"
                width="512"
                height="523"
                decoding="async"
                loading="lazy"
                className="h-14 w-14 rounded-full bg-white border-2 border-gold object-contain p-1 flex-shrink-0"
              />
              <div>
                <p className="text-gold font-bold text-base leading-snug font-serif">Kapsitwet Royal Christian Academy</p>
                <p className="text-white/50 text-xs mt-0.5 italic">Sharing God's Wisdom</p>
              </div>
            </button>
            <p className="text-white/55 text-sm leading-relaxed mb-2 max-w-sm">
              Training hands for service, minds for truth, and hearts for Christ.
            </p>
            <p className="text-white/40 text-xs italic mb-6">Vision: Victory in Jesus</p>
            <div className="flex items-center gap-3" aria-label="Social and email links">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60" aria-label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60" aria-label="YouTube">
                <Youtube size={18} aria-hidden="true" />
              </span>
              <a
                href={contactHref}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-gold/50 hover:text-gold"
                aria-label="Email Royal Christian Academy"
              >
                <Mail size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8">
              {quickLinkColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-3">
                  {column.map((link) => (
                    <li key={link.page}>
                      <button
                        onClick={() => navigate(link.page)}
                        className="text-white/55 text-sm hover:text-gold transition-colors duration-200 text-left flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-3">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  Kapsitwet, Kitale<br />Trans-Nzoia County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold flex-shrink-0" />
                <a href="tel:+254724403284" className="text-white/55 text-sm hover:text-gold transition-colors">
                  +254-724-403-284
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold flex-shrink-0" />
                <a href={contactHref} className="text-white/55 text-xs hover:text-gold transition-colors break-all">
                  royalchristianacademy07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-3 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p className="text-white/30 text-xs">
            &copy; 2026 Kapsitwet Royal Christian Academy. All rights reserved.
          </p>
          <p className="text-white/30 text-xs lg:text-right">
            Designed by JavidVerse - For All Creative Solutions | Email us at:{' '}
            <a href="mailto:javidverse@gmail.com" className="hover:text-gold transition-colors">
              javidverse@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
