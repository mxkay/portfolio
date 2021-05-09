import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';
import Container from '../components/Container';

const Contact = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Container scroll backdrop cover >
        <h1>Contact</h1>
      </Container>
    </Gate>
    <Footer />
  </Layout>
);

export default Contact;
