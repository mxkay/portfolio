import { lazy, Suspense } from 'react';
import { Switch as RouterSwitch, Route, Redirect, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Intro from './components/Intro';
import Menu from '../../components/Menu';
import Footer from './components/Footer';
import Gate from './components/Gate';
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
    Component: lazy(() => import('../about'))
  },
  {
    key: 'Portfolio',
    path: buildPath('/portfolio'),
    exact: true,
    Component: lazy(() => import('../portfolio'))
  },
  {
    key: 'Commission',
    path: buildPath('/commission'),
    exact: true,
    Component: lazy(() => import('../commission'))
  },
  {
    key: '',
    path: buildPath('/artwork'),
    exact: true,
    Component: lazy(() => import('../artwork'))
  },
  {
    key: '',
    path: buildPath('/donate'),
    exact: true,
    Component: lazy(() => import('../donate'))
  }
];

const Main = () => {
  const location = useLocation();

  return (
    <Layout path={location.pathname}>
      <Intro />
      <Menu routes={routes.filter(route => route.key)} />
      <RouterSwitch>
        {routes.map(({ path, exact, Component }, index) => (
          <Route
            path={path}
            exact={exact}
            key={index}
            render={(props) => (
              <Suspense fallback='AHHHHHHH!'>
                <Gate>
                  <Component {...props} />
                </Gate>
              </Suspense>
            )}
          />
        ))}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </RouterSwitch>
      <Footer />
    </Layout>
  );
};

export default Main;
