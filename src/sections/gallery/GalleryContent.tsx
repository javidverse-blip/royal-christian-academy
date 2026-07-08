import { ArrowRight } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';

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
  { title: 'Additional Classrooms', description: 'Safe learning spaces for the growing number of children seeking an education.' },
  { title: 'Larger School Kitchen', description: 'A better-equipped kitchen to prepare daily meals for more students.' },
  { title: 'Dormitory Completion', description: 'Secure accommodation for children who travel long distances or come from unsafe environments.' },
  { title: 'Property Balance', description: 'Support toward the remaining $35,000 owed on the school property.' },
];

/* Gallery page content: student activities and upcoming projects */
export default function GalleryContent() {
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
                <img
                  src={activity.image}
                  alt={activity.title}
                  width="1200"
                  height="900"
                  sizes="(min-width: 1024px) 592px, (min-width: 768px) 50vw, 100vw"
                  decoding="async"
                  className={`h-72 sm:h-80 lg:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${activity.imageClass}`}
                  loading="lazy"
                />
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProjects.map((project) => (
              <article key={project.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
                <div className="h-44 forest-gradient flex items-center justify-center text-gold font-serif text-xl text-center px-5">{project.title}</div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                  <a href="mailto:royalchristianacademy07@gmail.com?subject=Support%20an%20Upcoming%20Project" className="text-forest font-semibold text-sm inline-flex items-center gap-2 hover:text-gold">Support This Project <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
