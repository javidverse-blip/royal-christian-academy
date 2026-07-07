import { CheckCircle, Phone, Mail, MapPin, FileText, Calendar, DollarSign, ClipboardList } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const requirements = [
  'Meet the minimum age requirement for the desired grade level.',
  'Provide academic records from previous schools (where applicable).',
  'Submit a recommendation or reference letter (if required).',
  'Demonstrate readiness for the academic program.',
  'Participate in an assessment or interview where applicable.',
];

const enrollmentSteps = [
  { step: '01', title: 'Obtain Application Form', desc: 'Request and complete the official application form from the school office.' },
  { step: '02', title: 'Submit Documents', desc: 'Submit all required documents along with the completed application form.' },
  { step: '03', title: 'Interview / Assessment', desc: 'Attend an interview or assessment if applicable for the desired grade level.' },
  { step: '04', title: 'Admission Decision', desc: 'Receive the official admission decision from the school administration.' },
  { step: '05', title: 'Registration & Fees', desc: 'Complete registration and fee payment to secure your child\'s placement.' },
];

const documents = [
  'Completed application form',
  'Copy of the learner\'s birth certificate',
  'Recent academic reports or transcripts',
  'Parent or guardian identification document (copy of ID)',
  'Two recent passport-size photographs',
  'Transfer letter from the previous school (if applicable)',
];

/* Admissions page route container */
export default function AdmissionsPage() {
  return (
    <>
      <PageBanner page="admissions" />
      <AdmissionsIntro />
      <RequirementsSection />
      <EnrollmentProcess />
      <FeesAndDocuments />
      <DeadlinesSection />
      <AdmissionsCta />
    </>
  );
}


/* Admissions welcome and key information */
function AdmissionsIntro() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center max-w-3xl mx-auto">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Welcome to Our Family</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest font-serif mb-5">Academics &amp; Admissions</h2>
          <p className="text-gray-600 text-base leading-loose mb-8">
            We warmly welcome families who share our commitment to Christ-centered education. Our admissions process is simple, guided, and designed to help every child join our school community with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InfoBadge icon={CheckCircle} text="Rolling Admissions" />
            <InfoBadge icon={Calendar} text="Apply Year-Round" />
            <InfoBadge icon={FileText} text="Simple Process" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
      <Icon size={14} className="text-forest" />
      <span className="text-sm text-gray-700 font-medium">{text}</span>
    </div>
  );
}


/* Enrollment requirements */
function RequirementsSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={ref} className="animate-on-scroll">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">To Join Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest font-serif mb-6 leading-tight">
              Admission Requirements
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              To be considered for admission, applicants must meet the following requirements. Our admissions team is available to guide families through every step of the process.
            </p>
            <ul className="space-y-4">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 bg-cream rounded-xl px-5 py-4">
                  <CheckCircle size={18} className="text-forest mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="bg-forest rounded-2xl p-8 text-white">
              <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center mb-5">
                <ClipboardList size={22} className="text-forest-dark" />
              </div>
              <h3 className="font-bold text-xl font-serif mb-3">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Christ-centered, values-based education',
                  'Holistic development: mind, body & spirit',
                  'Six transformative programs',
                  'Dedicated Christian educators',
                  'Safe and nurturing environment',
                  'Strong community partnerships',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="text-gold">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-6 border border-gray-100">
              <p className="text-forest font-bold text-sm font-serif mb-2">Ready to Apply?</p>
              <p className="text-gray-500 text-sm mb-4">Contact us directly to get the application form and begin the enrollment process.</p>
              <a
                href="tel:+254724403284"
                className="inline-flex items-center gap-2 bg-gold text-forest-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors"
              >
                <Phone size={14} />
                Call the Principal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* Step-by-step enrollment process */
function EnrollmentProcess() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-14">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Step by Step</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest font-serif mb-4">Enrollment Process</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Our enrollment process is simple and guided. We walk alongside every family from application to first day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {enrollmentSteps.map((step, i) => (
            <StepCard key={i} step={step} delay={i * 90} isLast={i === enrollmentSteps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, delay, isLast }: { step: (typeof enrollmentSteps)[0]; delay: number; isLast: boolean }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll relative hover-lift bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-full ${isLast ? 'bg-gold' : 'bg-forest'} flex items-center justify-center mx-auto mb-4`}>
        <span className={`font-bold text-sm ${isLast ? 'text-forest-dark' : 'text-white'}`}>{step.step}</span>
      </div>
      <h3 className="font-bold text-forest text-sm font-serif mb-2">{step.title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
      {!isLast && (
        <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gold font-bold text-lg z-10">›</div>
      )}
    </div>
  );
}


/* Fees and required documents */
function FeesAndDocuments() {
  const feesRef = useScrollAnimation();
  const docsRef = useScrollAnimation();
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div ref={feesRef} className="animate-on-scroll bg-cream rounded-2xl p-8 border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <DollarSign size={22} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-2xl font-serif mb-4">School Fees</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              School fees vary depending on the grade level and selected program. A detailed fee structure is available upon request or during the admission process.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Fees may be paid per term or according to arrangements approved by the school administration. We are committed to making quality Christian education accessible.
            </p>
            <a
              href="mailto:royalchristianacademy07@gmail.com"
              className="inline-flex items-center gap-2 bg-forest text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-forest-light transition-colors"
            >
              <Mail size={14} />
              Request Fee Structure
            </a>
          </div>

          <div ref={docsRef} className="animate-on-scroll bg-cream rounded-2xl p-8 border border-gray-100" style={{ transitionDelay: '120ms' }}>
            <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center mb-5">
              <FileText size={22} className="text-gold" />
            </div>
            <h3 className="font-bold text-forest text-2xl font-serif mb-4">Required Documents</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Please prepare and submit the following documents when applying for admission:
            </p>
            <ul className="space-y-3">
              {documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold font-bold text-xs">{i + 1}</span>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


/* Application dates and deadlines */
function DeadlinesSection() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #341d6f 0%, #4a2d8f 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center max-w-2xl mx-auto">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Application Deadlines</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-5">Apply Any Time of Year</h2>
          <p className="text-white/75 text-base leading-relaxed mb-4">
            Applications are accepted throughout the year on a rolling basis. However, early application is encouraged as space may be limited.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Specific deadlines may apply for certain intakes, programs, or academic terms. Contact us to confirm availability for your desired enrollment date.
          </p>
          <div className="mt-8 bg-white/10 rounded-2xl px-6 py-4 inline-block border border-white/20">
            <p className="text-gold font-semibold text-sm">Rolling Admissions — Space Is Limited</p>
            <p className="text-white/60 text-xs mt-1">Early application is strongly encouraged</p>
          </div>
        </div>
      </div>
    </section>
  );
}


/* Admissions contact options */
function AdmissionsCta() {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className="animate-on-scroll text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest font-serif mb-4">Ready to Take the Next Step?</h2>
          <p className="text-gray-600 text-base leading-relaxed">Contact us directly — we are happy to guide your family through the admissions process.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <a
            href="tel:+254724403284"
            className="flex flex-col items-center gap-3 bg-forest text-white rounded-2xl p-6 hover:bg-forest-light transition-colors hover-lift text-center"
          >
            <Phone size={24} className="text-gold" />
            <span className="font-semibold text-sm">Call Principal</span>
            <span className="text-white/60 text-xs">+254-724-403-284</span>
          </a>
          <a
            href="mailto:royalchristianacademy07@gmail.com"
            className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-2xl p-6 hover:border-forest hover:shadow-md transition-all hover-lift text-center"
          >
            <Mail size={24} className="text-forest" />
            <span className="font-semibold text-sm text-forest">Email the School</span>
            <span className="text-gray-400 text-xs">We respond within 24hrs</span>
          </a>
          <button
            onClick={() => { window.location.href = 'mailto:royalchristianacademy07@gmail.com'; }}
            className="flex flex-col items-center gap-3 bg-gold text-forest-dark rounded-2xl p-6 hover:bg-gold-light transition-colors hover-lift text-center"
          >
            <MapPin size={24} />
            <span className="font-semibold text-sm">Visit Us</span>
            <span className="text-forest-dark/70 text-xs">Kapsitwet, Kitale</span>
          </button>
        </div>
      </div>
    </section>
  );
}
