import { ArrowRight } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import { usePage } from '../../context/PageContext';

const studentLifePhotos = [
  { title: 'Pre-primary', caption: 'Young learners growing together in a safe, joyful classroom environment.', image: '/images/gallery/pre-primary.webp', imageClass: 'object-[center_44%]' },
  { title: 'Grade 1', caption: 'Early primary students building confidence through guided learning.', image: '/images/gallery/grade-one.webp', imageClass: 'object-[center_42%]' },
  { title: 'Grade 2', caption: 'Students learning with focus, care, and encouragement.', image: '/images/gallery/grade-two.webp', imageClass: 'object-[center_45%]' },
  { title: 'Grade 3', caption: 'Growing learners developing strong classroom habits and friendships.', image: '/images/gallery/grade-three.webp', imageClass: 'object-[center_42%]' },
];

const studentActivityPhotos = [
  {
    title: 'Worship',
    sentence: 'Our students participate in worship, where they learn how to pray and connect with God.',
    image: '/images/gallery/students-worshipping.webp',
    width: 1200,
    height: 675,
    imageClass: 'object-[center_50%]',
  },
  {
    title: 'Classroom Learning',
    sentence: 'Students take part in classroom lessons that help them grow in knowledge, understanding, and confidence.',
    image: '/images/gallery/student-in-class.webp',
    width: 1200,
    height: 900,
    imageClass: 'object-[center_43%]',
  },
  {
    title: 'Drawing',
    sentence: 'Drawing gives students the opportunity to express creativity and develop their imagination.',
    image: '/images/gallery/students-drawing.webp',
    width: 1200,
    height: 675,
    imageClass: 'object-[center_50%]',
  },
  {
    title: 'Gardening',
    sentence: 'Through gardening, students learn responsibility, patience, and the value of caring for God’s creation.',
    image: '/images/gallery/students-gardening.webp',
    width: 1200,
    height: 675,
    imageClass: 'object-[center_48%]',
  },
];

const upcomingProjects = [
  {
    title: 'Boys Dorm',
    description: 'A safe and supportive boarding space for boys who travel long distances or need secure accommodation.',
    image: '/images/gallery/boys-dorm.webp',
    imageClass: 'object-cover object-center',
    width: 1280,
    height: 960,
  },
  {
    title: 'Girls Dorm',
    description: 'A secure and caring dormitory space for girls, helping protect their dignity, safety, and learning environment.',
    image: '/images/gallery/girls-dorm.webp',
    imageClass: 'object-cover object-center',
    width: 1280,
    height: 960,
  },
  {
    title: 'School Kitchen',
    description: 'A better-equipped kitchen to prepare daily meals and support the school feeding program.',
    image: '/images/gallery/kitchen-improve.webp',
    imageClass: 'object-cover object-center',
    width: 1280,
    height: 960,
  },
  {
    title: 'Land',
    description: 'Support toward the remaining balance on the school property, helping secure the future home of the academy.',
    image: '/images/gallery/property-land.webp',
    imageClass: 'object-cover object-center',
    width: 1280,
    height: 571,
  },
];

/* Gallery page content: student activities and upcoming projects */
export default function GalleryContent() {
  const { navigate } = usePage();

  return (
    <>
      <PageBanner page="gallery" />
      {/* Student life gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Life at Our School</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Student Life</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Learning at Royal Christian Academy includes classroom discovery, worship, practical activities, creativity, and meaningful experiences beyond the classroom.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {studentLifePhotos.map((activity) => (
              <article key={activity.title} className="group hover-lift bg-cream rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div className="h-72 sm:h-80 lg:h-96 bg-white">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    width="1200"
                    height="900"
                    sizes="(min-width: 1024px) 592px, (min-width: 768px) 50vw, 100vw"
                    decoding="async"
                    className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02] ${activity.imageClass}`}
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-forest text-lg font-serif">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">{activity.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Student activities summary */}
      <section className="section-padding forest-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Life Beyond the Classroom</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-5">Student Activities</h2>
            <p className="text-white/80 text-base sm:text-lg leading-loose">
              Students at Royal Christian Academy are encouraged to learn through worship, classroom participation, gardening, drawing, and other practical activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {studentActivityPhotos.map((activity) => (
              <article key={activity.title} className="group overflow-hidden rounded-2xl bg-white/10 border border-white/10 shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={activity.image}
                  alt={activity.title}
                  width={activity.width}
                  height={activity.height}
                  sizes="(min-width: 1024px) 592px, (min-width: 768px) 50vw, 100vw"
                  decoding="async"
                  className={`h-72 sm:h-80 lg:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${activity.imageClass}`}
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-lg font-serif">{activity.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mt-2 flex-1">{activity.sentence}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Upcoming school projects */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Building the Future</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Upcoming Projects</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">These priority projects will help the academy welcome more children and serve every learner with greater safety, dignity, and care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {upcomingProjects.map((project) => (
              <article key={project.title} className="group hover-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  sizes="(min-width: 1024px) 592px, (min-width: 768px) 50vw, 100vw"
                  decoding="async"
                  className={`h-72 sm:h-80 lg:h-96 w-full transition-transform duration-500 group-hover:scale-[1.02] ${project.imageClass}`}
                  loading="lazy"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-forest text-lg font-serif mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                  <a href="#support-projects" className="text-forest font-semibold text-sm inline-flex items-center gap-2 hover:text-gold">Support This Project <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
          <div id="support-projects" className="mt-12 rounded-2xl bg-forest px-6 py-10 sm:px-10 sm:py-12 text-center shadow-lg scroll-mt-28">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Support Our Projects</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-5">Help Build the Future of the Academy</h3>
            <p className="text-white/80 leading-8 max-w-2xl mx-auto mb-8">
              Your support helps provide safe spaces, daily meals, secure facilities, and a stronger future for every learner.
            </p>
            <a
              href="/contact"
              onClick={(event) => { event.preventDefault(); navigate('contact'); }}
              className="inline-flex items-center justify-center gap-2 bg-gold text-forest font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors"
            >
              Support Our Projects <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
