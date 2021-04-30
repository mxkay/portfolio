import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Background from './components/Background';
import NavBar from './components/NavBar';

const routes = [
  {
    key: 'Home',
    path: '/',
    exact: true,
    Component: lazy(() => import('./modules/home'))
  },
  {
    key: 'About',
    path: '/about',
    exact: true,
    Component: lazy(() => import('./modules/about'))
  },
  {
    key: 'Portfolio',
    path: '/portfolio',
    exact: true,
    Component: lazy(() => import('./modules/portfolio'))
  }
];

export default function App () {
  return (
    <Background>
      <Suspense fallback={<div>AHHHH!</div>}>
        <Router>
          <Route path='*' render={props => <NavBar {...props} routes={routes} />} />
          <Switch>
            {
            routes.map(({ path, exact, key, Component }) => (
              <Route
                path={path}
                exact={exact}
                key={key}
                render={props => <Component {...props} />}
              />
            ))
          }
          </Switch>
        </Router>
      </Suspense>
    </Background>
  );
}
