import { ChevronRight } from 'lucide-react';
import { usePage, type Page } from '../../context/PageContext';

/* Route-specific text for the reusable interior-page banner. */
const bannerConfig: Record<Exclude<Page, 'home'>, { title: string; subtitle: string; quote?: string; description?: string }> = {
  about: {
    title: 'About Us',
    subtitle: 'Learn about our Christ-centered school, mission, values, partnerships, and welcome to families and supporters.',
  },
  'our-story': {
    title: 'Our Story',
    subtitle: 'The remarkable true story of how God used ordinary people, extraordinary faith, and answered prayers to transform the lives of vulnerable children in rural Kenya.',
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
        <img
          src="/images/general/krca-new-logo.png"
          alt=""
          width="512"
          height="523"
          aria-hidden="true"
          decoding="async"
          className="pointer-events-none absolute right-6 top-[54%] hidden w-40 -translate-y-1/2 opacity-[0.08] mix-blend-screen sm:block md:w-48 lg:right-16 lg:w-56 xl:w-64"
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
          <p className={`${config.quote ? 'text-gold font-serif text-xl sm:text-2xl italic' : 'text-white/65 text-base sm:text-lg'} max-w-2xl leading-relaxed`}>
            {config.subtitle}
          </p>
          {config.quote && (
            <blockquote className="mt-5 text-white text-lg sm:text-xl font-serif italic max-w-2xl leading-relaxed">
              {config.quote}
            </blockquote>
          )}
          {config.description && (
            <p className="mt-4 text-white/65 text-base sm:text-lg max-w-3xl leading-relaxed">
              {config.description}
            </p>
          )}
          <div className="mt-6 w-20 h-1 bg-gold rounded-full" />
        </div>
      </div>
    </div>
  );
}
