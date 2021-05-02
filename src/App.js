import { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Background from './components/Background';
import Layout from './components/Layout';
import Intro from './components/Intro';
import Menu from './components/Menu';
import About from './modules/about';
import Portfolio from './modules/portfolio';
import Commission from './modules/commission';
import Footer from './components/Footer';

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
          <Intro />
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
          <Footer />
        </Layout>
      </Suspense>
    </Background>
  );
};

export default App;
