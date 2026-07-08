import { Activity, ArrowRight, BookOpen, Heart, Mic, Shield, Sprout, Star, Users } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import { usePage } from '../../context/PageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const coreValues = [
  { icon: Heart, label: 'Love', desc: "Rooted in God's unconditional love for every learner and staff member." },
  { icon: Shield, label: 'Excellence with Humility', desc: 'Pursuing high standards while remaining grounded in humility and grace.' },
  { icon: Users, label: 'Respect and Dignity', desc: 'Honoring the God-given worth and dignity of every individual.' },
  { icon: BookOpen, label: 'Faith in Christ', desc: 'Placing Jesus at the center of learning, teaching, and community life.' },
  { icon: Activity, label: 'Discipleship and Character', desc: 'Forming Christ-like character through mentorship and community.' },
  { icon: Mic, label: 'Prayer and Worship', desc: 'Maintaining a culture of prayer and praise that sustains our work.' },
  { icon: Sprout, label: 'Service and Compassion', desc: 'Inspiring students to serve others with generous and compassionate hearts.' },
  { icon: Star, label: 'School Leadership', desc: 'Guiding with integrity, wisdom, and faithfulness to our Christian mission.' },
];

/* About page section composition */
export default function AboutContent() {
  return (
    <>
      <PageBanner page="about" />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <SchoolStory />
    </>
  );
}

/* Academy introduction and school image */
function AboutIntro() {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Academy</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-6 leading-tight">
            Building Tomorrow's<br />Kingdom Leaders
          </h2>
          <p className="text-gray-600 leading-loose mb-5">
            Kapsitwet Royal Christian Academy is a place where education is founded on Christian values and the timeless wisdom of God's Word. We are committed to nurturing the whole child - mind, body, and spirit - preparing our learners for success in this life and the life to come.
          </p>
          <p className="text-gray-600 leading-loose">
            Guided by our vision, <em>"Victory in Jesus,"</em> we strive to create an environment where faith, character, knowledge, and service flourish together. Our goal is to help every learner develop a personal relationship with Christ while pursuing academic excellence and purposeful living.
          </p>
        </div>
        <img
          src="/images/about/our-school.jpg"
          alt="Royal Christian Academy school community"
          className="h-80 lg:h-[28rem] w-full rounded-2xl object-cover shadow-sm"
        />
      </div>
    </section>
  );
}

/* Mission and vision overview */
function MissionVision() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Our Foundation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif">Mission &amp; Vision</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100 shadow-sm">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Our Mission</p>
            <h3 className="font-bold text-forest text-2xl font-serif mb-4">Educating the whole child</h3>
            <p className="text-gray-600 leading-relaxed">To provide Christ-centered education that equips learners academically, spiritually, physically, and socially for lives of service and faithful leadership.</p>
          </article>
          <article className="bg-forest rounded-2xl p-7 sm:p-9 shadow-sm">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Our Vision</p>
            <h3 className="font-bold text-white text-2xl font-serif mb-4">Victory in Jesus</h3>
            <p className="text-white/70 leading-relaxed">A flourishing school community where every child knows their God-given worth and is prepared to live with wisdom, courage, compassion, and hope.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Christian core values */
function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">What We Stand For</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-4">Core Values</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Eight values guide every decision, relationship, and program at our school.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map(({ icon: Icon, label, desc }) => (
            <article key={label} className="hover-lift bg-cream rounded-2xl p-6 border border-gray-100">
              <div className="w-11 h-11 rounded-xl bg-forest flex items-center justify-center mb-4">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="font-bold text-forest text-sm font-serif mb-2">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Shared story image frame */
function StoryImage({
  file,
  alt = 'Royal Christian Academy story',
  className = 'h-80 sm:h-96',
  imageClass = 'object-cover',
}: {
  file: string;
  alt?: string;
  className?: string;
  imageClass?: string;
}) {
  return (
    <div className={'relative overflow-hidden ' + className}>
      <img
        src={encodeURI('/images/about/' + file)}
        alt={alt}
        className={'absolute inset-0 h-full w-full ' + imageClass}
        loading="lazy"
      />
    </div>
  );
}

/* Story banner and chronological story sections */
function SchoolStory() {
  return (
    <>
      <section className="bg-cream">
        <div
          className="relative min-h-[400px] sm:min-h-[430px] overflow-hidden bg-cover bg-[center_30%] sm:bg-[center_65%]"
          style={{ backgroundImage: 'url("/images/about/school-born.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />
          <div className="relative z-10 min-h-[400px] sm:min-h-[430px] max-w-4xl mx-auto px-6 py-8 sm:py-10 text-center flex flex-col justify-between items-center">
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 text-shadow">Our Story</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif leading-tight text-shadow-lg">
                A School Born and Thriving From Faith
              </h2>
            </div>
            <div className="pt-20 sm:pt-24">
              <blockquote className="text-gold text-xl sm:text-2xl font-serif italic mb-3 text-shadow-lg">
                "It's a rescue mission disguised as a school."
              </blockquote>
              <p className="text-white leading-relaxed max-w-2xl text-shadow">
                The remarkable true story of how God used ordinary people, extraordinary faith, and answered prayers to transform the lives of vulnerable children in rural Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HumbleBeginning />
      <FaithQuestion />
      <SaferFuture />
      <BurdenShared />
      <AnsweredPrayer />
      <ContinuingNeed />
      <AboutCta />
    </>
  );
}

/* A humble beginning and post-COVID hardship */
function HumbleBeginning() {
  return (
    <>
      <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif text-center mb-9">
            A humble beginning
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div className="text-gray-600 leading-8 space-y-5">
              <p>
                Not his smile.<br />
                <strong className="text-forest font-serif text-xl">The first thing people noticed was his feet.</strong><br />
                Not his age.<br />
                <strong className="text-forest">His feet.</strong>
              </p>
              <p>They were swollen and infected with jiggers, tiny parasites that burrow into the skin and lay eggs beneath the flesh. Every step was painful. Every movement was a reminder of a life most people could scarcely imagine. Beside him stood his two younger sisters.</p>
              <p>Their clothes were worn thin. Their heads were covered with sores. Hunger had become such a normal part of life that they no longer complained about it.</p>
              <p>The boy was fourteen years old. He could not read. Not because he lacked intelligence. Not because he lacked desire. Because poverty had stolen opportunities that most children take for granted.</p>
              <p>For many Americans, it is difficult to imagine a child reaching fourteen years old without learning to read, never owning a pair of shoes, and living in conditions where basic medical care is out of reach. Yet this was the reality for many children in rural Kenya. And it is why this story begins.</p>
            </div>
            <StoryImage
              file="humble-beginning.png"
              alt="The fourteen-year-old boy at the beginning of the school story"
              imageClass="object-contain p-2 sm:p-4"
              className="min-h-[32rem] h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">After COVID, hardship deepened.</h2>
            <p className="text-gold text-xl sm:text-2xl font-serif italic">Children who wanted to learn were being left behind.</p>
          </div>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl grid lg:grid-cols-[0.75fr_1.25fr] items-stretch">
            <StoryImage
              file="classroom-dirt-floor.png"
              alt="Children learning in the original dirt-floor classroom"
              imageClass="object-contain scale-[1.22]"
              className="min-h-[20rem] sm:min-h-[22rem] lg:min-h-[20rem] h-full w-full bg-white"
            />
            <div className="p-6 sm:p-8 lg:p-10 text-gray-700 leading-8 space-y-5">
              <p>After COVID, many Kenyan families were pushed even deeper into poverty. Jobs disappeared. Food became scarce. School fees became impossible for many parents to afford. Children who wanted to learn were left behind, not because they lacked ability, but because their families simply could not pay.</p>
              <p>At the same time, a woman named Nancy was facing struggles of her own. A teacher and mother, she was trying to provide for her family after her husband left. Resources were limited. The future was uncertain.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Nancy's call to teach and the first classroom */
function FaithQuestion() {
  return (
    <>
      <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-3">"What is in your hand?"</h2>
          <p className="text-gold text-lg sm:text-xl font-serif italic mb-8">God began with what Nancy already had: the ability to teach.</p>
          <div className="max-w-6xl mx-auto bg-forest rounded-2xl overflow-hidden shadow-lg grid lg:grid-cols-2 text-left items-stretch">
            <div className="p-6 sm:p-8 lg:p-10 text-white/90 leading-8 space-y-4">
              <p>Yet in the middle of her own hardship, she felt God asking a simple question: <strong className="text-gold">"What is in your hand?"</strong></p>
              <p>Nancy did not have money. She did not have a school. She did not have buildings, staff, or funding. What she had was the ability to teach. So she began knocking on doors.</p>
              <p>She asked parents who could not afford school fees if they would allow her to teach their children. A few families said yes. Those few children became the beginning of something neither Nancy nor the families could have imagined. The school began on borrowed land. The first classroom was little more than a shed.</p>
            </div>
            <StoryImage
              file="what-is-in-your-hand.png"
              alt="A teacher sharing what she had by teaching children"
              imageClass="object-cover object-center"
              className="min-h-[22rem] sm:min-h-[26rem] lg:min-h-[30rem] h-full"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-forest">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">The first classroom was little more than a shed.</h2>
          <p className="text-gold text-xl sm:text-2xl font-serif italic mb-8">The floor was only dirt, but the little school represented hope.</p>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden grid lg:grid-cols-2 text-left shadow-lg items-stretch">
            <StoryImage
              file="small-school-building.png"
              alt="The small building that became the first school"
              imageClass="object-contain p-4 sm:p-6"
              className="min-h-[24rem] h-full"
            />
            <div className="p-6 sm:p-9 lg:p-11 text-gray-700 leading-8 space-y-5">
              <p>The floor was only dirt. The structure offered little protection from the weather. Food was scarce. Some mornings, the children received only a cup of porridge. Yet every day they came. For children who had been locked out of education, the little school represented hope.</p>
              <p>As word spread, more children arrived. Some came hungry. Some came sick. Some carried wounds that could be seen. Others carried wounds that could not. The school quickly became more than a place of learning. It became a refuge.</p>
            </div>
          </div>
        </div>
      </section>

      <MealsSection />
    </>
  );
}

/* Meals, medical care, dignity, and the shoes testimony */
function MealsSection() {
  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-3">Children received meals.</h2>
        <p className="text-gold text-lg sm:text-xl font-serif italic mb-8">The school became a place of care, dignity, and restoration.</p>
        <div className="max-w-6xl mx-auto bg-forest rounded-2xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 items-stretch border-b border-white/15">
            <div className="p-6 sm:p-8 lg:p-10 text-white/90 leading-8 space-y-5 text-left">
              <p>Medical needs were addressed. Clothing was provided. Most importantly, children were treated with dignity. The fourteen-year-old boy and his sisters were among those children.</p>
              <p>The school arranged medical treatment for their jiggers and infections. They received food, care, and the opportunity to begin rebuilding their lives.</p>
              <p>For the boy, it also meant something else: a chance to learn. Years of education had been stolen from him, but he was not treated as a lost cause. He was given a place to begin again.</p>
              <p>Then one day, donors helped purchase shoes for the children.</p>
            </div>
            <StoryImage
              file="children-received-meals.png"
              alt="Children receiving meals and care at the school"
              imageClass="object-cover object-[center_22%]"
              className="min-h-[22rem] sm:min-h-[26rem] lg:min-h-[30rem] h-full w-full"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 py-8 sm:py-10">
            <p className="text-white/80 leading-8 mb-5">As the children gathered, the boy stood and shared something that left the room silent.</p>
            <blockquote className="text-gold text-2xl sm:text-3xl font-bold font-serif mb-5">"It's the first pair of shoes I've ever owned."</blockquote>
            <p className="text-white/80 leading-8">At fourteen years old, he had never placed his feet inside a pair of shoes. In that moment, everyone understood that this school was never simply about education. It was about restoring dignity. It was about giving children opportunities that poverty had tried to take away.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* School closure, rebuilding, and the need for dormitories */
function SaferFuture() {
  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-forest">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">Some lived too far away to travel every day.</h2>
        <p className="text-gold text-xl sm:text-2xl font-serif italic mb-8">Others came from difficult and unsafe environments.</p>
        <div className="max-w-6xl mx-auto bg-forest-light border border-white/15 rounded-2xl overflow-hidden grid lg:grid-cols-2 text-left shadow-lg items-stretch">
          <div className="p-6 sm:p-9 lg:p-11 text-white/90 leading-8 space-y-5">
            <p>As the school grew, another reality became impossible to ignore. The facilities were inadequate. The number of children increased faster than the infrastructure. Government inspectors eventually visited the school and determined the buildings did not meet required standards. Conditions had to improve if the children were going to be served safely.</p>
            <p>The school was shut down. Nancy was detained. What had begun with faith now seemed in danger of ending. Yet the crisis became a turning point. The old structures came down. Plans were made to rebuild properly. Classrooms would be safer. Standards would be met. What looked like a devastating setback became the beginning of something stronger.</p>
            <p>But new challenges emerged. Many children needed more than a classroom. Some lived too far away to travel every day. Others came from difficult and unsafe environments. If the school were truly going to protect and serve the children who needed it, more dormitories would have to be built.</p>
          </div>
          <StoryImage
            file="classroom-meeting-wide.png"
            alt="A crowded classroom meeting at the growing school"
            imageClass="object-cover object-center"
            className="min-h-[26rem] lg:min-h-[36rem] h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

/* Diana's burden, prayer, and the early-morning call */
function BurdenShared() {
  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif text-center mb-7">Diana Booker was carrying the burden.</h2>
        <p className="max-w-5xl mx-auto text-gray-600 leading-8 mb-7">Construction began. The boys' dormitory walls went up. The girls' dormitory foundation was poured. Then the money ran out. Construction stopped. The buildings stood unfinished. Walls reached toward the sky, but no roof covered them. The need remained. The children continued to come. Thousands of miles away, in the United States, Diana Booker was carrying the burden.</p>
        <p className="max-w-5xl mx-auto text-gray-600 leading-8 mb-10">Diana Booker was carrying the burden of what she had witnessed in Kenya. She had walked the school grounds. She had met the children. She had seen the conditions they came from. She had looked into faces she could never forget. What she saw changed her. Once she saw it, she could not unsee it. The burden followed her home. The unfinished dormitories stayed in her thoughts. The children stayed in her heart. She knew what those buildings represented. They were not construction projects. They were beds. Safety. Protection. Opportunity.</p>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-12">
          <div className="text-gray-600 leading-8 space-y-5">
            <p>Eventually, Diana reached the end of her own ability to solve the problem. She was powerless in her own strength to create the resources that were needed. She knew she could not force provision to appear. So she did the only thing there was left for her to do. She prayed.</p>
            <p>It wasn't a casual prayer. It was not a polished prayer, but a heartfelt cry out to God.</p>
            <blockquote className="border-l-4 border-gold pl-5 text-lg text-forest font-serif italic">"Lord, there are people somewhere who have the resources to finish these dormitories. Speak to them, please. Wake them up if You have to. Please, Lord, give them a dream if You have to. Let them know these children really need help."</blockquote>
            <p>Then she left it in God's hands.</p>
          </div>
          <StoryImage
            file="woman-praying.png"
            alt="Diana praying for provision for the unfinished dormitories"
            imageClass="object-contain p-3 sm:p-5"
            className="min-h-[28rem] h-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="text-gray-600 leading-8 space-y-5 lg:order-2">
            <p>But what Diana did not know was that God was already moving. Early one morning, a little after five o'clock, her phone rang. On the other end was a retired businessman from Georgia. He was calling because God had been speaking to him.</p>
            <p>The message was unusual. God had told him to give money to a school in Africa. There was only one problem. He didn't know which school. He didn't know where it was. He didn't know what need existed.</p>
            <p>He simply knew God would not let him ignore the prompting. As he considered whom he knew connected to ministry work in Africa, one name came to mind: <strong className="text-forest">Diana Booker.</strong> So he called.</p>
          </div>
          <div className="lg:order-1">
            <StoryImage
              file="phone-prayer-moment.png"
              alt="The early morning phone call that answered Diana's prayer"
              imageClass="object-contain p-3 sm:p-5"
              className="min-h-[28rem] h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Answered prayer and the school's testimony */
function AnsweredPrayer() {
  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif text-center mb-9">While Diana prayed, God was moving</h2>
        <div className="max-w-5xl mx-auto text-gray-600 leading-8 space-y-5 mb-10">
          <p>As he explained why he was calling, Diana sat in stunned silence. She relayed the prayer she had poured out before God: the specific prayer asking God to speak to someone, to move on someone's heart, and to provide for those unfinished dormitories. God had answered it. There wasn't any fundraising appeal that reached him. No one had called him asking for money. Neither had anyone explained the needs of this school.</p>
          <p>How incredible. While Diana was praying, God was already moving. The businessman responded in obedience. The project would move forward. The dormitories would be completed.</p>
          <p>For Diana, the greatest miracle was not the money. It was the reminder that God still hears and is touched by our concerns. He hears the cries that come from burdened hearts. He sees the needs long before we do. And He is waiting for us to ask.</p>
        </div>
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-14 items-center mb-10">
          <blockquote className="text-gold text-3xl sm:text-4xl font-serif italic text-center lg:text-right">"While we are praying, He is already working on the answer."</blockquote>
          <StoryImage
            file="children-gathered-outside.png"
            alt="Children gathered in prayer outside"
            imageClass="object-contain p-3 sm:p-5"
            className="h-80 sm:h-[28rem]"
          />
        </div>
        <div className="max-w-5xl mx-auto text-gray-600 leading-8 space-y-5">
          <p>Today, the school stands as a testimony to what can happen when ordinary people respond to God's prompting. Nancy responded when God asked, "What is in your hand?" Diana responded when God placed the children on her heart. A businessman responded when God told him to give to a school he could not even name, just as He had prompted others who have given to this cause.</p>
          <p>Because they listened, children have been fed and educated. Blessings have provided medical care that seemed to come out of nowhere. Children have found safety in the arms of God in this school. It has been a place where children have discovered hope.</p>
          <p className="text-forest font-serif text-lg font-semibold">It has been a rescue mission disguised as a school. And this is not the end of the story.</p>
        </div>
      </div>
    </section>
  );
}

/* Current needs and opportunities to respond */
function ContinuingNeed() {
  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-forest">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">The Story Continues</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">The need keeps growing.</h2>
        <p className="text-gold text-xl sm:text-2xl font-serif italic mb-8">And so does the opportunity to respond.</p>
        <div className="max-w-6xl mx-auto bg-forest-light border border-white/15 rounded-2xl overflow-hidden grid lg:grid-cols-2 text-left shadow-lg items-stretch">
          <div className="p-6 sm:p-9 lg:p-11 text-white/90 leading-8 space-y-5">
            <p>This school continues to grow because the need keeps growing. More children need help. Additional classrooms are needed so more vulnerable children can find shelter, stability, and hope.</p>
            <p>Thanks to the generosity of our donors, we now owe only $35,000 on the school property. A larger kitchen is also needed to prepare meals for the growing number of students who depend on the school each day.</p>
            <p>The needs may be different from what they were years ago, but the opportunity remains the same. The miracle was never simply that resources arrived - it was that someone listened when God spoke.</p>
            <p>Perhaps that is why you are reading this story today. Somewhere, another child is waiting. Somewhere, another need remains unfinished.</p>
            <p className="text-gold text-lg font-serif font-bold">Remember, the question is not whether God can provide. The question is whether we will listen and respond when He does.</p>
          </div>
          <StoryImage
            file="students-purple-uniform.png"
            alt="Royal Christian Academy students in purple uniforms"
            imageClass="object-cover object-center"
            className="min-h-[28rem] lg:min-h-[36rem] h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

/* Final call to action before the footer */
function AboutCta() {
  const { navigate } = usePage();

  return (
    <section className="py-12 px-4 sm:px-8 sm:py-14 lg:px-16 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto rounded-2xl bg-forest px-6 py-10 sm:px-10 sm:py-12 text-center shadow-lg">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Be Part of the Story</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-5">Help faith become visible for another child.</h2>
        <p className="text-white/80 leading-8 max-w-2xl mx-auto mb-8">Your prayers, partnership, and support can help provide education, meals, safety, and lasting hope.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:royalchristianacademy07@gmail.com?subject=Support%20the%20Mission" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-forest font-bold px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors">
            Support the Mission <ArrowRight size={17} />
          </a>
          <button onClick={() => navigate('programs')} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/35 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
            Explore Our Programs
          </button>
        </div>
      </div>
    </section>
  );
}
