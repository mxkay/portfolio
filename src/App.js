import { lazy, Suspense } from 'react';
import { Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';
import Background from './components/Background';
import ActivityIndicator from './components/ActivityIndicator';
import joinUrl from './helpers/joinUrl';

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
    Component: lazy(() => import('./pages/about'))
  },
  {
    key: 'Portfolio',
    path: buildPath('/portfolio'),
    exact: true,
    Component: lazy(() => import('./pages/portfolio'))
  },
  {
    key: 'Commission',
    path: buildPath('/commission'),
    exact: true,
    Component: lazy(() => import('./pages/commission'))
  },
  {
    key: '',
    path: buildPath('/artwork'),
    exact: true,
    Component: lazy(() => import('./pages/artwork'))
  },
  {
    key: '',
    path: buildPath('/donate'),
    exact: true,
    Component: lazy(() => import('./pages/donate'))
  }
];

const App = () => {
  return (
    <>
      <Background />
      <RouterSwitch>
        {routes.map(({ path, exact, Component }, index) => (
          <Route
            path={path}
            exact={exact}
            key={index}
            render={(props) => (
              <Suspense fallback={() => <ActivityIndicator />}>
                <Component {...props} />
              </Suspense>
            )}
          />
        ))}
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </RouterSwitch>
    </>
  );
};

export default App;
