import type { NextPage } from 'next';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/api';
import { EssayType } from '../../types/essay';

type IndexProps = {
  essays: EssayType[];
};

const Essays: NextPage<IndexProps> = ({ essays }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="w-10/12">
          <h1 className="text-4xl mt-8 font-bold text-center">
            DÉFILEMENT ET VERROUILLAGE
          </h1>
          <h2 className="text-center mt-2 text-base font-light">
            A library dedicated to technology, design, and startups.{' '}
          </h2>
          <hr className="h-px bg-black mt-8" />
          <p className="text-left font-black text-xs mt-8">BLOG</p>
          <h3 className="font-light text-left text-4xl mt-0.5">
            Index
          </h3>
          <div className="flex flex-col space-y-5">
            {essays.map((essay) => {
              return (
                <article>
                  <p>{essay.title}</p>
                  <p>{essay.slug}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

// NextJs will pre-render this page at build time using the props returned by the getStatic Props function.
export const getStaticProps: GetStaticProps = async () => {
  const essays = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
  ]);
  return {
    props: { essays },
  };
};

export default Essays;
