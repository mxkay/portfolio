import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Landing = () => (
  <Layout>
    <Intro />
    <Menu vertical />
    <Footer />
  </Layout>
);

export default Landing;
