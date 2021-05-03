import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import useAnimationFrame from '../hooks/useAnimationFrame';
import styled from 'styled-components';

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
  transition: all 1s;
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

  useAnimationFrame(deltaTime => {
    setBackgroundPosition(prevPosition => ({
      x: prevPosition.x + deltaTime * backgroundVelocityRef.current.x,
      y: prevPosition.y + deltaTime * backgroundVelocityRef.current.y
    }));
  });

  return (
    <StyledBackground
      {...props}
      offsetX={`${backgroundPosition.x}px`}
      offsetY={`${backgroundPosition.y}px`}
    />
  );
};

export default Background;
