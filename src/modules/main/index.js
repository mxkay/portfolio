import { Suspense } from 'react';
import { Switch as RouterSwitch, Route, Redirect, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './components/Intro';
import Menu from '../../components/Menu';
import Footer from './components/Footer';
import Gate from '../../components/Gate';
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
    Component: () => <></>
  },
  {
    key: 'About',
    path: buildPath('/about'),
    exact: true,
    Component: About
  },
  {
    key: 'Portfolio',
    path: buildPath('/portfolio'),
    exact: true,
    Component: Portfolio
  },
  {
    key: 'Commission',
    path: buildPath('/commission'),
    exact: true,
    Component: Commission
  },
  {
    key: '',
    path: buildPath('/artwork'),
    exact: true,
    Component: Artwork
  },
  {
    key: '',
    path: buildPath('/donate'),
    exact: true,
    Component: Donate
  }
];

const Main = () => {
  const location = useLocation();

  return (
    <Layout path={location.pathname}>
      <Intro />
      <Menu routes={routes.filter(route => route.key)} />
      <Suspense fallback={<div>AHHHH!</div>}>
        <RouterSwitch>
          {routes.map(({ path, exact, Component }, index) => (
            <Route
              path={path}
              exact={exact}
              key={index}
              render={(props) => <Gate><Component {...props} /></Gate>}
            />
          ))}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </RouterSwitch>
      </Suspense>
      <Footer />
    </Layout>
  );
};

export default Main;
