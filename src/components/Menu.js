import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  grid-area: nav;
  font-size: ${({ isVertical }) => isVertical ? '3rem' : '1.5rem'};
  height: 100%;
  
  &>ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ isVertical }) => isVertical ? 'column' : 'row'};
    justify-content: space-evenly;
    align-items: ${({ isVertical }) => isVertical ? 'center' : 'flex-start'};
    list-style: none;

  }

  &>ul>li{
    padding: 0.2em;
    border: 0.2em solid rgba(0,0,0,0);
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
    padding: 0.2em 1em;
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

  useEffect(() => {
    setIsVertical(pathname === '/');
  }, [pathname]);

  return (
    <StyledMenu isVertical={isVertical}>
      <ul>
        {routes.map(({ path, key }) => (
          <li key={key}>
            <Link to={path}>{key}</Link>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

export default Menu;
