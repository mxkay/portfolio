import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ routes }) => {
  const { pathname } = useLocation();
  const [isVertical, setIsVertical] = useState({
    isAnimated: false,
    isVertical: pathname === '/'
  });

  useEffect(async () => {
    setIsVertical(pathname === '/');
  }, [pathname]);

  console.log(pathname, isVertical);

  return (
    <Nav isVertical={isVertical}>
      <List
        isVertical={isVertical}
      >
        {routes.map(({ path, key }) => (
          <ListItem
            key={key}
            isVertical={isVertical}
          >
            <Link to={path}>{key}</Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

const Link = styled((props) => <RouterLink {...props} />)`
  display: block;
  font-size: 1.4rem;
  padding: 1em 4em;
  border-radius: 0.5em;
  text-decoration: none;
  font-weight: bold;
  color: black;
  background-color: #AAD;

  :focus {
    filter: sepia(200%);
  }
`;

const ListItem = styled.li`
  
`;

const List = styled.ul.attrs(({ isVertical }) => ({
  style: {
    flexDirection: isVertical ? 'column' : 'row',
    alignItems: isVertical ? 'center' : 'flex-start'
  }
}))`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

export default Navbar;
