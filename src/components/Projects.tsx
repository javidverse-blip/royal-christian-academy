import { Sprout, Library, Building2, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    icon: Sprout,
    title: 'School Farm & Garden',
    status: 'Ongoing',
    impact: 'Feeds 200+ students daily',
    desc: 'Students tend to an agricultural plot that provides fresh produce for school meals while learning about stewardship of the earth God entrusted to us.',
    image: 'https://images.pexels.com/photos/8612968/pexels-photo-8612968.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&dpr=1',
  },
  {
    icon: Library,
    title: 'School Library Expansion',
    status: 'In Progress',
    impact: 'Serves all grade levels',
    desc: 'We are expanding our library to give every student access to quality books, Bible commentaries, and educational resources that spark curiosity and love for learning.',
    image: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&dpr=1',
  },
  {
    icon: Building2,
    title: 'New Classroom Block',
    status: 'Fundraising',
    impact: 'Will serve 300+ students',
    desc: 'As enrollment grows, we are building additional classrooms to ensure every child has a conducive, well-equipped space to learn and thrive in.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&dpr=1',
  },
  {
    icon: Users,
    title: 'Student Mentorship Program',
    status: 'Active',
    impact: 'Empowering 150+ students',
    desc: 'A faith-based mentorship program pairing students with Christian role models from the community — nurturing identity, purpose, and a vision for the future.',
    image: 'https://images.pexels.com/photos/8363019/pexels-photo-8363019.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&dpr=1',
  },
];

const statusColors: Record<string, string> = {
  Ongoing: 'bg-green-100 text-green-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  Fundraising: 'bg-amber-100 text-amber-700',
  Active: 'bg-royal-purple/10 text-royal-purple',
};

export default function Projects() {
  const ref = useScrollAnimation();
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">What We're Building</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">School Projects</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Strategic projects that expand our capacity to serve students, families, and the wider community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: (typeof projects)[0]; delay: number }) {
  const ref = useScrollAnimation();
  const Icon = project.icon;
  return (
    <div
      ref={ref}
      className="animate-on-scroll hover-lift bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=700&h=450&dpr=1';
          }}
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-royal-purple flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-royal-gold" />
            </div>
            <div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[project.status] ?? 'bg-gray-100 text-gray-600'}`}>
                {project.status}
              </span>
            </div>
          </div>
          <h3 className="font-bold text-royal-purple text-base font-serif mb-2">{project.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">{project.desc}</p>
        </div>
        <p className="text-royal-gold-dark text-xs font-semibold tracking-wide">{project.impact}</p>
      </div>
    </div>
  );
}
