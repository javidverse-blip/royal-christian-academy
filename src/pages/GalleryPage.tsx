import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';

const activities = [
  { title: 'Morning Worship', caption: 'Students beginning the day in prayer, worship, and reflection.', image: '/mng-worship.jpg' },
  { title: 'Community Outreach', caption: "Learners serving others and putting Christ's love into action.", image: '/Programs/community-outreach.png' },
  { title: 'Health Ministry', caption: 'Practical health education supporting whole-person wellness.', image: '/Programs/health-min.jpg' },
  { title: 'Agriculture Projects', caption: 'Hands-on learning through farming and responsible stewardship.', image: '/Programs/agriculture-farmimg.jpg' },
  { title: 'Vocational Training', caption: 'Practical skills preparing learners for purposeful and independent lives.', image: '/Programs/vocational-prog.jpg' },
  { title: 'Bible Training', caption: 'Biblical learning, discipleship, and Christian character formation.', image: '/Programs/bible-train.jpg' },
];

const upcomingProjects = [
  { title: 'Additional Classrooms', description: 'Safe learning spaces for the growing number of children seeking an education.' },
  { title: 'Larger School Kitchen', description: 'A better-equipped kitchen to prepare daily meals for more students.' },
  { title: 'Dormitory Completion', description: 'Secure accommodation for children who travel long distances or come from unsafe environments.' },
  { title: 'Property Balance', description: 'Support toward the remaining $35,000 owed on the school property.' },
];

/* Gallery page: student activities and upcoming projects */
export default function GalleryPage() {
  return (
    <>
      <PageBanner page="gallery" />
      {/* Student activities gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Life at Our School</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Student Activities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">Learning at Royal Christian Academy includes worship, service, practical skills, healthy living, and memorable experiences beyond the classroom.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <article key={activity.title} className="hover-lift bg-cream rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img src={activity.image} alt={activity.title} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold text-forest text-lg font-serif">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">{activity.caption}</p>
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
