import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledActivityIndicator = styled.div`
  width: 10em;
  height: 10em;
  background-color: rgba(221, 238, 255, 0.5);
  border-radius: 50%;
  
  @keyframes grow {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }

  animation: grow 1.5s infinite normal ease-out;
`;

const ActivityIndicator = (props) => (
  <Wrapper>
    <StyledActivityIndicator {...props} />
  </Wrapper>
)

export default ActivityIndicator;