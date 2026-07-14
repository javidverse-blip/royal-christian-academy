import { createContext, useContext } from 'react';

/* Pages supported by the local history-based router. */
export type Page = 'home' | 'about' | 'our-story' | 'programs' | 'admissions' | 'staff' | 'gallery' | 'contact';
export type Navigate = (page: Page) => void;

interface PageContextType {
  currentPage: Page;
  navigate: Navigate;
}


/* Shared route state consumed by navigation-aware components. */
export const PageContext = createContext<PageContextType>({
  currentPage: 'home',
  navigate: () => {},
});


/* Read the current route and navigation helper. */
export const usePage = () => useContext(PageContext);
