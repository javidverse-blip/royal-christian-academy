import { MapPin, Building, Globe } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function LocationSection() {
  const ref = useScrollAnimation();
  return (
    <section id="location" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">Location & Affiliation</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Rooted in Kitale, connected to a global mission — partnered with the West Kenya Union Conference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <InfoCard
              icon={MapPin}
              title="Our Location"
              lines={['Kitale, Trans Nzoia County', 'Kenya, East Africa']}
              delay={0}
            />
            <InfoCard
              icon={Building}
              title="Conference Affiliation"
              lines={['West Kenya Union Conference', 'Seventh-day Adventist Church']}
              delay={100}
            />
            <InfoCard
              icon={Globe}
              title="Get in Touch"
              lines={['+254 700 000 000', 'info@royalchristianacademy.ac.ke']}
              delay={200}
            />

            <div
              className="animate-on-scroll bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              ref={useScrollAnimation()}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="font-bold text-royal-purple font-serif text-lg mb-4">Book a Visit</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                We'd love to show you around. Contact us to schedule a guided tour of our campus and meet our dedicated team.
              </p>
              <a
                href="mailto:info@royalchristianacademy.ac.ke"
                className="inline-block bg-royal-purple text-white font-semibold px-8 py-3 rounded-full hover:bg-royal-purple-light transition-colors duration-300"
              >
                Schedule a Visit
              </a>
            </div>
          </div>

          <MapEmbed />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, lines, delay }: { icon: React.ElementType; title: string; lines: string[]; delay: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4 hover-lift"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-royal-purple flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-royal-gold" />
      </div>
      <div>
        <h3 className="font-bold text-royal-purple font-serif text-base mb-1">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-600 text-sm">{line}</p>
        ))}
      </div>
    </div>
  );
}

function MapEmbed() {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-96">
      <iframe
        title="Royal Christian Academy Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63757.33516547!2d34.9644!3d1.0154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17810f4285c71285%3A0x4b32e7db3a9eb6e1!2sKitale%2C%20Kenya!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '420px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
