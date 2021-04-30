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

const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

const ListItem = styled.li.attrs(({ isVertical }) => ({
  style: {
  }
}))`
  & a {
    padding: 2em;
    background-color: #DEF;
    text-decoration: none;
  }
`;

const List = styled.ul.attrs(({ isVertical }) => ({
  style: {
    animationName: isVertical ? 'rotate-vertical' : 'rotate-horizontal'
  }
}))`
  @keyframes rotate-vertical {
    from {
      transform: translate(0, 0) rotate(0);
    }
    to {
      transform: translate(50%, 0) rotate(90deg);
    }
  }

  @keyframes rotate-horizontal {
    from {
      transform: translate(50%, 0) rotate(90deg);
    }
    to {
      transform: translate(0, 0) rotate(0);
    }
  }

  animation-duration: 1s;
  animation-direction: alternate;
  animation-fill-mode: forwards;

  display: flex;
  justify-content: space-around;
  transform-origin: 0 0;

  list-style: none;
`;

export default Navbar;
