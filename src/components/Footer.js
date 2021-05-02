import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Emoji from './Emoji';

const StyledFoooter = styled.footer`
  grid-area: footer;
  font-size: ${({ windowWidth }) => windowWidth < 600 ? '1.5rem' : windowWidth < 900 ? '2.5rem' : '1.5rem'};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "left center right";

  &>* {
    align-self: flex-start;
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
`;

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledFoooter windowWidth={width}>
      <Link to='/credit' className='left'>
        <Emoji symbol='🌈🧾 ' />
        <span className={width < 1000 ? 'sr-only' : ''}>Learn about the art on this site</span>
      </Link>
      <Link to='/coco' className='right'>
        <span className={width < 1000 ? 'sr-only' : ''}>Buy me a cup of coco</span>
        <Emoji symbol=' 💵☕' />
      </Link>
      <Link to='/developer' className='center'>
        <Emoji symbol='🔒' />
        <span className='sr-only'>Developer login</span>
      </Link>
    </StyledFoooter>
  );
};

export default Footer;
