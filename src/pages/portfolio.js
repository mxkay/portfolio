import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ActivityIndicator from '../components/ActivityIndicator';
import Gate from '../components/Gate';

const Portfolio = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Suspense fallback={() => <ActivityIndicator />}>
        <h1>Portfolio</h1>
      </Suspense>
    </Gate>
    <Footer />
  </Layout>
);

export default Portfolio;
