import Landing from '../pages/Landing';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Artwork from '../pages/Artwork';
import NotFoundPage from '../pages/404';

const routes = [
  {
    path: '/',
    exact: true,
    Component: Landing
  },
  {
    key: 'About',
    path: '/about',
    exact: true,
    Component: About
  },
  {
    key: 'Portfolio',
    path: '/portfolio',
    exact: true,
    Component: Portfolio
  },
  {
    key: 'Contact',
    path: '/contact',
    exact: true,
    Component: Contact
  },
  {
    key: '',
    path: '/artwork',
    exact: true,
    Component: Artwork
  },
  {
    path: '*',
    Component: NotFoundPage
  }
];

export default routes;