import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import useMousePosition from '../hooks/useMousePosition';
import styled from 'styled-components';

const Background = props => {
  const { x, y } = useMousePosition();
  const { width, height } = useWindowDimensions();
  const [baseOffset, setBaseOffset] = useState({});

  useEffect(() => {
    setBaseOffset({ x: 50 + Math.random() * 40 - 20, y: 50 + Math.random() * 40 - 20 });
  }, []);

  return (
    <Wrapper>
      <CanvasWrapper
        offsetX={`calc(${baseOffset.x}% - ${50 * (x / width - 0.5)}px)`}
        offsetY={`calc(${baseOffset.y}% - ${50 * (y / height - 0.5)}px)`}
      />
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  background: radial-gradient(ellipse at center, midnightblue 0%, black 100%);
  overflow: clip;
`;

const CanvasWrapper = styled.div.attrs(({ offsetX, offsetY }) => ({
  style: {
    backgroundPosition: `${offsetX} ${offsetY}`
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 120vw;
  height: 120vh;
  filter: brightness(30%);
  background-image: url(https://apod.nasa.gov/apod/image/2103/NGC1499_Akar_3296.jpg);
  background-position:
    calc(${50 + Math.random() * 20 - 10}%)
    calc(${50 + Math.random() * 20 - 10}%);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export default Background;
