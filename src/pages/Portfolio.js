import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';

const Portfolio = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <h1>Portfolio coming soon</h1>
    </Gate>
    <Footer />
  </Layout>
);

export default Portfolio;
