import { Link } from 'react-router-dom';

const NavBar = ({ location, routes }) => {
  return (
    <nav>
      {routes.map(({ path, key }) => <Link key={key} to={path}>{key}</Link>)}
    </nav>
  );
};

export default NavBar;
