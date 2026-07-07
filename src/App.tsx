import { useState, useEffect } from 'react';
import { PageContext, type Page } from './context/PageContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StaffPage from './pages/StaffPage';
import GalleryPage from './pages/GalleryPage';

const pagePaths: Record<Page, string> = {
  home: '/',
  about: '/about',
  programs: '/programs',
  admissions: '/admissions',
  staff: '/staff',
  gallery: '/gallery',
};

function pageFromPath(pathname: string): Page {
  const segment = pathname.replace(/^\/+|\/+$/g, '');
  return segment in pagePaths ? (segment as Page) : 'home';
}

function PageContent({ page }: { page: Page }) {
  switch (page) {
    case 'home':       return <HomePage />;
    case 'about':      return <AboutPage />;
    case 'programs':   return <ProgramsPage />;
    case 'admissions': return <AdmissionsPage />;
    case 'staff':      return <StaffPage />;
    case 'gallery':    return <GalleryPage />;
    default:           return <HomePage />;
  }
}

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
