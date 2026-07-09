import { Activity, ArrowRight, Award, BookOpen, Handshake, Heart, MapPin, Mic, Shield, Sprout, Star, Users } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import { usePage } from '../../context/PageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const coreValues = [
  { icon: Heart, label: 'Love', desc: "Rooted in God's unconditional love for every learner and staff member." },
  { icon: Shield, label: 'Excellence with Humility', desc: 'Pursuing high standards while remaining grounded in humility and grace.' },
  { icon: Users, label: 'Respect and Dignity', desc: 'Honoring the God-given worth and dignity of every individual.' },
  { icon: BookOpen, label: 'Faith in Christ', desc: 'Placing Jesus at the center of learning, teaching, and community life.' },
  { icon: Activity, label: 'Discipleship and Character', desc: 'Forming Christ-like character through mentorship and community.' },
  { icon: Mic, label: 'Prayer and Worship', desc: 'Maintaining a culture of prayer and praise that sustains our work.' },
  { icon: Sprout, label: 'Service and Compassion', desc: 'Inspiring students to serve others with generous and compassionate hearts.' },
  { icon: Star, label: 'School Leadership', desc: 'Guiding with integrity, wisdom, and faithfulness to our Christian mission.' },
];

/* About page section composition */
export default function AboutContent() {
  return (
    <>
      <PageBanner page="about" />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <AccreditationAffiliations />
      <FoundersDonors />
      <VisitUs />
    </>
  );
}

/* Academy introduction and school image */
function AboutIntro() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Academy</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-6 leading-tight">
            Welcome to Royal<br />Christian Academy
          </h2>
          <p className="text-gray-600 leading-loose mb-5">
            Welcome to Kapsitwet Royal Christian Academy, a place where education is founded on Christian values and the timeless wisdom of God's Word. We are committed to nurturing the whole child - mind, body, and spirit - preparing our learners for success in this life and the life to come.
          </p>
          <p className="text-gray-600 leading-loose">
            Guided by our vision, <em>"Victory in Jesus,"</em> we strive to create an environment where faith, character, knowledge, and service flourish together. Our goal is to help every learner develop a personal relationship with Christ while pursuing academic excellence and purposeful living.
          </p>
        </div>
        <img
          src="/images/about/our-school.webp"
          alt="Royal Christian Academy school community"
          width="1200"
          height="900"
          sizes="(min-width: 1024px) 50vw, 100vw"
          decoding="async"
          loading="lazy"
          className="h-80 lg:h-[28rem] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>
    </section>
  );
}

/* Mission and vision overview */
function MissionVision() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Foundation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif">Mission &amp; Vision</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 shadow-sm">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Our Mission</p>
            <h3 className="font-bold text-forest text-2xl font-serif mb-4">Educating the whole child</h3>
            <p className="text-gray-600 leading-relaxed">To provide Christ-centered education that equips learners academically, spiritually, physically, and socially for lives of service and faithful leadership.</p>
          </article>
          <article className="bg-forest rounded-2xl p-7 sm:p-9 shadow-sm">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Our Vision</p>
            <h3 className="font-bold text-white text-2xl font-serif mb-4">Victory in Jesus</h3>
            <p className="text-white/70 leading-relaxed">A flourishing school community where every child knows their God-given worth and is prepared to live with wisdom, courage, compassion, and hope.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Christian core values */
function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">What We Stand For</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Core Values</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Eight values guide every decision, relationship, and program at our school.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map(({ icon: Icon, label, desc }) => (
            <article key={label} className="hover-lift bg-cream rounded-2xl p-6 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center mb-4">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="font-bold text-forest text-sm font-serif mb-2">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Accreditation and ministry partnerships */
function AccreditationAffiliations() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Standing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif">Accreditation and Affiliations</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <article className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
                <Award size={20} className="text-gold" />
              </div>
              <h3 className="font-bold text-forest text-2xl font-serif mb-4">Accreditation</h3>
              <p className="text-gray-600 leading-relaxed">
                Kapsitwet Royal Christian Academy is duly registered and recognized by the relevant government authorities and operates in compliance with applicable educational regulations and standards.
              </p>
              <div className="mt-7 inline-flex rounded-2xl bg-cream border border-gray-100 px-5 py-4">
                <img
                  src="/images/general/krca-new-logo.png"
                  alt="Kapsitwet Royal Christian Academy logo"
                  width="512"
                  height="523"
                  decoding="async"
                  className="w-24 sm:w-28 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <Handshake size={20} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-2xl font-serif mb-5">Affiliations</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-gray-100 bg-cream p-4 flex h-32 items-center justify-center">
                <img
                  src="/images/about/Camden-Logo.webp"
                  alt="Camden Seventh-day Adventist Church logo"
                  width="686"
                  height="296"
                  decoding="async"
                  className="max-h-24 w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-gray-100 bg-cream p-4 flex h-32 items-center justify-center">
                <img
                  src="/images/about/blessings-a-new.png"
                  alt="Blessings Anew Ministry logo"
                  width="1022"
                  height="442"
                  decoding="async"
                  className="max-h-24 w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                The Academy is affiliated with the Camden Seventh-day Adventist Church in Tennessee, USA and BlessingsAnew.com Ministry in Georgia, USA.
              </p>
              <p>
                Through this partnership, the school receives valuable spiritual guidance, encouragement, and support that strengthen its mission of providing Christ-centered education and holistic development.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Recognition for the people and partners who support the school mission */
function FoundersDonors() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <article className="rounded-2xl bg-forest px-7 py-10 sm:px-10 sm:py-12 text-center shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
            <Heart size={20} className="text-gold" />
          </div>
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">With Gratitude</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-5">Founders and Donors</h2>
          <p className="text-white/80 leading-8 max-w-3xl mx-auto">
            Kapsitwet Royal Christian Academy is grateful for the vision, dedication, and support of its founders, donors, and partners. Their contributions help advance the mission of providing Christ-centered education and creating opportunities for students to grow academically, spiritually, and practically.
          </p>
        </article>
      </div>
    </section>
  );
}

/* Visit details and story call to action */
function VisitUs() {
  const { navigate } = usePage();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto rounded-2xl bg-cream border border-gray-100 p-7 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">You Are Welcome</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-5">Visit Us</h2>
            <p className="text-gray-600 leading-relaxed mb-7">
              We invite you to come, see, and experience Royal Christian Academy. Whether you want to enroll your child or partner with our mission, you are welcome.
            </p>
            <button
              onClick={() => navigate('our-story')}
              className="inline-flex items-center justify-center gap-2 bg-forest text-white font-semibold px-8 py-3.5 rounded-full hover:bg-forest-light transition-colors duration-200 shadow-sm"
            >
              Read Our Story <ArrowRight size={17} />
            </button>
            <p className="text-gray-500 italic mt-5 font-serif">
              Training hands for service, minds for truth, and hearts for Christ.
            </p>
          </div>

          <address className="not-italic bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <MapPin size={20} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-xl font-serif mb-4">Physical Address</h3>
            <p className="text-gray-600 leading-8">
              Kapsitwet Royal Christian Academy<br />
              30200-1550<br />
              Kapsitwet, Kitale<br />
              Trans-Nzoia County, Kenya
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
