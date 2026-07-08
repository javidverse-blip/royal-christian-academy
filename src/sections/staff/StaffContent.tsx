import { CheckCircle, Globe, Heart, Users } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';

const leadership = [
  {
    role: 'Founder',
    name: 'Diana Booker',
    description: "The Founder provides the vision and guiding principles upon which the institution was established, ensuring the school's mission, values, and Christian identity remain central to all programs and activities.",
    image: '/images/staff/diana.jpg',
    imageClass: 'object-[center_36%]',
    variant: 'person' as const,
  },
  {
    role: 'Board of Directors',
    description: "The Board provides governance, oversight, and strategic direction. The Board works closely with the administration to ensure accountability, sustainability, and the fulfillment of the institution's mission.",
    variant: 'building' as const,
  },
  {
    role: 'Director',
    name: 'Mr. Kelzy Origi',
    phone: '(+254)-715-726-929',
    description: "The Director oversees overall administration, strategic planning, and development, ensuring all departments work effectively together to achieve the school's goals and vision.",
    variant: 'person' as const,
  },
];

const faculty = [
  { name: 'Mr. Maxwell Okoth', role: 'Principal', image: '/images/staff/principal.png', imageClass: 'object-[center_32%]', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Pre-school Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 1 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 2 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Grade 3 Teacher', variant: 'person' as const },
  { name: 'Teacher Name', role: 'Vocational Skills Teacher', variant: 'activity' as const },
];

/* Staff page section composition */
export default function StaffContent() {
  return (
    <>
      <PageBanner page="staff" />
      <LeadershipSection />
      <FacultySection />
      <SupportersSection />
      <AccreditationSection />
    </>
  );
}


/* Founder, board, and director leadership cards */
function LeadershipSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Who Leads Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">School Leadership</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Our leadership team is committed to nurturing students academically, spiritually, physically, and socially - preparing them for lives of service, leadership, and Christian witness.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {leadership.map((leader) => (
            <article key={leader.role} className="hover-lift bg-cream rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {leader.image ? (
                <img src={leader.image} alt={leader.name} className={`h-60 w-full object-cover ${leader.imageClass ?? 'object-center'}`} loading="lazy" />
              ) : (
                <ImagePlaceholder variant={leader.variant} label={leader.name ?? 'Photo Coming Soon'} className="h-60" rounded="rounded-none" />
              )}
              <div className="p-5">
                <div className="w-8 h-1 bg-gold rounded-full mb-3" />
                <p className="text-gold text-xs font-bold tracking-widest uppercase">{leader.role}</p>
                {leader.name && <h3 className="font-bold text-forest font-serif mt-1">{leader.name}</h3>}
                {leader.phone && <a href={`tel:${leader.phone}`} className="text-xs text-forest-light block mt-1">{leader.phone}</a>}
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{leader.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* Faculty and staff directory */
function FacultySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Teachers</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Faculty &amp; Staff</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Our faculty and staff are committed Christian professionals - educators, mentors, and role models dedicated to helping every learner reach their God-given potential.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <article key={`${member.role}-${index}`} className="hover-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              {member.image ? (
                <img src={member.image} alt={member.name} className={`h-64 w-full object-cover ${member.imageClass ?? 'object-center'}`} loading="lazy" />
              ) : (
                <ImagePlaceholder variant={member.variant} label="Photo Coming Soon" className="h-64" rounded="rounded-none" />
              )}
              <div className="p-5">
                <div className="w-8 h-1 bg-gold rounded-full mb-3" />
                <h3 className="font-bold text-forest font-serif">{member.name}</h3>
                <p className="text-gold text-xs font-bold tracking-widest uppercase mt-1">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const supporters = [
  { title: 'Donors', text: 'Generous individuals who believe in Christ-centered education for children in Kenya.', icon: Heart },
  { title: 'Church Partners', text: "Faith communities who pray for, encourage, and support the academy's mission.", icon: Globe },
  { title: 'Organizations', text: 'Institutions that partner with us to expand our impact within the community.', icon: Users },
];


/* Donors, church partners, and supporting organizations */
function SupportersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Supporters</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Founders &amp; Donors</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">Kapsitwet Royal Christian Academy is grateful for the vision, dedication, and support of its founders, donors, and partners. Their contributions advance Christ-centered education and create opportunities for students to grow academically, spiritually, and practically.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {supporters.map(({ title, text, icon: Icon }) => (
            <article key={title} className="bg-cream rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-forest mx-auto mb-5 flex items-center justify-center"><Icon className="text-gold" size={24} /></div>
              <h3 className="font-bold text-forest font-serif text-xl mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* Accreditation and international affiliations */
function AccreditationSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif">Accreditation &amp; Affiliations</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-7">
          <article className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <CheckCircle className="text-gold mb-5" size={28} />
            <h3 className="font-bold text-forest font-serif text-xl mb-4">Accreditation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Kapsitwet Royal Christian Academy is duly registered and recognized by the relevant government authorities and operates in compliance with applicable educational regulations and standards in Kenya.</p>
          </article>
          <article className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <Globe className="text-gold mb-5" size={28} />
            <h3 className="font-bold text-forest font-serif text-xl mb-4">Affiliations</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">The Academy is affiliated with international partners who provide spiritual guidance, encouragement, and support that strengthen our mission.</p>
            <ul className="space-y-2 text-sm text-gray-600 list-disc marker:text-gold pl-5">
              <li>Camden Seventh-day Adventist Church - Tennessee, USA</li>
              <li>BlessingsAnew.com Ministry - Georgia, USA</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
