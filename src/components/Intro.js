import styled from 'styled-components';

const StyledIntro = styled.h1`
  &>span {
    @keyframes shimmer {
      from { filter: brightness(100%); }
      to { filter: brightness(0%); }
    }
    animation-name: shimmer;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-direction: normal;

    &:nth-child(1) { animation-delay: 2.0s; }
    &:nth-child(2) { animation-delay: 2.1s; }
    &:nth-child(3) { animation-delay: 2.2s; }
    &:nth-child(4) { animation-delay: 2.3s; }
  }
`;

const Intro = () => (
  <StyledIntro>
    Hi, I'm <span>M</span><span>a</span><span>t</span><span>h</span>ilda
  </StyledIntro>
);

export default Intro;
