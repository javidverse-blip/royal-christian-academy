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
