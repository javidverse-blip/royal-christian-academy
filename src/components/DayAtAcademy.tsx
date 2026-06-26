import { Sunrise, BookOpen, Wrench, Dumbbell, Moon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const moments = [
  {
    icon: Sunrise,
    time: '6:00 AM',
    title: 'Morning Devotion',
    desc: 'The day begins with prayer and worship — hearts lifted to God before minds engage the world.',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    icon: BookOpen,
    time: '8:00 AM',
    title: 'Academic Classes',
    desc: 'Rigorous, faith-integrated learning across sciences, arts, and humanities guided by dedicated teachers.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    icon: Wrench,
    time: '11:00 AM',
    title: 'Practical Projects',
    desc: 'Hands-on learning — gardening, crafts, and community projects that build real-world wisdom.',
    image: 'https://images.pexels.com/photos/8612968/pexels-photo-8612968.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-green-500/20 to-emerald-500/10',
  },
  {
    icon: Dumbbell,
    time: '3:00 PM',
    title: 'Physical Activities',
    desc: 'Sports, fitness, and outdoor games — honoring God through the health of the body He gave us.',
    image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-royal-purple/20 to-purple-500/10',
  },
  {
    icon: Moon,
    time: '7:00 PM',
    title: 'Evening Reflection',
    desc: 'Students gather for quiet reflection, gratitude, and preparation for tomorrow — ending the day in peace.',
    image: 'https://images.pexels.com/photos/7045470/pexels-photo-7045470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-royal-purple/30 to-blue-900/20',
  },
];

export default function DayAtAcademy() {
  const ref = useScrollAnimation();
  return (
    <section id="day" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Daily Life</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">
            A Day at Royal Christian Academy
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            From the first light of dawn to the quiet of evening, every moment is intentional — shaped by faith, learning, and love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {moments.map((m, i) => {
            const Icon = m.icon;
            return (
              <DayCard key={i} moment={m} Icon={Icon} delay={i * 100} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DayCard({ moment, Icon, delay }: { moment: (typeof moments)[0]; Icon: React.ElementType; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift rounded-2xl overflow-hidden border border-gray-100 shadow-md group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={moment.image}
          alt={moment.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${moment.color}`} />
      </div>
      <div className="p-5 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-royal-purple/10 rounded-full p-2">
            <Icon size={16} className="text-royal-purple" />
          </div>
          <span className="text-royal-gold text-xs font-bold tracking-wider">{moment.time}</span>
        </div>
        <h3 className="font-bold text-royal-purple text-base mb-2 font-serif">{moment.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{moment.desc}</p>
      </div>
    </div>
  );
}
