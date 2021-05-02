import styled from 'styled-components';

const StyledGate = styled.div`
  font-size: 3rem;
  grid-area: main;
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  &>div {
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: both;

    :nth-child(1) {
      position: absolute;
      width: 100%;
      height: 100%;

      @keyframes open-clip {
        0% { clip-path: inset(0 100%); }
        100% { clip-path: inset(0 -2em); }
      }

      animation-name: open-clip;
    }
      
    :nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      border-left: 4px solid #DEF;
      border-right: 4px solid #456;
      filter: blur(1.5px);

      @keyframes open-width {
        0% {
          left: 50%;
          width: 0;
        }
        100% {
          left: -1em;
          width: calc(100% + 2em);
        }
      }

      animation-name: open-width;
    }
  }
`;

const Gate = ({ children }) => (
  <StyledGate>
    <div>
      {children}
    </div>
    <div />
  </StyledGate>
);

export default Gate;
