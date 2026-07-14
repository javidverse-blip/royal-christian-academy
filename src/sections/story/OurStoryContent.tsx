import { Clock, Download, FileText, Quote } from 'lucide-react';
import PageBanner from '../../components/ui/PageBanner';
import { usePage } from '../../context/PageContext';

const storyPdfHref = '/images/about/krca-our-story.pdf';

const propertyFunding = [
  { label: 'Current Property Balance', amount: '$26,946' },
  { label: 'Discount Available Through October 31', amount: '$6,946' },
  { label: 'Amount Needed to Pay Off the Property', amount: '$20,000' },
];

const storyImageMeta: Record<string, { width: number; height: number }> = {
  'our-story.png': { width: 1080, height: 1080 },
  'humble-beginning.webp': { width: 1080, height: 1080 },
  'classroom-dirt-floor.webp': { width: 1024, height: 1536 },
  'what-is-in-your-hand.webp': { width: 1080, height: 1080 },
  'small-school-building.webp': { width: 1122, height: 1402 },
  'children-received-meals.webp': { width: 1122, height: 1402 },
  'classroom-meeting-wide.webp': { width: 1200, height: 799 },
  'woman-praying.webp': { width: 1200, height: 801 },
  'phone-prayer-moment.webp': { width: 1200, height: 801 },
  'children-gathered-outside.webp': { width: 1200, height: 800 },
  'students-purple-uniform.webp': { width: 1200, height: 962 },
};

/* Our Story page section composition */
export default function OurStoryContent() {
  return (
    <>
      <PageBanner page="our-story" />
      <OpeningBookletSection />
      <BoysStorySection />
      <AfterCovidSection />
      <FaithQuestion />
      <SaferFuture />
      <BurdenShared />
      <AnsweredPrayer />
      <ContinuingNeed />
      <StoryCta />
    </>
  );
}

/* Shared story image frame */
function StoryImage({
  file,
  alt = 'Royal Christian Academy story',
  className = 'h-80 sm:h-96',
  imageClass = 'object-cover',
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  file: string;
  alt?: string;
  className?: string;
  imageClass?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}) {
  const meta = storyImageMeta[file];

  return (
    <div className={'relative overflow-hidden ' + className}>
      <img
        src={encodeURI('/images/about/' + file)}
        alt={alt}
        width={meta?.width}
        height={meta?.height}
        sizes={sizes}
        decoding="async"
        className={'absolute inset-0 h-full w-full ' + imageClass}
        loading={loading}
      />
    </div>
  );
}

function scrollToBoysStory() {
  const section = document.getElementById('boys-story');
  if (!section) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
}

/* Opening booklet and story invitation */
function OpeningBookletSection() {
  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid items-center gap-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-xl shadow-forest/10 sm:p-7 lg:grid-cols-[0.45fr_0.55fr] lg:gap-10 lg:p-9">
          <StoryImage
            file="our-story.png"
            alt="Royal Christian Academy story and campaign booklet cover"
            imageClass="object-contain p-2 sm:p-3"
            className="min-h-[20rem] rounded-2xl bg-cream sm:min-h-[28rem] lg:min-h-[34rem]"
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="text-gray-700 leading-8 lg:pl-2">
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">A Humble Beginning</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif mb-5 leading-tight">
              A School Born and Thriving From Faith
            </h2>
            <blockquote className="mb-6 rounded-2xl border-l-4 border-gold bg-gold/10 px-5 py-5 text-forest shadow-sm">
              <Quote size={30} className="text-gold mb-3" aria-hidden="true" />
              <p className="font-serif text-2xl italic leading-snug sm:text-3xl">"It's a rescue mission disguised as a school."</p>
            </blockquote>
            <p className="mb-7 text-base leading-8">
              Royal Christian Academy began with a simple act of faith and a willingness to use what was already in hand. What started in humble conditions has grown into a place of education, safety, dignity, and hope for vulnerable children. The school continues to thrive because ordinary people have chosen to listen, respond, and believe that God can build something lasting from a small beginning.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={storyPdfHref}
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label="Download the Royal Christian Academy story booklet PDF"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 sm:w-auto"
              >
                <Download size={18} aria-hidden="true" />
                Download the Story Booklet
              </a>
              <a
                href="#boys-story"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToBoysStory();
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 bg-white px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:border-forest hover:bg-cream focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45 sm:w-auto"
              >
                Continue Reading the Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* The boy's story */
function BoysStorySection() {
  return (
    <section id="boys-story" className="scroll-mt-24 py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-forest/10 lg:grid-cols-[0.48fr_0.52fr]">
          <StoryImage
            file="humble-beginning.webp"
            alt="The fourteen-year-old boy at the beginning of the school story"
            imageClass="object-cover object-center"
            className="min-h-[22rem] w-full sm:min-h-[30rem] lg:min-h-[42rem] lg:h-full"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-forest font-serif mb-3 leading-tight">
              The First Thing People Noticed Was His Feet!
            </h2>
            <p className="text-gold text-xl sm:text-2xl font-serif italic mb-6">Not His Age, Not His Smile...</p>
            <div className="text-gray-600 leading-8 space-y-5">
              <p>They were swollen and infected with jiggers, tiny parasites that burrow into the skin and lay eggs beneath the flesh. Every step was painful. Every movement was a reminder of a life most people could scarcely imagine. Beside him stood his two younger sisters.</p>
              <p>Their clothes were worn thin. Their heads were covered with sores. Hunger had become such a normal part of life that they no longer complained about it.</p>
              <p>The boy was fourteen years old. He could not read. Not because he lacked intelligence. Not because he lacked desire. Because poverty had stolen opportunities that most children take for granted.</p>
              <p>For many Americans, it is difficult to imagine a child reaching fourteen years old without learning to read, never owning a pair of shoes, and living in conditions where basic medical care is out of reach. Yet this was the reality for many children in rural Kenya. And it is why this story begins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Post-COVID hardship */
function AfterCovidSection() {
  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-forest">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">After COVID, hardship deepened.</h2>
          <p className="text-gold text-xl sm:text-2xl font-serif italic">Children who wanted to learn were being left behind.</p>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl grid lg:grid-cols-[0.85fr_1.15fr] items-stretch">
          <StoryImage
            file="classroom-dirt-floor.webp"
            alt="Children learning in the original dirt-floor classroom"
            imageClass="object-contain scale-[1.16] translate-y-[22px]"
            className="min-h-[24rem] sm:min-h-[28rem] lg:min-h-[30rem] h-full w-full bg-white"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="p-6 sm:p-8 lg:p-10 text-gray-700 leading-8 space-y-5">
            <p>After COVID, many Kenyan families were pushed even deeper into poverty. Jobs disappeared. Food became scarce. School fees became impossible for many parents to afford. Children who wanted to learn were left behind, not because they lacked ability, but because their families simply could not pay.</p>
            <p>At the same time, a woman named Nancy was facing struggles of her own. A teacher and mother, she was trying to provide for her family after her husband left. Resources were limited. The future was uncertain.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Nancy's call to teach and the first classroom */
function FaithQuestion() {
  return (
    <>
      <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-white">
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
              file="what-is-in-your-hand.webp"
              alt="A teacher sharing what she had by teaching children"
              imageClass="object-contain scale-[1.18] translate-y-[24px]"
              className="min-h-[24rem] sm:min-h-[28rem] lg:min-h-[31rem] h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-forest">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">The first classroom was little more than a shed.</h2>
          <p className="text-gold text-xl sm:text-2xl font-serif italic mb-8">The floor was only dirt, but the little school represented hope.</p>
          <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden grid lg:grid-cols-2 text-left shadow-lg items-stretch">
            <StoryImage
              file="small-school-building.webp"
              alt="The small building that became the first school"
              imageClass="object-contain scale-[1.15] translate-y-[-38px]"
              className="min-h-[24rem] sm:min-h-[28rem] lg:min-h-[31rem] h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-white">
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
              file="children-received-meals.webp"
              alt="Children receiving meals and care at the school"
              imageClass="object-cover object-[center_10%]"
              className="min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem] h-full w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-forest">
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
            file="classroom-meeting-wide.webp"
            alt="A crowded classroom meeting at the growing school"
            imageClass="object-cover object-center"
            className="min-h-[26rem] lg:min-h-[36rem] h-full w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

/* Diana's burden, prayer, and the early-morning call */
function BurdenShared() {
  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest font-serif text-center mb-7">Diana Booker was carrying the burden.</h2>
        <p className="max-w-5xl mx-auto text-gray-600 leading-8 mb-7">Construction began. The boys' dormitory walls went up. The girls' dormitory foundation was poured. Then the money ran out. Construction stopped. The buildings stood unfinished. Walls reached toward the sky, but no roof covered them. The need remained. The children continued to come. Thousands of miles away, in the United States, Diana Booker was carrying the burden.</p>
        <p className="max-w-5xl mx-auto text-gray-600 leading-8 mb-10">Diana Booker was carrying the burden of what she had witnessed in Kenya. She had walked the school grounds. She had met the children. She had seen the conditions they came from. She had looked into faces she could never forget. What she saw changed her. Once she saw it, she could not unsee it. The burden followed her home. The unfinished dormitories stayed in her thoughts. The children stayed in her heart. She knew what those buildings represented. They were not construction projects. They were beds. Safety. Protection. Opportunity.</p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-10">
          <div className="text-gray-600 leading-8 space-y-5">
            <p>Eventually, Diana reached the end of her own ability to solve the problem. She was powerless in her own strength to create the resources that were needed. She knew she could not force provision to appear. So she did the only thing there was left for her to do. She prayed.</p>
            <p>It wasn't a casual prayer. It was not a polished prayer, but a heartfelt cry out to God.</p>
            <blockquote className="border-l-4 border-gold pl-5 text-lg text-forest font-serif italic">"Lord, there are people somewhere who have the resources to finish these dormitories. Speak to them, please. Wake them up if You have to. Please, Lord, give them a dream if You have to. Let them know these children really need help."</blockquote>
            <p>Then she left it in God's hands.</p>
          </div>
          <StoryImage
            file="woman-praying.webp"
            alt="Diana praying for provision for the unfinished dormitories"
            imageClass="object-contain p-3 sm:p-5"
            className="min-h-[28rem] sm:min-h-[32rem] h-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="text-gray-600 leading-8 space-y-5 lg:order-2">
            <p>But what Diana did not know was that God was already moving. Early one morning, a little after five o'clock, her phone rang. On the other end was a retired businessman from Georgia. He was calling because God had been speaking to him.</p>
            <p>The message was unusual. God had told him to give money to a school in Africa. There was only one problem. He didn't know which school. He didn't know where it was. He didn't know what need existed.</p>
            <p>He simply knew God would not let him ignore the prompting. As he considered whom he knew connected to ministry work in Africa, one name came to mind: <strong className="text-forest">Diana Booker.</strong> So he called.</p>
          </div>
          <div className="lg:order-1">
            <StoryImage
              file="phone-prayer-moment.webp"
              alt="The early morning phone call that answered Diana's prayer"
              imageClass="object-contain p-3 sm:p-5"
              className="min-h-[24rem] sm:min-h-[28rem] h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-cream">
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
            file="children-gathered-outside.webp"
            alt="Children gathered in prayer outside"
            imageClass="object-contain p-3 sm:p-5"
            className="h-96 sm:h-[32rem]"
            sizes="(max-width: 1024px) 100vw, 58vw"
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
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-forest">
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
            file="students-purple-uniform.webp"
            alt="Royal Christian Academy students in purple uniforms"
            imageClass="object-cover object-center"
            className="min-h-[28rem] lg:min-h-[36rem] h-full w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

/* Final call to action before the footer */
function StoryCta() {
  const { navigate } = usePage();

  return (
    <section className="py-10 px-4 sm:px-8 sm:py-12 lg:px-16 lg:py-14 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl bg-forest px-6 py-10 text-center shadow-2xl shadow-forest/20 sm:px-10 sm:py-12 lg:px-14">
        <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Be Part of the Next Chapter</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif mb-5">The Story Isn't Finished Yet</h2>
        <p className="text-white/85 leading-8 max-w-4xl mx-auto mb-5">
          Royal Christian Academy continues to grow because the need continues to grow. More children are waiting for education, safety, nourishment, and a place where they can begin again. What started with one teacher using what was already in her hand is now a growing mission&mdash;but the next chapter still needs people willing to pray, share, give, and partner.
        </p>
        <div className="mx-auto mb-7 max-w-5xl rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5">
          <div className="grid gap-3 lg:grid-cols-3">
            {propertyFunding.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/65">{item.label}</p>
                <p className="text-3xl font-bold text-gold font-serif sm:text-4xl">{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-gold/25 bg-gold/10 px-4 py-4 text-left text-sm leading-6 text-white/85 sm:flex-row">
            <Clock size={18} className="mt-0.5 flex-shrink-0 text-gold" aria-hidden="true" />
            <p>
              If the property is not paid off by <strong className="text-gold">October 31</strong>, the <strong className="text-gold">full balance</strong> of $26,946 becomes due. If it is not paid by the end of the year, the <strong className="text-gold">remaining five acres</strong> will be sold.
            </p>
          </div>
        </div>
        <p className="text-gold text-lg font-serif font-semibold max-w-3xl mx-auto mb-8">
          The question is not whether God can provide. The question is whether we will listen and respond when He does.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            onClick={(event) => { event.preventDefault(); navigate('contact'); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-forest-dark transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/45"
          >
            Give Now
          </a>
          <a
            href={storyPdfHref}
            target="_blank"
            rel="noopener noreferrer"
            download
            aria-label="Download the Royal Christian Academy story booklet PDF"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/45"
          >
            <FileText size={18} aria-hidden="true" />
            Download the Story Booklet
          </a>
        </div>
        <p className="mt-5 text-sm text-white/65">Share the booklet with your church, organization, pastor, family, or friends.</p>
      </div>
    </section>
  );
}
