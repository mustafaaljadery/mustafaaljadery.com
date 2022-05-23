import type { NextPage } from 'next';
import Footer from '../components/Footer';
import { HomepageHeader } from '../components/Header';
import InitialScreen from '../components/Homepage/InitialScreen';
import AboutMe from '../components/Homepage/AboutMe';
import Essays from '../components/Homepage/Essays';

const Home: NextPage = () => {
  return (
    <>
      <HomepageHeader />
      <InitialScreen />
      <AboutMe />
      <Essays />
      <Footer />
    </>
  );
};

export default Home;
