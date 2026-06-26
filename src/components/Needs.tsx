import { BookOpen, UserCheck, Hammer, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { usePage } from '../context/PageContext';

const needs = [
  {
    icon: BookOpen,
    title: 'Classroom Resources',
    desc: 'Textbooks, stationery, science kits, and teaching materials to equip students with the tools they need to excel academically.',
    goal: 'Ksh 250,000',
  },
  {
    icon: UserCheck,
    title: 'Student Sponsorship',
    desc: 'Many brilliant students cannot afford school fees. Your sponsorship gives a child the gift of education and a future rooted in Christ.',
    goal: 'Ksh 15,000 / student / year',
  },
  {
    icon: Hammer,
    title: 'Infrastructure',
    desc: 'New classrooms, improved sanitation facilities, a library, and a chapel — spaces that inspire learning and worship.',
    goal: 'Ksh 2,000,000',
  },
  {
    icon: Heart,
    title: 'Staff Support',
    desc: 'Help us retain and attract dedicated Christian educators by supporting competitive salaries and ongoing professional development.',
    goal: 'Ongoing need',
  },
];

export default function Needs() {
  const ref = useScrollAnimation();
  const { navigate } = usePage();
  return (
    <section id="needs" className="section-padding" style={{ background: 'linear-gradient(135deg, #341d6f 0%, #250f5a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Partner With Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-4">Our Needs</h2>
          <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
            The work is great, the need is real, and every contribution makes an eternal difference in a child's life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {needs.map((need, i) => (
            <NeedCard key={i} need={need} delay={i * 100} />
          ))}
        </div>

        <div ref={useScrollAnimation()} className="animate-on-scroll text-center">
          <p className="text-white/80 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            "Whoever is generous to the poor lends to the Lord, and he will repay him for his deed." — Proverbs 19:17
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="bg-royal-gold text-royal-purple font-bold px-10 py-4 rounded-full hover:bg-royal-gold-light hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate('contact')}
              className="border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:border-royal-gold hover:text-royal-gold transition-all duration-300"
            >
              Support Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedCard({ need, delay }: { need: (typeof needs)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const Icon = need.icon;
  return (
    <div
      ref={ref}
      className="animate-on-scroll bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-royal-gold flex items-center justify-center mb-5">
        <Icon size={22} className="text-royal-purple" />
      </div>
      <h3 className="font-bold text-white text-base font-serif mb-2">{need.title}</h3>
      <p className="text-white/65 text-sm leading-relaxed mb-4">{need.desc}</p>
      <p className="text-royal-gold text-sm font-semibold">{need.goal}</p>
    </div>
  );
}
