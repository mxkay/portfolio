import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styled from 'styled-components';

const Background = props => {
  const { height, width } = useWindowDimensions();
  const [canvasSize, setCanvasSize] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvasSize, canvasSize);

    // http://jsfiddle.net/m1erickson/8j6kdf4o/
    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, rot = Math.PI / 4) => {
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'blue';
      ctx.stroke();
      ctx.fillStyle = 'skyblue';
      ctx.fill();
    };

    ctx.globalCompositeOperation = 'source-over';
    for (let i = 0; i < 64; i++) {
      const distance = Math.random();
      setTimeout(() => {
        ctx.filter = `blur(${1 + distance}px)`;
        drawStar(Math.random() * canvasSize, Math.random() * canvasSize, 4, 2, (1 - distance) * 10 + 3);
      }, distance * 5000);
    }
  }, [canvasSize]);

  useEffect(() => {
    setCanvasSize(200 * Math.ceil((height > width ? height : width) / 200));
  }, [width, height]);

  return (
    <Wrapper>
      <CanvasWrapper>
        <Canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
      </CanvasWrapper>
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
  overflow: hidden;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
  background-color: midnightblue;
  background: radial-gradient(ellipse at center, darkblue 0%, midnightblue 100%);
  filter: brightness(30%);
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-${({ width }) => width / 2}px, -${({ height }) => height / 2}px);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Background;
