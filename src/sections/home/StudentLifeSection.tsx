import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const gallery = [
  {
    label: 'Classroom',
    caption: 'Minds engaged, questions asked, wisdom gained.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    span: 'md:col-span-2',
  },
  {
    label: 'Worship',
    caption: 'Lifting our voices in praise.',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    span: '',
  },
  {
    label: 'Community',
    caption: 'Together we grow stronger.',
    image: 'https://images.pexels.com/photos/8363019/pexels-photo-8363019.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    span: '',
  },
  {
    label: 'Activities',
    caption: 'Play, laughter, and discovery.',
    image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    span: 'md:col-span-2',
  },
  {
    label: 'Projects',
    caption: 'Building skills for tomorrow.',
    image: 'https://images.pexels.com/photos/8612968/pexels-photo-8612968.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&dpr=1',
    span: '',
  },
];

export default function StudentLifeSection() {
  const ref = useScrollAnimation();
  return (
    <section id="student-life" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Real Moments</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">Student Life</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Life at Royal Christian Academy is rich, vibrant, and deeply meaningful — every moment an opportunity to grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <GalleryItem key={i} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ item, delay }: { item: (typeof gallery)[0]; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animate-on-scroll relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.label}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/80 via-royal-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
        <span className="text-royal-gold text-xs font-bold tracking-widest uppercase">{item.label}</span>
        <p className="text-white text-sm mt-1 font-serif italic">{item.caption}</p>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-royal-purple/70 text-royal-gold text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase backdrop-blur-sm">
          {item.label}
        </span>
      </div>
    </div>
  );
}
