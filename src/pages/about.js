import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Gate from '../components/Gate';
import Container from '../components/Container';

const About = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Container scroll cover background='linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.7) 90%, transparent 100%);' >
        <h1>About me:</h1>
        <h2>Fullstack software engineer</h2>
        <p>With experience across in a wide variety of languages and frameworks.</p>
        <p>Enjoys building applications that are accessibly, robust, operable, and performant.</p>
        <h2>Avid learner & passionate educator</h2>
        <p>Always looking to improve my skills and tap into the most modern technologies.</p>
        <p>Teaching what I know to the next generation of software engineers.</p>
        <h2>Lover of math, maker of art</h2>
        <p>Visual artist specializing in the application of mathematics to create stunning works.</p>
        <p>Carrying my passion for math and art into everything I do to find elegant solutions to complex problems.</p>
        <h2>Community oriented</h2>
        <p>Passionate about volunteering, community organizing, and human rights advocacy.</p>
        <p>Ask me about my side projects.</p>
      </Container>
    </Gate>
    <Footer />
  </Layout>
);

export default About;
