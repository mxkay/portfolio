import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Background from './components/Background';
import Menu from './components/Menu';
import Layout from './components/Layout';
import About from './modules/about';
import Portfolio from './modules/portfolio';
import Commission from './modules/commission';

const routes = [
  {
    path: '/',
    exact: true,
    Component: () => <></>
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
    key: 'Commission',
    path: '/commission',
    exact: true,
    Component: Commission
  }
];

const App = () => {
  const location = useLocation();
  // const [menuOpen, setMenuOpen] = useState(false);

  return (

    <Background>
      <Suspense fallback={<div>AHHHH!</div>}>
        <Layout path={location.pathname}>
          <h1>Hi, I'm Mathilda</h1>
          <Menu routes={routes.filter(route => route.key)} />
          <Switch>
            {routes.map(({ path, exact, Component }, index) => (
              <Route
                path={path}
                exact={exact}
                key={index}
                render={props => <Component {...props} />}
              />
            ))}
          </Switch>
        </Layout>
      </Suspense>
    </Background>
  );
};

export default App;
