import { ChevronDown } from 'lucide-react';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8363019/pexels-photo-8363019.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(52,29,111,0.75) 0%, rgba(52,29,111,0.4) 50%, rgba(0,0,0,0.65) 100%)' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src="/Logo.jpg"
            alt="Royal Christian Academy Logo"
            className="h-28 w-28 rounded-full border-4 border-royal-gold shadow-2xl object-cover animate-fade-in"
          />
        </div>

        <p className="text-royal-gold text-sm sm:text-base font-semibold tracking-widest uppercase mb-4 animate-fade-in">
          Kitale, Trans Nzoia County, Kenya
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-shadow-lg leading-tight mb-4 font-serif animate-fade-up">
          Royal Christian Academy
        </h1>

        <p className="text-royal-gold text-xl sm:text-2xl font-semibold mb-4 text-shadow animate-fade-up font-serif italic">
          Fortifying Mind, Body, and Spirit Against Evil
        </p>

        <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up">
          A Christ-centered education shaping students for this life and the life to come — rooted in faith, excellence, and purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <button
            onClick={() => { window.location.href = 'mailto:royalchristianacademy07@gmail.com'; }}
            className="bg-royal-gold text-royal-purple font-bold px-10 py-4 rounded-full text-base hover:bg-royal-gold-light hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Contact Us
          </button>
          <button
            onClick={() => { window.location.href = 'mailto:royalchristianacademy07@gmail.com'; }}
            className="border-2 border-royal-gold text-royal-gold font-semibold px-10 py-4 rounded-full text-base hover:bg-royal-gold hover:text-royal-purple transition-all duration-300"
          >
            Book a Visit
          </button>
        </div>

        <div className="mt-8 text-white/50 text-xs tracking-widest uppercase">
          Under the West Kenya Union Conference
        </div>
      </div>

      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-royal-gold transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
}
