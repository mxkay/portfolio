import { Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';

const Switch = ({ baseUrl = '', routes, redirect }) => (
  <RouterSwitch>
    {routes.map(({ path, exact, Component, Wrapper }, index) => (
      <Route
        path={path}
        exact={exact}
        key={index}
        render={props => <Component {...props} />}
      />
    ))}
    <Route path='*'>
      <Redirect to={redirect} />
    </Route>
  </RouterSwitch>
);

export default Switch;
