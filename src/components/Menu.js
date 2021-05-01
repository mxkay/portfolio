import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  width: 100%;
  height: 100%;

  &>ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }

  &>ul>li{
    padding: 0.5em;
    border: 0.5em solid rgba(0,0,0,0);
    border-left: none;
    border-right: none;
    transform: skewX(20deg);
    
    &:focus-within {
      transition: border-color 0.2s linear, transform 0.2s linear;
      transform: skewX(-20deg);
      border-color: #DEF #456 #456 #DEF;
    }
  }

  &>ul>li>a {
    display: block;
    font-size: 3rem;
    padding: 0.2em 3em;
    text-decoration: none;
    font-weight: bold;
    color: white;
    outline: none;

    transform: skewX(-20deg);
    &:focus {
      transition: transform 0.2s linear;
      transform: skewX(20deg);
      border-color: #DEF #456 #456 #DEF;
    }
  }
`;

const Menu = ({ routes, open, setOpen }) => {
  const { pathname } = useLocation();
  const [isVertical, setIsVertical] = useState(pathname === '/');

  useEffect(async () => {
    setIsVertical(pathname === '/');
  }, [pathname]);

  return (
    <StyledMenu isVertical={isVertical}>
      <ul
        style={{
          flexDirection: isVertical ? 'column' : 'row',
          alignItems: isVertical ? 'center' : 'flex-start'
        }}
      >
        {routes.map(({ path, key }) => (
          <li
            key={key}
            isVertical={isVertical}
          >
            <Link to={path}>{key}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
