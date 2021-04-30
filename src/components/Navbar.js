import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ routes }) => {
  const { pathname } = useLocation();
  const [isVertical, setIsVertical] = useState(pathname === '/');

  useEffect(async () => {
    setIsVertical(pathname === '/');
  }, [pathname]);

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
  font-size: 1.6rem;
  padding: 0.8em 3em;
  border-radius: 0.5em;
  border: 5px solid;
  border-top-color: #DEF;
  border-right-color: #456;
  border-bottom-color: #456;
  border-left-color: #DEF;
  text-decoration: none;
  font-weight: bold;
  color: black;
  background-color: #AAD;

  &:link {
    background-color: #ADF;
  }

  &:active, &:target {
    background-color: #FDA;
  }

  outline: none;
`;

const ListItem = styled.li`
  border-radius: 1.5em;
  border: 0.5em solid rgba(0,0,0,0);
  padding: 0.5em;

  &:focus-within {
    border-color: #DEF #456 #456 #DEF;
  }
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
