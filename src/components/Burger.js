import styled from 'styled-components';

const StyledBurger = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
  border: 0.2em solid rgba(0,0,0,0);
  background: transparent;
  z-index: 10;
  cursor: pointer;
  outline: none;
  
  :focus {
    border-radius: 0.2em;
    border-color: #DEF #456 #456 #DEF;
  }

  &>div {
    width: 1.8em;
    height: 1.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    &>div {
      position: relative;
      width: 2em;
      height: 0.2em;
      border-radius: 0.1em;
      transition: all 0.3s linear;
      background: #DEF;

      &:first-child {
        transform: ${({ open }) => open ? 'translateY(0.8em) rotate(45deg)' : 'rotate(0)'};
      }
      
      &:nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(-2em)' : 'translateX(0)'};
      }
      
      &:nth-child(3) {
        transform: ${({ open }) => open ? 'translateY(-0.8em) rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div>
        <div />
        <div />
        <div />
      </div>
    </StyledBurger>
  );
};

export default Burger;
