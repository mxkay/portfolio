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
      <Container scroll backdrop cover >
        <h1>About me</h1>
        <h2>Fullstack software engineer</h2>
        <p>Enjoys building applications that are accessible, robust, and performant.</p>
        
        <div style={{ padding: '1em 1em 0 2em' }}>
          <h3>Web and mobile applications</h3>
          <p>Makes big idea come to life, using modern frameworks like React or React Native.</p>
          <h3>Backend solutions</h3>
          <p>Builds performant APIs that make sense and get the job done.</p>
          <p>Skilled with both SQL and no-SQL databases.</p>
        </div>
        <h2>Educator</h2>
        <p>Enjoys teaching others how to write code, solve algorithms, and build applications.</p>
        <p>
          Delivering
          {' '}
          <a
            href='https://generalassemb.ly/education/software-engineering-immersive-remote'
            target='_blank'
            rel="noreferrer"
          >
            General Assembly's Software Engineering Immersive Remote course
          </a>.
        </p>
        <h2>Lover of math, maker of art</h2>
        <p>Visual artist specializing in the application of mathematics to create stunning works.</p>
        <p>Carrying my passion for math and art into everything I do to find elegant solutions to complex problems.</p>
        <h2>Community oriented</h2>
        <p>Passionate about non-profit work, community organizing, and human rights advocacy.</p>
        <p>Ask me about my side projects.</p>
      </Container>
    </Gate>
    <Footer />
  </Layout>
);

export default About;
