import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function EventsSection() {
  const ref = useScrollAnimation();
  return (
    <section id="events" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-royal-gold font-semibold text-sm tracking-widest uppercase mb-3">Mark Your Calendar</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-royal-purple font-serif mb-4">Upcoming Events</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Join us for transformative gatherings that inspire, equip, and unite our community in faith.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <SeminarCard />
        </div>
      </div>
    </section>
  );
}

function SeminarCard() {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
            alt="Summer Seminar 2026"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-purple/60 to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="bg-royal-gold text-royal-purple text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              Featured Event
            </span>
          </div>
        </div>

        <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="w-12 h-1 bg-royal-gold rounded-full mb-6" />
          <h3 className="text-3xl font-bold text-royal-purple font-serif mb-3">Summer Seminar 2026</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            A powerful gathering of students, families, and educators united under God's Word. This annual summer seminar features inspiring speakers, worship sessions, academic workshops, and meaningful community fellowship — designed to refresh, equip, and send participants back into the world with renewed purpose.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <MetaItem icon={Calendar} label="Date" value="August 2026 – TBD" />
            <MetaItem icon={MapPin} label="Location" value="Kitale, Kenya" />
            <MetaItem icon={Clock} label="Duration" value="3 Days" />
            <MetaItem icon={Users} label="Open to" value="All families & students" />
          </div>

          <button
            onClick={() => { window.location.href = 'mailto:royalchristianacademy07@gmail.com'; }}
            className="inline-flex items-center justify-center bg-royal-gold text-royal-purple font-bold px-8 py-4 rounded-full hover:bg-royal-gold-light hover:scale-105 transition-all duration-300 shadow-lg text-center"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-royal-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={14} className="text-royal-purple" />
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{label}</p>
        <p className="text-sm text-gray-700 font-medium">{value}</p>
      </div>
    </div>
  );
}
