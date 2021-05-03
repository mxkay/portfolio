import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Switch from '../../components/Switch';
import Layout from '../../components/Layout';
import Intro from '../../components/Intro';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Gate from './components/Gate';
import About from '../about';
import Portfolio from '../portfolio';
import Commission from '../commission';
import Artwork from '../artwork';
import Donate from '../donate';
import joinUrl from '../../helpers/joinUrl';

const buildPath = (endPoint) => joinUrl('/', endPoint);

const routes = [
  {
    path: buildPath('/'),
    exact: true,
    Component: () => <></>,
    Wrapper: Gate
  },
  {
    key: 'About',
    path: buildPath('/about'),
    exact: true,
    Component: About,
    Wrapper: Gate
  },
  {
    key: 'Portfolio',
    path: buildPath('/portfolio'),
    exact: true,
    Component: Portfolio,
    Wrapper: Gate
  },
  {
    key: 'Commission',
    path: buildPath('/commission'),
    exact: true,
    Component: Commission,
    Wrapper: Gate
  },
  {
    key: '',
    path: buildPath('/artwork'),
    exact: true,
    Component: Artwork,
    Wrapper: Gate
  },
  {
    key: '',
    path: buildPath('/donate'),
    exact: true,
    Component: Donate,
    Wrapper: Gate
  }
];

const Main = () => {
  const location = useLocation();

  return (
    <Layout path={location.pathname}>
      <Intro />
      <Menu routes={routes.filter(route => route.key)} />
      <Suspense fallback={<div>AHHHH!</div>}>
        <Switch baseUrl='/' routes={routes} redirect={buildPath('/')} />
      </Suspense>
      <Footer />
    </Layout>
  );
};

export default Main;
