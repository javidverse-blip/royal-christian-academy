import PageBanner from '../../components/ui/PageBanner';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder';
import { usePage } from '../../context/PageContext';

type StaffMember = {
  role: string;
  name?: string;
  phone?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageClass?: string;
  imageWidth?: number;
  imageHeight?: number;
  variant: 'person' | 'building' | 'nature' | 'activity';
};

const founderAndBoard = [
  {
    role: 'Founder',
    name: 'Diana Booker',
    description: "The Founder provides the vision and guiding principles upon which the institution was established. The Founder ensures that the school's mission, values, and Christian identity remain central to all programs and activities.",
    image: '/images/staff/diana-with-husband.webp',
    imageAlt: 'Diana Booker with her husband',
    imageClass: 'object-[center_28%]',
    imageWidth: 1365,
    imageHeight: 1365,
    variant: 'person' as const,
  },
  {
    role: 'Board of Directors',
    description: "The Board of Directors provides governance, oversight, and strategic direction for the school. The Board works closely with the administration to ensure accountability, sustainability, and the fulfillment of the institution's mission and objectives.",
    image: '/images/staff/board-of-directors.webp',
    imageClass: 'object-[center_35%]',
    imageWidth: 1280,
    imageHeight: 422,
    variant: 'building' as const,
  },
] satisfies StaffMember[];

const schoolLeadership = [
  {
    role: 'Director',
    name: 'Mr. Kelzy Origi',
    phone: '(+254)-715-726-929',
    description: "The Director oversees the overall administration, strategic planning, and development of the institution. The Director ensures that all departments work together effectively to achieve the school's goals and vision.",
    image: '/images/staff/Mr.%20Kelzy%20Origi.png',
    imageClass: 'object-[center_0%]',
    imageWidth: 1080,
    imageHeight: 1080,
    variant: 'person' as const,
  },
  {
    role: 'Principal',
    name: 'Mr. Maxwell Okoth',
    phone: '(+254)-724-403-284',
    description: 'The Principal provides leadership in academic and student affairs, promoting excellence in teaching, learning, discipline, and character development. The Principal ensures a positive learning environment that supports student success.',
    image: '/images/staff/Mr.%20Maxwell%20Okoth.png',
    imageClass: 'object-[center_0%]',
    imageWidth: 1080,
    imageHeight: 1080,
    variant: 'person' as const,
  },
  {
    name: 'MD. Rael Iteba',
    role: 'Secretary',
    description: 'The Secretary manages administrative coordination, communication, and record-keeping, supporting the efficient operation of the school and serving as a key point of contact for parents and stakeholders.',
    image: '/images/staff/MD.%20Rael%20Iteba.png',
    imageClass: 'object-[center_0%]',
    imageWidth: 1080,
    imageHeight: 1080,
    variant: 'person' as const,
  },
] satisfies StaffMember[];

const teachingFaculty = [
  { name: 'MD. Valentine Wafula', role: 'Pre-Primary Teacher', image: '/images/staff/MD.%20Valentine%20Wafula.png', imageClass: 'object-[center_0%]', imageWidth: 1080, imageHeight: 1080, variant: 'person' as const },
  { name: 'MD. Phanlyne Sifuni', role: 'Grade 1 Teacher', image: '/images/staff/MD.%20Phanlyne%20Sifuni.png', imageClass: 'object-[center_0%]', imageWidth: 1080, imageHeight: 1080, variant: 'person' as const },
  { name: 'Mr. Nevin Abur', role: 'Grade 2 Teacher', image: '/images/staff/Mr.%20Nevin%20Abur.png', imageClass: 'object-[center_0%]', imageWidth: 1080, imageHeight: 1080, variant: 'person' as const },
] satisfies StaffMember[];

const farmTeam = [
  { name: 'Mr. Emmanuel Simiyu', role: 'Farm Manager', image: '/images/staff/mr-emmanuel-simiyu.webp', imageAlt: 'Mr. Emmanuel Simiyu standing in the school farm', imageClass: 'object-[center_18%]', imageWidth: 1920, imageHeight: 1080, variant: 'nature' as const },
  { role: 'Farm Workers', image: '/images/staff/farm-workers.webp', imageAlt: 'Farm workers standing together in the school farm', imageClass: 'object-[center_18%]', imageWidth: 1920, imageHeight: 1080, variant: 'nature' as const },
] satisfies StaffMember[];

const kitchenTeam = [
  { name: 'Emilly Simiyu', role: 'Cook 1', image: '/images/staff/cook-1-emilly-simiyu.webp', imageAlt: 'Emilly Simiyu, cook at Royal Christian Academy', imageClass: 'object-[center_18%]', imageWidth: 1920, imageHeight: 1080, variant: 'person' as const },
  { name: 'Colletty Watoya', role: 'Cook 2', image: '/images/staff/cook-2-colletty-watoya.webp', imageAlt: 'Colletty Watoya, cook at Royal Christian Academy', imageClass: 'object-[center_18%]', imageWidth: 1920, imageHeight: 1080, variant: 'person' as const },
] satisfies StaffMember[];

function phoneHref(phone: string) {
  return `tel:${phone.replace(/(?!^)\D/g, '')}`;
}

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
        title="Kitchen Team"
        description="Our kitchen team helps care for students through daily meal preparation and faithful service to the academy community."
        members={kitchenTeam}
        background="bg-cream"
        cardBackground="bg-white"
      />
      <StaffSection
        eyebrow="Growing and Sustaining"
        title="Farm Team"
        description="Our farm team supports the academy through agriculture, food production, and practical stewardship of the land."
        members={farmTeam}
        background="bg-white"
        cardBackground="bg-cream"
      />
      <GalleryCta />
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
          alt={member.imageAlt ?? (member.name ? `${member.name}, ${member.role}` : member.role)}
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
        {member.phone && <a href={phoneHref(member.phone)} className="text-xs text-forest-light block mt-1">{member.phone}</a>}
        {member.description && <p className="text-gray-500 text-sm leading-relaxed mt-3 flex-1">{member.description}</p>}
      </div>
    </article>
  );
}

/* Bottom call to action for the gallery route */
function GalleryCta() {
  const { navigate } = usePage();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto rounded-2xl bg-forest px-6 py-10 sm:px-10 sm:py-12 text-center shadow-lg">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Life at Our School</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-5">See Our School Community in Action</h2>
        <p className="text-white/80 leading-8 max-w-2xl mx-auto mb-8">
          Explore moments from classroom learning, worship, gardening, student activities, and daily life at Royal Christian Academy.
        </p>
        <button
          onClick={() => navigate('gallery')}
          className="inline-flex w-full sm:w-auto items-center justify-center bg-gold text-forest font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
        >
          View Gallery
        </button>
      </div>
    </section>
  );
}
