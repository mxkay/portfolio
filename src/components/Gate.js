import styled from 'styled-components';

const StyledGate = styled.div`
  font-size: 3rem;
  grid-area: main;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  &>div {
    animation-duration: ${({ animate }) => animate ? '0.5s' : '0'};
    animation-delay: ${({ animate }) => animate ? '0.2s' : '0'};
    animation-timing-function: ease-out;
    animation-fill-mode: both;

    :nth-child(1) {
      position: absolute;
      width: 100%;
      height: 100%;

      @keyframes open-clip {
        0% { clip-path: inset(50% 50%); }
        50% { clip-path: inset(0 50%); }
        100% { clip-path: inset(0 -40px); }
      }

      animation-name: open-clip;
    }
      
    :nth-child(2) {
      position: absolute;
      border-left: 4px solid #DEF;
      border-right: 4px solid #456;
      filter: blur(1.5px);

      @keyframes open-width {
        0% {
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
        }
        50% {
          top: 0;
          left: 50%;
          width: 0;
          height: 100%;
        }
        100% {
          top: 0;
          left: -40px;
          width: calc(100% + 80px);
          height: 100%;
        }
      }

      animation-name: open-width;
    }
  }
`;

const Gate = ({ children, animate = true }) => (
  <StyledGate animate={animate}>
    <div>
      {children}
    </div>
    <div />
  </StyledGate>
);

export default Gate;
