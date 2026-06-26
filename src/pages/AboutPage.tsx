import {
  Heart, Shield, Users, BookOpen, Activity, Sprout,
  Mic, Star, CheckCircle, Globe
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coreValues = [
  { icon: Heart, label: 'Love', desc: "Rooted in God's unconditional love for every learner and staff member." },
  { icon: Shield, label: 'Excellence with Humility', desc: 'Pursuing the highest standards while remaining grounded in humility and grace.' },
  { icon: Users, label: 'Respect and Dignity', desc: 'Honoring the God-given worth and dignity of every individual.' },
  { icon: BookOpen, label: 'Faith in Christ', desc: 'Placing Jesus at the center of all learning, teaching, and community life.' },
  { icon: Activity, label: 'Discipleship and Character', desc: 'Forming Christ-like character through intentional mentorship and community.' },
  { icon: Mic, label: 'Prayer and Worship', desc: 'Maintaining a culture of prayer and praise that sustains everything we do.' },
  { icon: Sprout, label: 'Service and Compassion', desc: 'Inspiring students to serve others with a generous and compassionate heart.' },
  { icon: Star, label: 'School Leadership', desc: 'Guiding with integrity, wisdom, and faithfulness to our Christian mission.' },
];

const leadership = [
  {
    role: 'Founder',
    name: 'Diana Booker',
    description: "The Founder provides the vision and guiding principles upon which the institution was established, ensuring the school's mission, values, and Christian identity remain central to all programs and activities.",
    image: '/diana.jpg',
    imageClass: 'object-[center_36%]',
    variant: 'person' as const,
  },
  {
    role: 'Board of Directors',
    description: 'The Board provides governance, oversight, and strategic direction. The Board works closely with the administration to ensure accountability, sustainability, and the fulfillment of the institution\'s mission.',
    variant: 'building' as const,
  },
  {
    role: 'Director',
    name: 'Mr. Kelzy Origi',
    phone: '(+254)-715-726-929',
    description: 'The Director oversees overall administration, strategic planning, and development, ensuring all departments work effectively together to achieve the school\'s goals and vision.',
    variant: 'person' as const,
  },
];

const faculty = [
  { name: 'Mr. Maxwell Okoth', role: 'Principal', image: '/principal.png', imageClass: 'object-[center_32%]', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Pre-school Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 1 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 2 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 3 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Vocational Skills Teacher', variant: 'activity' as const },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner page="about" />
      <AboutSection />
      <CoreValuesSection />
      <LeadershipSection />
      <FacultySection />
      <FoundersDonors />
      <AccreditationSection />
    </>
  );
}

/* About section */
function AboutSection() {
  const ref = useScrollAnimation();
  const imgRef = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={ref} className="animate-on-scroll">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Academy</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-6 leading-tight">
              Building Tomorrow's<br />Kingdom Leaders
            </h2>
            <p className="text-gray-600 text-base leading-loose mb-5">
              Kapsitwet Royal Christian Academy is a place where education is founded on Christian values and the timeless wisdom of God's Word. We are committed to nurturing the whole child — mind, body, and spirit — preparing our learners for success in this life and the life to come.
            </p>
            <p className="text-gray-600 text-base leading-loose mb-5">
              Guided by our vision, <em>"Victory in Jesus,"</em> we strive to create an environment where faith, character, knowledge, and service flourish together. Our goal is to help every learner develop a personal relationship with Christ while pursuing academic excellence and purposeful living.
            </p>
            <p className="text-gray-600 text-base leading-loose">
              Our dedicated teachers and staff are committed Christian professionals who serve as educators, mentors, and role models — providing quality instruction, spiritual guidance, and personal support that help every learner reach their God-given potential.
            </p>
          </div>
          <div ref={imgRef} className="animate-on-scroll">
            <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/our-school.jpg"
                alt="Our school in Kapsitwet, Kitale"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Core values section */
function CoreValuesSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">What We Stand For</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Core Values</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Eight foundational values that guide every decision, relationship, and program at our school.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {coreValues.map((v, i) => (
            <ValueCard key={i} value={v} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, delay }: { value: (typeof coreValues)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const Icon = value.icon;
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest flex items-center justify-center mb-4">
        <Icon size={18} className="text-gold" />
      </div>
      <h3 className="font-bold text-forest text-sm font-serif mb-2">{value.label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
    </div>
  );
}

/* Leadership section */
function LeadershipSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Who Leads Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">School Leadership</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Our leadership team is committed to nurturing students academically, spiritually, physically, and socially — preparing them for lives of service, leadership, and Christian witness.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
          {leadership.map((leader, i) => (
            <LeaderCard key={i} leader={leader} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderCard({ leader, delay }: { leader: (typeof leadership)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const { name, role, phone, description, image, imageClass, variant } = leader;

  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-cream rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {image ? (
        <img
          src={image}
          alt={name ?? role}
          className={`h-56 sm:h-60 w-full object-cover ${imageClass ?? 'object-center'}`}
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder
          variant={variant}
          label={name ?? 'Photo Coming Soon'}
          className="h-56 sm:h-60"
          rounded="rounded-none"
        />
      )}
      <div className="p-5">
        <div className="w-8 h-1 bg-gold rounded-full mb-3" />
        <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1">{role}</p>
        {name && <h3 className="font-bold text-forest text-base font-serif mb-1">{name}</h3>}
        {phone && (
          <a href={`tel:${phone}`} className="text-xs text-forest-light hover:text-gold transition-colors mb-2 block">
            {phone}
          </a>
        )}
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* Faculty and staff section */
function FacultySection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Teachers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Faculty &amp; Staff</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Our faculty and staff are committed Christian professionals — educators, mentors, and role models dedicated to helping every learner reach their God-given potential.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <FacultyCard key={i} member={member} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ member, delay }: { member: (typeof faculty)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const { name, role, image, imageClass, variant } = member;

  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className={`h-56 sm:h-60 w-full object-cover ${imageClass ?? 'object-center'}`}
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder
          variant={variant}
          label="Photo Coming Soon"
          className="h-56 sm:h-60"
          rounded="rounded-none"
        />
      )}
      <div className="p-5">
        <div className="w-8 h-1 bg-gold rounded-full mb-3" />
        <h3 className="font-bold text-forest text-base font-serif mb-1">{name}</h3>
        <p className="text-gold text-xs font-bold tracking-widest uppercase">{role}</p>
      </div>
    </div>
  );
}

/* Founders and donors section */
function FoundersDonors() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Supporters</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Founders &amp; Donors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Kapsitwet Royal Christian Academy is grateful for the vision, dedication, and support of its founders, donors, and partners. Their contributions help advance the mission of providing Christ-centered education and creating opportunities for students to grow academically, spiritually, and practically.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          <SupporterCard icon={Heart} label="Donors" desc="Generous individuals who believe in Christ-centered education for children in Kenya." delay={0} />
          <SupporterCard icon={Globe} label="Church Partners" desc="Faith communities who pray for, encourage, and support the academy's mission." delay={100} />
          <SupporterCard icon={Users} label="Organizations" desc="Institutions that partner with us to expand our impact within the community." delay={200} />
        </div>
      </div>
    </section>
  );
}

function SupporterCard({ icon: Icon, label, desc, delay }: { icon: React.ElementType; label: string; desc: string; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-cream rounded-2xl p-6 sm:p-7 text-center border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-forest flex items-center justify-center mx-auto mb-5">
        <Icon size={22} className="text-gold" />
      </div>
      <h3 className="font-bold text-forest text-lg font-serif mb-3">{label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AccreditationSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-10 sm:mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Accreditation &amp; Affiliations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <CheckCircle size={20} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-lg sm:text-xl font-serif mb-3">Accreditation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kapsitwet Royal Christian Academy is duly registered and recognized by the relevant government authorities and operates in compliance with applicable educational regulations and standards in Kenya.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <Globe size={20} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-lg sm:text-xl font-serif mb-3">Affiliations</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The Academy is affiliated with international partners who provide valuable spiritual guidance, encouragement, and support that strengthen our mission of providing Christ-centered education.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gold mt-1">•</span>
                Camden Seventh-day Adventist Church — Tennessee, USA
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gold mt-1">•</span>
                BlessingsAnew.com Ministry — Georgia, USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
