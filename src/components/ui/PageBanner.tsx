import { ChevronRight } from 'lucide-react';
import { usePage, type Page } from '../../context/PageContext';

/* Route-specific text for the reusable interior-page banner. */
const bannerConfig: Record<Exclude<Page, 'home'>, { title: string; subtitle: string }> = {
  about: {
    title: 'About Us',
    subtitle: 'Discover the faith, people, and answered prayers that transformed a humble beginning into a place of learning, dignity, and hope.',
  },
  programs: {
    title: 'Our Programs',
    subtitle: 'Holistic programs that develop the whole child — spiritually, academically, and practically.',
  },
  admissions: {
    title: 'Admissions',
    subtitle: 'Join the Kapsitwet Royal Christian Academy family today.',
  },
  staff: {
    title: 'Our Staff',
    subtitle: 'Meet the dedicated leaders, educators, mentors, and supporters serving our school community.',
  },
  gallery: {
    title: 'Gallery',
    subtitle: 'A glimpse into student activities, learning, worship, service, and the projects shaping our future.',
  },
};


/* Shared branded banner used by every non-home route. */
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
