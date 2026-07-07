import { createContext, useContext } from 'react';

export type Page = 'home' | 'about' | 'programs' | 'admissions' | 'staff' | 'gallery';

interface PageContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export const PageContext = createContext<PageContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export const usePage = () => useContext(PageContext);
