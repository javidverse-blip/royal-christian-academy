import { ChevronDown, Quote } from 'lucide-react';
import { usePage, type Navigate } from '../../context/PageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const programs = [
  { icon: '🔧', title: 'Vocational Training', desc: 'Hands-on skills fostering self-reliance, entrepreneurship, and sustainable livelihoods.', image: '/images/programs/vocational-training.webp', imageClass: 'object-[center_38%]', width: 1146, height: 1050 },
  { icon: '🤝', title: 'Community Outreach', desc: "Evangelism, humanitarian assistance, and reflecting Christ's love in action.", image: '/images/programs/community-outreach.webp', imageClass: 'object-center', width: 1200, height: 828 },
  { icon: '🌱', title: 'Agriculture & Farming', desc: 'Sustainable farming, environmental stewardship, and responsible land management.', image: '/images/programs/agriculture-farming.webp', imageClass: 'object-center', width: 1200, height: 900 },
];

const studentLife = [
  { title: 'Pre-primary', caption: 'Young learners growing together in a safe, joyful classroom environment.', image: '/images/gallery/pre-primary.webp', imageClass: 'object-[center_44%]' },
  { title: 'Grade 1', caption: 'Early primary students building confidence through guided learning.', image: '/images/gallery/grade-one.webp', imageClass: 'object-[center_42%]' },
];

/* Homepage section composition */
export default function HomeContent() {
  const { navigate } = usePage();
  return (
    <>
      <Hero navigate={navigate} />
      <WelcomeSection navigate={navigate} />
      <HomeStoryIntro navigate={navigate} />
      <MissionVision />
      <ProgramsPreview navigate={navigate} />
      <StudentLifeSection navigate={navigate} />
      <CtaSection navigate={navigate} />
    </>
  );
}

/* Hero section */
function Hero({ navigate }: { navigate: Navigate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/general/hero-bg.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/65 to-forest-dark/35" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-24 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.16] sm:leading-[1.14] lg:leading-[1.12] mb-6 font-serif">
            Kapsitwet Royal Christian Academy
          </h1>
          <p className="text-gold text-xl sm:text-2xl font-semibold mb-5 font-serif italic">
            Sharing God's Wisdom
          </p>
          <div className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            Kapsitwet, Kitale &bull; Trans-Nzoia County, Kenya
          </div>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-5 leading-8">
            Training hands for service, minds for truth, and hearts for Christ.
          </p>
          <p className="text-white/55 text-sm mb-12 italic">Vision: Victory in Jesus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('about')}
              className="bg-gold text-forest-dark font-bold px-10 py-4 rounded-full text-base hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Learn More About Us
            </button>
            <button
              onClick={() => navigate('admissions')}
              className="border-2 border-gold text-gold font-semibold px-10 py-4 rounded-full text-base hover:bg-gold hover:text-forest-dark transition-all duration-300"
            >
              Admissions
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
}

/* Welcome section */
function WelcomeSection({ navigate }: { navigate: Navigate }) {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative min-h-[320px] sm:min-h-[440px] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/images/general/welcome-pic.webp"
              alt="Students at Kapsitwet Royal Christian Academy"
              width="1200"
              height="900"
              sizes="(min-width: 1024px) 50vw, 100vw"
              decoding="async"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div ref={ref} className="animate-on-scroll">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Welcome</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-6 leading-tight">
              Kapsitwet Royal<br />Christian Academy
            </h2>
            <p className="text-gray-600 text-base leading-loose mb-5">
              A place where education is founded on Christian values and the timeless wisdom of God's Word. We are committed to nurturing the whole child — mind, body, and spirit — preparing our learners not only for success in this life but also for the life to come.
            </p>
            <p className="text-gray-600 text-base leading-loose mb-5">
              Guided by our vision, <em>"Victory in Jesus,"</em> we strive to create an environment where faith, character, knowledge, and service flourish together. Our goal is to help every learner develop a personal relationship with Christ while pursuing academic excellence and purposeful living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button
                onClick={() => navigate('about')}
                className="bg-forest text-white font-semibold px-8 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
              >
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Homepage story introduction */
function HomeStoryIntro({ navigate }: { navigate: Navigate }) {
  const ref = useScrollAnimation();

  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-1 min-h-[20rem] overflow-hidden rounded-2xl bg-white shadow-xl sm:min-h-[28rem] lg:order-2 lg:min-h-[34rem]">
            <img
              src="/images/about/our-story.png"
              alt="Royal Christian Academy story and campaign booklet cover"
              width="1080"
              height="1080"
              sizes="(max-width: 1024px) 100vw, 45vw"
              decoding="async"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain p-2 sm:p-3"
            />
          </div>
          <div className="order-2 text-gray-700 leading-8 lg:order-1 lg:pr-2">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">A Humble Beginning</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-5 leading-tight">
              A School Born and Thriving From Faith
            </h2>
            <blockquote className="mb-6 rounded-2xl border-l-4 border-gold bg-gold/10 px-5 py-5 text-forest shadow-sm">
              <Quote size={30} className="text-gold mb-3" aria-hidden="true" />
              <p className="font-serif text-2xl italic leading-snug sm:text-3xl">"It's a rescue mission disguised as a school."</p>
            </blockquote>
            <p className="text-base leading-8">
              Royal Christian Academy began with a simple act of faith and a willingness to use what was already in hand. What started in humble conditions has grown into a place of education, safety, dignity, and hope for vulnerable children. The school continues to thrive because ordinary people have chosen to listen, respond, and believe that God can build something lasting from a small beginning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => navigate('our-story')}
                className="bg-forest text-white font-semibold px-8 py-3 rounded-full hover:bg-forest-light transition-colors duration-200"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mission and vision section */
function MissionVision() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #341d6f 0%, #4a2d8f 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Foundation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">Mission &amp; Vision</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <MvCard
            label="Our Mission"
            text="To provide Christian education that develops the mind, body, and spirit for this life and the life to come."
            delay={0}
          />
          <MvCard
            label="Our Vision"
            text="Victory in Jesus — raising a generation of Kingdom champions rooted in faith, knowledge, and character."
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}


/* Mission or vision card */
function MvCard({ label, text, delay }: { label: string; text: string; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll bg-white/10 backdrop-blur-sm border-l-4 border-gold rounded-2xl p-6 sm:p-8"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-gold text-xs font-bold tracking-widest uppercase mb-4">{label}</p>
      <p className="text-white text-base sm:text-lg leading-relaxed font-serif italic">{text}</p>
    </div>
  );
}

/* Programs preview section */
function ProgramsPreview({ navigate }: { navigate: Navigate }) {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Featured Programs</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Six transformative programs designed to develop the whole child — spiritually, academically, and practically.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {programs.map((p, i) => (
            <ProgramCard key={i} program={p} delay={i * 80} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate('programs')}
            className="bg-forest text-white font-semibold px-10 py-4 rounded-full hover:bg-forest-light transition-colors duration-200 shadow-lg"
          >
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}


/* Homepage program preview card */
function ProgramCard({ program, delay }: { program: (typeof programs)[0]; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-cream rounded-2xl overflow-hidden border border-gray-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-40 sm:h-44 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          width={program.width}
          height={program.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          decoding="async"
          className={`h-full w-full object-cover ${program.imageClass} transition-transform duration-500 hover:scale-105`}
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{program.icon}</span>
          <h3 className="font-bold text-forest text-sm sm:text-base font-serif">{program.title}</h3>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{program.desc}</p>
      </div>
    </div>
  );
}

/* Student life preview section */
function StudentLifeSection({ navigate }: { navigate: Navigate }) {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-10 sm:mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Life at Our School</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Student Life</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">A glimpse of early learning at Royal Christian Academy, where children grow in confidence, care, and faith.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-10">
          {studentLife.map((activity, i) => (
            <StudentLifeCard key={activity.title} activity={activity} delay={i * 90} />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate('gallery')}
            className="bg-forest text-white font-semibold px-10 py-4 rounded-full hover:bg-forest-light transition-colors duration-200 shadow-lg"
          >
            See Gallery
          </button>
        </div>
      </div>
    </section>
  );
}


/* Homepage student life card */
function StudentLifeCard({ activity, delay }: { activity: (typeof studentLife)[0]; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <article
      ref={ref}
      className="animate-on-scroll group hover-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-80 sm:h-96 lg:h-[26rem] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          width="1200"
          height="900"
          sizes="(min-width: 768px) 50vw, 100vw"
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${activity.imageClass}`}
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-forest text-lg font-serif">{activity.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mt-2">{activity.caption}</p>
      </div>
    </article>
  );
}


/* Final admissions call to action */
function CtaSection({ navigate }: { navigate: Navigate }) {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">Join Our Family</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-5 leading-tight">
            Ready to be Part of Us?
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            We warmly welcome you to the Kapsitwet Royal Christian Academy family and pray that God richly blesses you as you explore the opportunities available within our school community.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('about')}
              className="bg-forest text-white font-bold px-10 py-4 rounded-full hover:bg-forest-light hover:scale-105 transition-all duration-300 shadow-lg"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
