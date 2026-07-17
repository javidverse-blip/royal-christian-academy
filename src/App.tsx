import { useState, useEffect } from 'react';
import { PageContext, type Page } from './context/PageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurStoryPage from './pages/OurStoryPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StaffPage from './pages/StaffPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

/* Canonical browser paths for each client-side route. */
const pagePaths: Record<Page, string> = {
  home: '/',
  about: '/about',
  'our-story': '/our-story',
  programs: '/programs',
  admissions: '/admissions',
  staff: '/staff',
  gallery: '/gallery',
  contact: '/contact',
};

const pageMeta: Record<Page, { title: string; description: string }> = {
  home: {
    title: "Kapsitwet Royal Christian Academy – Sharing God's Wisdom",
    description: 'Training hands for service, minds for truth, and hearts for Christ in Kapsitwet, Kitale, Kenya.',
  },
  about: {
    title: 'About Kapsitwet Royal Christian Academy',
    description: 'Learn about the mission, vision, and Christian foundation of Kapsitwet Royal Christian Academy.',
  },
  'our-story': {
    title: 'Our Story | Kapsitwet Royal Christian Academy',
    description: 'Read the story of faith, prayer, and service behind Kapsitwet Royal Christian Academy.',
  },
  programs: {
    title: 'Programs | Kapsitwet Royal Christian Academy',
    description: 'Explore holistic programs in education, service, vocational training, outreach, and farming.',
  },
  admissions: {
    title: 'Admissions | Kapsitwet Royal Christian Academy',
    description: 'Find admissions information for families interested in Kapsitwet Royal Christian Academy.',
  },
  staff: {
    title: 'Staff | Kapsitwet Royal Christian Academy',
    description: 'Meet the staff and leaders serving students at Kapsitwet Royal Christian Academy.',
  },
  gallery: {
    title: 'Gallery | Kapsitwet Royal Christian Academy',
    description: 'View classroom, worship, gardening, and student life moments from the academy.',
  },
  contact: {
    title: 'Contact | Kapsitwet Royal Christian Academy',
    description: 'Contact Kapsitwet Royal Christian Academy for questions, partnership, support, or volunteering.',
  },
};


function setMeta(selector: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}


/* Resolve the current browser pathname to a known page. */
function pageFromPath(pathname: string): Page {
  const segment = pathname.replace(/^\/+|\/+$/g, '');
  return segment in pagePaths ? (segment as Page) : 'home';
}


/* Render the route-level page selected by the page context. */
function PageContent({ page }: { page: Page }) {
  switch (page) {
    case 'home':       return <HomePage />;
    case 'about':      return <AboutPage />;
    case 'our-story':  return <OurStoryPage />;
    case 'programs':   return <ProgramsPage />;
    case 'admissions': return <AdmissionsPage />;
    case 'staff':      return <StaffPage />;
    case 'gallery':    return <GalleryPage />;
    case 'contact':    return <ContactPage />;
    default:           return <HomePage />;
  }
}


/* Application shell and lightweight history-based routing. */
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => pageFromPath(window.location.pathname));

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', pagePaths[page]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const meta = pageMeta[currentPage];
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [currentPage]);

  return (
    <PageContext.Provider value={{ currentPage, navigate }}>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageContent page={currentPage} />
        </main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
}
