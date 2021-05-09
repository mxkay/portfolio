import styled from 'styled-components';

const StyledContainer = styled.div`
  ${({ cover }) => cover && 'width: 100%; height: 100%;'}
  background: ${({ backdrop }) => backdrop && 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0.6) 80%, transparent 100%)'};
  color: ${({ color }) => color};
  padding: 1em;
  line-height: 1.8em;
  
  ${({ scroll }) => scroll && `
    overflow-y: auto;

    /* width */
    &::-webkit-scrollbar {
      position: absolute;
      left: 0;
      width: 0.5em;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: none;
      overflow: visible;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #374553;
      border-radius: 0.25em;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #DEF;
    }
  `}
`;

const Container = (props) => (
  <StyledContainer {...props}>
    <div>
      {props.children}
    </div>
  </StyledContainer>
)

export default Container;