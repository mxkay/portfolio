import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';

const NotFoundPage = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </Gate>
    <Footer />
  </Layout>
);

export default NotFoundPage;
