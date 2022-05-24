import type { NextPage } from 'next';
import Footer from '../components/Footer';
import { HomepageHeader } from '../components/Header';
import InitialScreen from '../components/Homepage/InitialScreen';
import AboutMe from '../components/Homepage/AboutMe';
import Essays from '../components/Homepage/Essays';
import { getAllPosts } from '../lib/api';
import { GetStaticProps } from 'next';
import { EssayType } from '../types/essay';

type IndexProps = {
  essays: EssayType[];
};

const Home: NextPage<IndexProps> = ({ essays }) => {
  return (
    <>
      <HomepageHeader />
      <InitialScreen />
      <AboutMe />
      <Essays essays={essays} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const essays = getAllPosts(['title', 'slug']);
  return {
    props: { essays },
  };
};

export default Home;
