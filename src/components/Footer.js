import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Emoji from './Emoji';

const StyledFoooter = styled.footer`
  font-size: ${({ windowWidth }) => windowWidth < 600 ? '1.5rem' : windowWidth < 900 ? '2.5rem' : '1.5rem'};
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <StyledFoooter windowWidth={width}>
      <Link to='/credit'>
        <Emoji symbol='🌈🧾' />
        <span className={width < 900 ? 'sr-only' : ''}> Learn about the art on this site</span>
      </Link>
      <Link to='/coco'>
        <span className={width < 900 ? 'sr-only' : ''}>Buy me a cup of coco </span>
        <Emoji symbol='💵☕' />
      </Link>
    </StyledFoooter>
  );
};

export default Footer;
