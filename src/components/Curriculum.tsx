import { GraduationCap, Heart, Dumbbell } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tracks = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    color: 'bg-royal-purple',
    textColor: 'text-royal-purple',
    borderColor: 'border-royal-purple',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    points: [
      'Science, Mathematics & Technology',
      'Languages & Literature',
      'Social Studies & History',
      'Arts & Creative Expression',
      'Bible-integrated lesson plans',
    ],
    desc: 'We pursue intellectual rigor with purpose — developing critical thinkers who apply knowledge for God\'s glory. Our curriculum meets national standards while weaving Scripture throughout every discipline.',
  },
  {
    icon: Dumbbell,
    title: 'Physical Development',
    color: 'bg-royal-gold',
    textColor: 'text-royal-gold-dark',
    borderColor: 'border-royal-gold',
    image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    points: [
      'Daily physical education',
      'Team sports and athletics',
      'Nutrition and health education',
      'Outdoor adventure activities',
      'Holistic wellness programs',
    ],
    desc: 'Our bodies are temples of the Holy Spirit. We invest in physical education and healthy lifestyles, equipping students with vitality, discipline, and teamwork that lasts a lifetime.',
  },
  {
    icon: Heart,
    title: 'Spiritual Growth',
    color: 'bg-gradient-to-br from-royal-purple to-royal-purple-light',
    textColor: 'text-royal-purple',
    borderColor: 'border-royal-purple-light',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    points: [
      'Daily morning devotions',
      'Bible study and discipleship',
      'Chapel services and worship',
      'Prayer and meditation',
      'Christian community service',
    ],
    desc: 'Spiritual formation is at the heart of everything we do. Through worship, prayer, discipleship, and service, students develop a deep, personal relationship with Jesus Christ.',
  },
];

export default function Curriculum() {
  const ref = useScrollAnimation();
  return (
    <section id="curriculum" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">Our Curriculum</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            A holistic, three-pillar approach that develops the whole person — intellect, body, and spirit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <CurriculumCard key={i} track={track} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumCard({ track, delay }: { track: (typeof tracks)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const Icon = track.icon;
  return (
    <div
      ref={ref}
      className={`animate-on-scroll hover-lift rounded-2xl overflow-hidden border ${track.borderColor}/20 shadow-md`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={track.image}
          alt={track.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${track.color} flex items-center justify-center shadow-lg`}>
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="text-white font-bold text-lg font-serif">{track.title}</h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-500 text-sm leading-relaxed mb-5">{track.desc}</p>
        <ul className="space-y-2">
          {track.points.map((pt, j) => (
            <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-royal-gold flex-shrink-0" />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
