import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../router/routes';

const StyledMenu = styled.nav`
  grid-area: nav;
  font-size: ${({ vertical }) => vertical ? '3rem' : '1.5rem'};
  height: 100%;
  
  &>ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

    &>li {
      padding: 0.2em;
      border: 0.2em solid rgba(0,0,0,0);
      border-left: none;
      border-right: none;
      transform: skewX(20deg);
      
      &:focus-within, &:hover {
        transition: border-color 0.2s linear, transform 0.2s linear;
        transform: skewX(-20deg);
        border-color: #DEF #456 #456 #DEF;
      }
      
      &>a {
        display: block;
        align-items: center;
        padding: 0.2em 1em;
        text-decoration: none;
        font-weight: bold;
        outline: none;
        
        transform: skewX(-20deg);
      }
      
      &:focus-within>a, &:hover>a {
        transition: transform 0.2s linear;
        transform: skewX(20deg);
        border-color: #DEF #456 #456 #DEF;
      }
    }
  }
  `;

const Menu = ({ vertical }) => (
  <StyledMenu vertical={vertical}>
    <ul>
      {routes.filter(({key}) => key).map(({ path, key }) => (
        <li key={key}>
          <Link to={path}>{key}</Link>
        </li>
      ))}
    </ul>
  </StyledMenu>
);

export default Menu;
