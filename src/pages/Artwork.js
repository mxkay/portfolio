import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';

const Artwork = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <h1>Artwork</h1>
      <p>In order to create the moving background on this website, I modified artwork from content creators listed here.</p>
      <br />
      <ul>
        <li>
          <a href='https://www.instagram.com/bryangoffphoto/' target='_blank' rel='noreferrer'>Bian Goff</a>
        </li>
      </ul>
    </Gate>
    <Footer />
  </Layout>
);

export default Artwork;
