import { lazy, Suspense } from 'react';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ActivityIndicator from '../components/ActivityIndicator';
import Gate from '../components/Gate';

const Donate = () => (
  <Layout>
    <Intro />
    <Menu />
    <Gate>
      <Suspense fallback={() => <ActivityIndicator />}>
        <h1>Donate</h1>
        <p>That is very kind of you that you would like to help fund my endeavors. Unfortunately I have not set up this part of my application. Feel free to send me an email about how you can send me funds.</p>
      </Suspense>
    </Gate>
    <Footer />
  </Layout>
);

export default Donate;
