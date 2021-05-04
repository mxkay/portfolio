import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styled from 'styled-components';

const DELTA_TIME = 1000;

const StyledBackground = styled.div.attrs(({ offsetX, offsetY }) => ({
  style: {
    backgroundPosition: `${offsetX} ${offsetY}`
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
  width: 100%;
  height: 100%;
  filter: brightness(25%);
  background-image: url(https://res.cloudinary.com/dzwu8mhc1/image/upload/v1619937417/orion-nebula_tile_3000_h7ddhz.png);
  transition: all ${DELTA_TIME / 1000}s linear;
`;

const Background = props => {
  const { width, height } = useWindowDimensions();
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const backgroundVelocityRef = useRef();

  useEffect(() => {
    const speed = 0.00005 * Math.min(width, height) * (Math.random() < 0.5 ? 1 : -1);
    const angle = Math.PI / 3 * (Math.random() - 0.5);
    backgroundVelocityRef.current = {
      x: speed * Math.cos(angle),
      y: speed * Math.sin(angle)
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        setBackgroundPosition(prevPosition => ({
          x: prevPosition.x + DELTA_TIME * backgroundVelocityRef.current.x,
          y: prevPosition.y + DELTA_TIME * backgroundVelocityRef.current.y
        }));
      }
    }, DELTA_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBackground
      {...props}
      offsetX={`${backgroundPosition.x}px`}
      offsetY={`${backgroundPosition.y}px`}
    />
  );
};

export default Background;
