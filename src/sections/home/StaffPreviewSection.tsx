import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const staff = [
  {
    name: 'Mr. James Wekesa',
    role: 'Principal',
    calling: '"Leading with faith, shaping futures for Christ."',
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Mrs. Grace Achieng',
    role: 'Head of Academics',
    calling: '"Excellence in every lesson, glory in every result."',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Mr. David Simiyu',
    role: 'Bible & Chaplain',
    calling: '"Guiding young souls to the heart of the Father."',
    image: 'https://images.pexels.com/photos/8363106/pexels-photo-8363106.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Ms. Ruth Chebet',
    role: 'Mathematics Teacher',
    calling: '"Every number tells the story of God\'s perfect order."',
    image: 'https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Mr. Peter Mwangi',
    role: 'Sciences Teacher',
    calling: '"Exploring creation to deepen wonder and faith."',
    image: 'https://images.pexels.com/photos/8363019/pexels-photo-8363019.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
  {
    name: 'Mrs. Esther Nafula',
    role: 'Physical Education',
    calling: '"A healthy body carries a strong spirit further."',
    image: 'https://images.pexels.com/photos/7983193/pexels-photo-7983193.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  },
];

export default function StaffPreviewSection() {
  const ref = useScrollAnimation();
  return (
    <section id="staff" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Team</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">Meet Our Staff</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Dedicated educators called by God — bringing passion, expertise, and faith to every classroom interaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, i) => (
            <StaffCard key={i} member={member} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StaffCard({ member, delay }: { member: (typeof staff)[0]; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-purple/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="w-1 h-8 bg-royal-gold mx-auto mb-3 rounded-full" />
        <h3 className="font-bold text-royal-purple text-lg font-serif mb-1">{member.name}</h3>
        <p className="text-royal-gold text-sm font-semibold tracking-wide uppercase mb-3">{member.role}</p>
        <p className="text-gray-500 text-sm italic leading-relaxed">{member.calling}</p>
      </div>
    </div>
  );
}
