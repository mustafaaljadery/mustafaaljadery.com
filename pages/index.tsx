import type { NextPage } from 'next';
import Footer from '../components/Footer';
import InitialScreen from '../components/Homepage/InitialScreen';

const Home: NextPage = () => {
  return (
    <div>
      <InitialScreen />
      <Footer />
    </div>
  );
};

export default Home;
