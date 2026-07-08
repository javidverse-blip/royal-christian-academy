import { CheckCircle } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const programs = [
  {
    number: '01',
    emoji: '🍽️',
    title: 'Feeding Program',
    tagline: 'Nourishing Bodies, Empowering Minds',
    description: 'Our feeding program ensures that students receive nutritious and balanced meals that support their health, academic performance, and overall well-being. We promote healthy living through proper nutrition and food education, recognizing that a nourished child is a ready learner.',
    highlights: [
      'Nutritious, balanced daily meals',
      'Food education and healthy eating habits',
      'Supports academic concentration and performance',
      'Promotes overall physical well-being',
    ],
    image: '/images/programs/feeding-program.jpg',
    imageClass: 'object-[center_42%]',
  },
  {
    number: '02',
    emoji: '🔧',
    title: 'Vocational Training',
    tagline: 'Equipping Hands for Service',
    description: 'We equip learners with practical, hands-on skills in various vocational fields. This program fosters self-reliance, entrepreneurship, and sustainable livelihoods. Students gain real-world competencies that prepare them for meaningful work and economic independence.',
    highlights: [
      'Hands-on practical skill development',
      'Entrepreneurship and self-reliance',
      'Sustainable livelihood preparation',
      'Vocational certification pathways',
    ],
    image: '/images/programs/vocational-training.jpg',
    imageClass: 'object-[center_38%]',
  },
  {
    number: '03',
    emoji: '🌿',
    title: 'Sanitarium and Health Ministry',
    tagline: 'Healing the Whole Person',
    description: 'Our health ministry promotes natural health principles, preventive healthcare, and healthy lifestyle education. Participants learn practical approaches to physical, mental, and spiritual wellness — understanding that the body is the temple of the Holy Spirit.',
    highlights: [
      'Natural health principles and remedies',
      'Preventive healthcare education',
      'Physical, mental, and spiritual wellness',
      'Lifestyle disease prevention',
    ],
    image: '/images/programs/health-ministry.jpg',
    imageClass: 'object-center',
  },
  {
    number: '04',
    emoji: '📖',
    title: 'Bible Training',
    tagline: 'Rooted in the Word of God',
    description: 'Bible training is at the heart of our mission. We provide comprehensive biblical education, discipleship, leadership development, and character formation — preparing students for effective Christian service and ministry. The Word of God is the foundation of all learning.',
    highlights: [
      'Comprehensive biblical education',
      'Discipleship and spiritual formation',
      'Leadership development for ministry',
      'Character formation in Christ',
    ],
    image: '/images/programs/bible-training.jpg',
    imageClass: 'object-center',
  },
  {
    number: '05',
    emoji: '🤝',
    title: 'Community Outreach',
    tagline: 'Reflecting Christ\'s Love in Action',
    description: 'Through community outreach initiatives, students actively serve surrounding communities through evangelism, health education, humanitarian assistance, and social support programs. Students learn that service is not optional — it is the mark of a true follower of Christ.',
    highlights: [
      'Evangelism and gospel sharing',
      'Health education campaigns',
      'Humanitarian assistance programs',
      'Social support and counseling',
    ],
    image: '/images/programs/community-outreach.png',
    imageClass: 'object-center',
  },
  {
    number: '06',
    emoji: '🌱',
    title: 'Agriculture and Organic Farming',
    tagline: 'Stewards of God\'s Creation',
    description: 'Students gain practical experience in sustainable agriculture and organic farming. The program teaches environmental stewardship, food production techniques, self-sufficiency, and responsible land management — honoring God through care for His creation.',
    highlights: [
      'Sustainable and organic farming techniques',
      'Environmental stewardship principles',
      'Food production and self-sufficiency',
      'Responsible land and resource management',
    ],
    image: '/images/programs/agriculture-farming.jpg',
    imageClass: 'object-center',
  },
];

/* Programs page section composition */
export default function ProgramsContent() {
  return (
    <>
      <PageBanner page="programs" />
      <ProgramsIntro />
      <ProgramsList />
      <StudentLifeSection />
    </>
  );
}


/* Programs introduction */
function ProgramsIntro() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center max-w-3xl mx-auto">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Holistic Education</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest font-serif mb-5">
            Six Transformative Programs
          </h2>
          <p className="text-gray-600 text-base leading-loose">
            At Kapsitwet Royal Christian Academy, we believe that true education goes beyond academic achievement. Our featured programs equip learners with godly character, practical skills, sound judgment, and a heart for service — preparing them for lives of purpose and Christian witness.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Programs list section */
function ProgramsList() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {programs.map((program, i) => (
          <ProgramRow key={i} program={program} flip={i % 2 !== 0} delay={0} />
        ))}
      </div>
    </section>
  );
}


/* Alternating program image and description row */
function ProgramRow({ program, flip }: { program: (typeof programs)[0]; flip: boolean; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-cream">
      <div className={`grid lg:grid-cols-2 ${flip ? 'lg:flex-row-reverse' : ''}`}>
        <div className={`${flip ? 'lg:order-2' : 'lg:order-1'}`}>
          <img
            src={program.image}
            alt={program.title}
            className={`h-80 lg:h-full min-h-80 w-full object-cover ${program.imageClass}`}
            loading="lazy"
          />
        </div>
        <div
          ref={ref}
          className={`animate-on-scroll p-8 lg:p-10 flex flex-col justify-center ${flip ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{program.emoji}</span>
            <span className="text-gold/60 font-bold text-4xl font-serif">{program.number}</span>
          </div>
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">{program.tagline}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-forest font-serif mb-4">{program.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{program.description}</p>
          <ul className="space-y-2">
            {program.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle size={15} className="text-forest mt-0.5 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Student life section */
function StudentLifeSection() {
  const ref = useScrollAnimation();
  const activities = [
    'Daily worship programs and chapel services',
    'Outreach activities in surrounding communities',
    'Vocational training and practical skill workshops',
    'Agriculture and organic farming projects',
    'Sports, fitness, and physical education',
    'Community service and humanitarian missions',
    'Educational tours and field learning experiences',
    'Leadership development and mentorship',
  ];
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #250f5a 0%, #341d6f 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref} className="animate-on-scroll">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">School Life</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-6 leading-tight">
              Student Life
            </h2>
            <p className="text-white/75 text-base leading-loose mb-8">
              Student life at Kapsitwet Royal Christian Academy is designed to promote academic excellence, spiritual growth, leadership development, and healthy social interaction. Every day is an opportunity to grow closer to Christ and to one another.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-1 flex-shrink-0">✦</span>
                  <span className="text-white/75 text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StudentLifePhoto src="/images/home/morning-worship.jpg" alt="Morning Worship" />
            <StudentLifePhoto src="/images/programs/community-outreach.png" alt="Community Service" />
            <StudentLifePhoto src="/images/programs/health-ministry.jpg" alt="Health Ministry" />
            <StudentLifePhoto src="/images/programs/agriculture-farming.jpg" alt="Farm Projects" />
          </div>
        </div>
      </div>
    </section>
  );
}


/* Student life photo tile */
function StudentLifePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-48 overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}
