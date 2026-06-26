import { ChevronRight } from 'lucide-react';
import { usePage, type Page } from '../context/PageContext';

const bannerConfig: Record<Exclude<Page, 'home'>, { title: string; subtitle: string }> = {
  about: {
    title: 'About Us',
    subtitle: 'Our story, mission, values, and the people who make this school family.',
  },
  programs: {
    title: 'Our Programs',
    subtitle: 'Holistic programs that develop the whole child — spiritually, academically, and practically.',
  },
  admissions: {
    title: 'Admissions',
    subtitle: 'Join the Kapsitwet Royal Christian Academy family today.',
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We are located in Kapsitwet, Kitale, Trans-Nzoia County, Kenya.',
  },
};

export default function PageBanner({ page }: { page: Exclude<Page, 'home'> }) {
  const { navigate } = usePage();
  const config = bannerConfig[page];

  return (
    <div
      className="pt-20"
      style={{ background: 'linear-gradient(135deg, #250f5a 0%, #341d6f 60%, #4a2d8f 100%)' }}
    >
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201,160,39,0.8) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-14 sm:py-20">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <button
              onClick={() => navigate('home')}
              className="hover:text-gold transition-colors"
            >
              Home
            </button>
            <ChevronRight size={14} />
            <span className="text-gold font-medium">{config.title}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-3 leading-tight">
            {config.title}
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed">
            {config.subtitle}
          </p>
          <div className="mt-6 w-20 h-1 bg-gold rounded-full" />
        </div>
      </div>
    </div>
  );
}
