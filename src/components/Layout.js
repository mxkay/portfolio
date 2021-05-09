import styled from 'styled-components';

const Layout = styled.div`
  margin: 0 auto;
  padding: 0 5%;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 2fr 8fr 2fr;
  grid-template-areas:
    'header nav'
    'main main'
    'footer footer';
  justify-content: center;
  align-items: center;
`;

export default Layout;
