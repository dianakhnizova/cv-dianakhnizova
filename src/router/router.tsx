import { createBrowserRouter } from 'react-router-dom';
import { PagePath } from './enums';
import { Root } from './root/root';
import { HomePage } from '../pages/home-page/HomePage';
import { NotFoundPage } from '../pages/not-found-page/NotFoundPage';
import { AboutPage } from '@/pages/about-page/AboutPage';
import { ContactPage } from '@/pages/contact-page/ContactPage';
import { GitHubPage } from '@/pages/git-hub-page/git-hub-page';
import { PortfolioPage } from '@/pages/portfolio-page/PortfolioPage';

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFound, Component: NotFoundPage },
      { path: PagePath.gitHubPage, Component: GitHubPage },

      { path: PagePath.portfolioPage, Component: PortfolioPage },
      { path: PagePath.aboutPage, Component: AboutPage },
      { path: PagePath.contactPage, Component: ContactPage },
    ],
  },
  {
    path: PagePath.notFound,
    Component: NotFoundPage,
  },
]);
