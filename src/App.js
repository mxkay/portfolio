import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Background = lazy(() => import('./components/Background'));

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
    <Suspense fallback={<div>AHHHH!</div>}>
      <Background>
        <Router>
          <nav>
            {routes.map(({ path, key }) => <Link key={key} to={path}>{key}</Link>)}
          </nav>
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
      </Background>
    </Suspense>
  );
}
