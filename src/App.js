import { Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';
import Background from './components/Background';

import routes from './router/routes';

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
              <Component {...props} />
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
