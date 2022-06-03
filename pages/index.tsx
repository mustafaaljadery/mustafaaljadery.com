import type { NextPage } from 'next';
import Footer from '../components/Footer';
import { HomepageHeader } from '../components/Header';
import InitialScreen from '../components/Homepage/InitialScreen';
import AboutMe from '../components/Homepage/AboutMe';
import Essays from '../components/Homepage/Essays';
import { getAllPosts } from '../lib/api';
import { GetStaticProps } from 'next';
import { EssayType } from '../types/essay';
import Projects from '../components/Homepage/Projects';
import Head from 'next/head';

type IndexProps = {
  essays: EssayType[];
};

const Home: NextPage<IndexProps> = ({ essays }) => {
  return (
    <>
      <Head>
        <title>Mustafa Aljadery&apos;s Personal Website</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <HomepageHeader />
      <InitialScreen />
      <AboutMe />
      <Essays essays={essays} />
      <Projects />
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
