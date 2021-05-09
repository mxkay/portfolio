
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';
import Container from '../components/Container';
import CopyToClipboard from '../components/CopyToClipboard';

const Contact = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Container scroll backdrop cover center style={{ fontSize: '1.5em' }} >
        <h1>Email</h1>
        <CopyToClipboard text='me@mathilda.dev' ariaLabel='copy email address to clipboard' />
      </Container>
    </Gate>
    <Footer />
  </Layout>
);

export default Contact;
