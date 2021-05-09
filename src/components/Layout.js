import styled from 'styled-components';

const Layout = styled.div`
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr 1fr;
  grid-template-areas:
    'header'
    'nav'
    '${({ children }) => children.length <= 3 ? 'nav' : 'main'}'
    'footer';
  justify-content: center;
  align-items: center;
`;

export default Layout;
