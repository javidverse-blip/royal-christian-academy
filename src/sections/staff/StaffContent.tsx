import PageBanner from '../../components/ui/PageBanner';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';

type StaffMember = {
  role: string;
  name?: string;
  phone?: string;
  description?: string;
  image?: string;
  imageClass?: string;
  imageWidth?: number;
  imageHeight?: number;
  variant: 'person' | 'building' | 'nature' | 'activity';
};

const founderAndBoard = [
  {
    role: 'Founder',
    name: 'Diana Booker',
    description: "The Founder provides the vision and guiding principles upon which the institution was established, ensuring the school's mission, values, and Christian identity remain central to all programs and activities.",
    image: '/images/staff/diana.jpg',
    imageClass: 'object-[center_22%]',
    imageWidth: 576,
    imageHeight: 576,
    variant: 'person' as const,
  },
  {
    role: 'Board of Directors',
    description: "The Board provides governance, oversight, and strategic direction. The Board works closely with the administration to ensure accountability, sustainability, and the fulfillment of the institution's mission.",
    variant: 'building' as const,
  },
] satisfies StaffMember[];

const schoolLeadership = [
  {
    role: 'Director',
    name: 'Mr. Kelzy Origi',
    phone: '(+254)-715-726-929',
    description: "The Director oversees overall administration, strategic planning, and development, ensuring all departments work effectively together to achieve the school's goals and vision.",
    variant: 'person' as const,
  },
  {
    role: 'Principal',
    name: 'Mr. Maxwell Okoth',
    description: 'The Principal oversees the daily leadership of the school, supporting academic growth, student care, staff coordination, and the overall learning environment.',
    image: '/images/staff/principal.webp',
    imageClass: 'object-[center_32%]',
    imageWidth: 958,
    imageHeight: 680,
    variant: 'person' as const,
  },
  {
    name: 'MD. Rael Iteba',
    role: 'Secretary / School Administrator',
    description: 'The Secretary / School Administrator supports daily school operations, communication, records, and administrative coordination.',
    image: '/images/staff/MD. Rael-Iteba-Secretary.jpg',
    imageClass: 'object-[center_28%]',
    imageWidth: 4080,
    imageHeight: 3060,
    variant: 'person' as const,
  },
] satisfies StaffMember[];

const teachingFaculty = [
  { name: 'MD. Valentine Wafula', role: 'Pre-Primary Teacher', image: '/images/staff/MD. Valentine-Wafula-Pre Primary.jpg', imageClass: 'object-[center_10%]', imageWidth: 8160, imageHeight: 6120, variant: 'person' as const },
  { name: 'MD. Phanlyne Sifuni', role: 'Grade 1 Teacher', image: '/images/staff/MD. Phanlyne-Sifuni-Grade-one-class-Teacher.jpg', imageClass: 'object-[center_30%]', imageWidth: 4080, imageHeight: 3060, variant: 'person' as const },
  { name: 'Mr. Nevin Abur', role: 'Grade 2 Teacher', image: '/images/staff/Mr. Nevin-Abur-Grade-Two-Class-Teacher.jpg', imageClass: 'object-[center_15%]', imageWidth: 8160, imageHeight: 6120, variant: 'person' as const },
] satisfies StaffMember[];

const supportTeam = [
  { name: 'Mr. Emmanuel Simiyu', role: 'Farm Manager', image: '/images/staff/Mr. Emmanuel-Simiyu-Farm-Manager .jpg', imageClass: 'object-[center_40%]', imageWidth: 4080, imageHeight: 3060, variant: 'nature' as const },
  { role: 'Farm Workers', image: '/images/staff/Farm-Workers.jpg', imageClass: 'object-[center_38%]', imageWidth: 8160, imageHeight: 6120, variant: 'nature' as const },
  { role: 'Cook 1', image: '/images/staff/Cook-1.jpg', imageClass: 'object-[center_35%]', imageWidth: 4080, imageHeight: 3060, variant: 'person' as const },
  { role: 'Cook 2', image: '/images/staff/Cook-2.jpg', imageClass: 'object-[center_10%]', imageWidth: 4080, imageHeight: 3060, variant: 'person' as const },
] satisfies StaffMember[];

/* Staff page section composition */
export default function StaffContent() {
  return (
    <>
      <PageBanner page="staff" />
      <StaffSection
        eyebrow="Our Foundation"
        title="Founder & Board"
        description="The founder and board provide the vision, governance, and faithful oversight that guide the academy's mission and long-term direction."
        members={founderAndBoard}
        background="bg-white"
        cardBackground="bg-cream"
        photoHeight="h-72"
      />
      <StaffSection
        eyebrow="Who Leads Us"
        title="School Leadership"
        description="Our leadership team is committed to nurturing students academically, spiritually, physically, and socially - preparing them for lives of service, leadership, and Christian witness."
        members={schoolLeadership}
        background="bg-cream"
        cardBackground="bg-white"
      />
      <StaffSection
        eyebrow="Our Teachers"
        title="Teaching Faculty"
        description="Our teaching faculty serve students with care, encouragement, and a commitment to Christ-centered learning."
        members={teachingFaculty}
        background="bg-white"
        cardBackground="bg-cream"
      />
      <StaffSection
        eyebrow="Serving Daily"
        title="Support Team"
        description="Our support team helps sustain the school environment through farming, food preparation, and practical care for the academy community."
        members={supportTeam}
        background="bg-cream"
        cardBackground="bg-white"
      />
    </>
  );
}


/* Shared staff directory section */
function StaffSection({
  eyebrow,
  title,
  description,
  members,
  background,
  cardBackground,
  photoHeight = 'h-64',
}: {
  eyebrow: string;
  title: string;
  description: string;
  members: StaffMember[];
  background: string;
  cardBackground: string;
  photoHeight?: string;
}) {
  const gridClass = members.length === 2
    ? 'grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto'
    : members.length === 3
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto';

  return (
    <section className={`section-padding ${background}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">{title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>
        <div className={gridClass}>
          {members.map((member, index) => (
            <StaffCard key={`${member.role}-${member.name ?? index}`} member={member} cardBackground={cardBackground} photoHeight={photoHeight} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* Individual staff card with photo fallback */
function StaffCard({ member, cardBackground, photoHeight }: { member: StaffMember; cardBackground: string; photoHeight: string }) {
  return (
    <article className={`hover-lift ${cardBackground} rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full`}>
      {member.image ? (
        <img
          src={member.image}
          alt={member.name ? `${member.name}, ${member.role}` : member.role}
          width={member.imageWidth}
          height={member.imageHeight}
          sizes="(min-width: 1280px) 280px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          decoding="async"
          className={`${photoHeight} w-full object-cover ${member.imageClass ?? 'object-center'}`}
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder variant={member.variant} label="Photo Coming Soon" className={photoHeight} rounded="rounded-none" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="w-8 h-1 bg-gold rounded-full mb-3" />
        <p className="text-gold text-xs font-bold tracking-widest uppercase">{member.role}</p>
        {member.name && <h3 className="font-bold text-forest font-serif mt-1">{member.name}</h3>}
        {member.phone && <a href={`tel:${member.phone}`} className="text-xs text-forest-light block mt-1">{member.phone}</a>}
        {member.description && <p className="text-gray-500 text-sm leading-relaxed mt-3 flex-1">{member.description}</p>}
      </div>
    </article>
  );
}
