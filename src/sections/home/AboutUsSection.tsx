import { Target, Eye, Crosshair, BookMarked } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const pillars = [
  {
    icon: Target,
    label: 'Our Mission',
    text: 'To provide Christian education that develops students\' mind, body, and spirit for this life and the life to come.',
  },
  {
    icon: Eye,
    label: 'Our Vision',
    text: 'Victory in Jesus — raising a generation of Kingdom champions rooted in faith, knowledge, and character.',
  },
  {
    icon: Crosshair,
    label: 'Our Aim',
    text: 'Fortifying mind, body, and spirit against evil through intentional Christian education and discipleship.',
  },
  {
    icon: BookMarked,
    label: 'Our Motto',
    text: 'Sharing God\'s Wisdom — embedding the timeless truths of Scripture into every lesson and interaction.',
  },
];

export default function AboutUsSection() {
  const headRef = useScrollAnimation();
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div ref={headRef} className="animate-on-scroll">
              <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-6 leading-tight">
                Building the Kingdom,<br />One Student at a Time
              </h2>
              <p className="text-gray-600 text-base leading-loose mb-6">
                Royal Christian Academy is more than a school — it is a covenant community where faith and learning converge. Located in Kitale, Trans Nzoia County, Kenya, we operate under the West Kenya Union Conference, committed to excellence in Christ-centered education.
              </p>
              <p className="text-gray-600 text-base leading-loose">
                We believe every child is made in the image of God and deserves an education that nurtures their full potential — spiritually, academically, and physically. Our dedicated staff walks alongside each student on their journey toward wholeness and purpose.
              </p>
            </div>

            <div className="mt-8 flex gap-12">
              <StatItem value="200+" label="Students Enrolled" />
              <StatItem value="15+" label="Dedicated Staff" />
              <StatItem value="10+" label="Years of Excellence" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <PillarCard key={i} pillar={p} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll text-center">
      <p className="text-3xl font-bold text-royal-purple font-serif">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

function PillarCard({ pillar, delay }: { pillar: (typeof pillars)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const Icon = pillar.icon;
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-royal-purple flex items-center justify-center mb-4">
        <Icon size={22} className="text-royal-gold" />
      </div>
      <h3 className="font-bold text-royal-purple text-base mb-2 font-serif">{pillar.label}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{pillar.text}</p>
    </div>
  );
}
