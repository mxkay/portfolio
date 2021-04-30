import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ locr, routes }) => {
  const { pathname } = useLocation();
  const [isVertical, setIsVertical] = useState(pathname === '/');

  useEffect(() => {
    setIsVertical(pathname === '/');
  }, [pathname === '/']);

  return (
    <Nav isVertical={isVertical}>
      <List isVertical={isVertical}>
        {routes.map(({ path, key }) => (
          <ListItem key={key} isVertical={isVertical}>
            <Link to={path}>{key}</Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
};

const Nav = styled.nav``;

const List = styled.ul.attrs(({ isVertical }) => ({
  style: {
    transform: isVertical ? 'translate(calc(50%), 0) rotate(90deg)' : 'translate(0, 0) rotate(0)'
  }
}))`
  display: flex;
  justify-content: space-around;
  transform-origin: 100px 100px;
  transition: transform 1s linear;
  transform: translate(0, 0) rotate(0);

  list-style: none;
`;

const ListItem = styled.li.attrs(({ isVertical }) => ({
  style: {
    transform: isVertical ? 'rotate(-90deg)' : 'rotate(0)'
  }
}))`
  transition: transform 1s linear;
  transform: rotate(0);

  & a {
    padding: 2em;
    background-color: #DEF;
    text-decoration: none;
  }
`;

export default Navbar;
