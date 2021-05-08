import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ActivityIndicator from '../components/ActivityIndicator';
import Gate from '../components/Gate';

const About = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Suspense fallback={() => <ActivityIndicator />}>
        <h1>About</h1>
      </Suspense>
    </Gate>
    <Footer />
  </Layout>
);

export default About;
