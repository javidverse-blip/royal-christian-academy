import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { usePage, type Page } from '../../context/PageContext';

/* Footer navigation mirrors the active route list. */
const quickLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Programs', page: 'programs' },
  { label: 'Admissions', page: 'admissions' },
  { label: 'Our Staff', page: 'staff' },
  { label: 'Gallery', page: 'gallery' },
];


/* Shared footer with school identity and direct contact details. */
export default function Footer() {
  const { navigate } = usePage();

  return (
    <footer style={{ background: '#130828' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <button onClick={() => navigate('home')} className="flex items-center gap-3 mb-5 text-left">
              <img
                src="/images/branding/logo.jpg"
                alt="Kapsitwet Royal Christian Academy"
                className="h-14 w-14 rounded-full border-2 border-gold object-cover flex-shrink-0"
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
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
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
                <a href="mailto:royalchristianacademy07@gmail.com" className="text-white/55 text-xs hover:text-gold transition-colors break-all">
                  royalchristianacademy07@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="mailto:royalchristianacademy07@gmail.com"
              className="mt-6 inline-block bg-gold text-forest-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Kapsitwet Royal Christian Academy. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Kapsitwet, Kitale &bull; Trans-Nzoia County, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
