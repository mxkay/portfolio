import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Emoji from './Emoji';

const StyledFoooter = styled.footer`
  grid-area: footer;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";
  
  &>* {
    align-self: flex-start;
    margin: auto 0;
  }

  &>.left {
    grid-area: left;
    justify-self: flex-start;
  }

  &>.center {
    grid-area: center;
    justify-self: center;
  }

  &>.right {
    grid-area: right;
    justify-self: flex-end;
  }

  a {
    text-decoration: none;
  }
`;

const Subtle = styled.div`
  filter: grayscale(100%) opacity(30%);

  :focus-within, :hover {
    filter: none;
  }
`;

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledFoooter windowWidth={width}>
      <Link to='/artwork' className='left'>
        <Emoji symbol='🌈🧾 ' />
        <span className={width < 1000 ? 'sr-only' : ''}>Learn about artwork on this site</span>
      </Link>
      <Link to='/donate' className='right'>
        <span className={width < 1000 ? 'sr-only' : ''}>Buy me a cup of coco</span>
        <Emoji symbol=' 💵☕' />
      </Link>
      <Subtle>
        <Link to='/developer' className='center'>
          <Emoji symbol='🔒' />
          <span className='sr-only'>Developer login</span>
        </Link>
      </Subtle>
    </StyledFoooter>
  );
};

export default Footer;
