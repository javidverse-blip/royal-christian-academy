import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePage, type Page } from '../../context/PageContext';

/* Main navigation shared by desktop and mobile menus. */
const navLinks: { label: string; page: Page; href: string }[] = [
  { label: 'Home', page: 'home', href: '/' },
  { label: 'About Us', page: 'about', href: '/about' },
  { label: 'Our Story', page: 'our-story', href: '/our-story' },
  { label: 'Programs', page: 'programs', href: '/programs' },
  { label: 'Admissions', page: 'admissions', href: '/admissions' },
  { label: 'Staff', page: 'staff', href: '/staff' },
  { label: 'Gallery', page: 'gallery', href: '/gallery' },
];


/* Fixed site navigation and mobile menu. */
export default function Navbar() {
  const { currentPage, navigate } = usePage();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-forest-dark shadow-lg py-3 border-b border-forest-light/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a
          href="/"
          onClick={(event) => { event.preventDefault(); navigate('home'); setOpen(false); }}
          className="flex items-center gap-3 text-left flex-shrink-0"
        >
          <img
            src="/images/general/krca-new-logo.png"
            alt="Kapsitwet Royal Christian Academy"
            width="512"
            height="523"
            decoding="async"
            fetchPriority="high"
            className="h-11 w-11 rounded-full bg-white object-contain p-1 border-2 border-gold flex-shrink-0"
          />
          <div className="hidden sm:block">
            <p className="text-gold font-bold text-sm leading-tight font-serif">Kapsitwet Royal Christian Academy</p>
            <p className="text-white/60 text-xs tracking-wide">Sharing God's Wisdom</p>
          </div>
        </a>

        <ul className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.page}>
              <a
                href={link.href}
                onClick={(event) => { event.preventDefault(); navigate(link.page); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'bg-gold text-forest-dark font-semibold'
                    : 'text-white/80 hover:text-gold hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          onClick={(event) => { event.preventDefault(); navigate('contact'); }}
          className="hidden xl:block bg-gold text-forest-dark font-semibold text-sm px-5 py-2 rounded-full hover:bg-gold-light transition-colors duration-200 flex-shrink-0"
        >
          Contact Us
        </a>

        <button
          className="xl:hidden text-white p-2 flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-forest-dark border-t border-white/10 px-4 py-5">
          <ul className="flex flex-col gap-1 mb-5">
            {navLinks.map((link) => (
              <li key={link.page}>
                <a
                  href={link.href}
                  onClick={(event) => { event.preventDefault(); navigate(link.page); setOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-gold text-forest-dark font-semibold'
                      : 'text-white/80 hover:text-gold hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            onClick={(event) => { event.preventDefault(); navigate('contact'); setOpen(false); }}
            className="block w-full text-center bg-gold text-forest-dark font-semibold px-6 py-3 rounded-full"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
