import type { NextPage } from 'next';
import Link from 'next/link';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/api';
import { EssayType } from '../../types/essay';
import { longDate } from '../../utils/dateParse';

type IndexProps = {
  essays: EssayType[];
};

const Essays: NextPage<IndexProps> = ({ essays }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="w-10/12 flex flex-col justify-center items-center">
          <h1 className="text-5xl mt-12 font-bold text-center">
            DÉFILEMENT ET VERROUILLAGE
          </h1>
          <h2 className="text-center mt-5 text-lg font-light">
            A library dedicated to technology, design, and startups.{' '}
          </h2>
          <hr className="h-px w-full bg-black mt-10" />
          <p className="w-full text-left font-black text-xs mt-8">
            BLOG
          </p>
          <h3 className="font-light w-full text-left text-4xl mt-0.5">
            Index
          </h3>
          <div className="flex flex-col mt-4 mb-32 space-y-12 w-11/12 xl:w-2/3 space-y-12">
            {essays?.slice(0, 6).map((essay, i, { length }) => {
              if (i + 1 === length) {
                return (
                  <>
                    <article key={essay.slug} className="">
                      <div className="flex flex-row space-x-8">
                        <div className="w-1/3">
                          <img
                            src="/images/test.png"
                            className="w-auto"
                          />
                        </div>
                        <div className="flex flex-col space-y-1.5 w-2/3 my-auto">
                          <Link href={`/essays/${essay.slug}`}>
                            <a className="font-semibold text-[#404040] text-2xl hover:underline hover:italic hover:underline-offset-2">
                              {essay.title}
                            </a>
                          </Link>
                          <p className="font-medium text-[#C6C6C6] text-sm">
                            {longDate(essay.date).toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 mt-8 flex flex-row">
                        <h2 className="font-black w-2/12 text-right mr-6">
                          ABSTRACT
                        </h2>
                        <p className="w-10/12 font-light">
                          {essay.abstract}
                        </p>
                      </div>
                      <Link href={`/essays/${essay.slug}`}>
                        <a className="font-medium justify-end items-center flex flex-row space-x-1 text-lg hover:italic">
                          <span className="underline underline-offset-2">
                            Read
                          </span>
                          <span className="">→</span>
                        </a>
                      </Link>
                    </article>
                  </>
                );
              }
              return (
                <>
                  <article key={essay.slug} className="">
                    <div className="flex flex-row space-x-8">
                      <div className="w-1/3">
                        <img
                          src="/images/test.png"
                          className="w-auto"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5 w-2/3 my-auto ">
                        <Link href={`/essays/${essay.slug}`}>
                          <a className="font-semibold text-[#404040] text-2xl hover:underline hover:italic hover:underline-offset-2">
                            {essay.title}
                          </a>
                        </Link>
                        <p className="font-medium text-[#C6C6C6] text-sm">
                          {longDate(essay.date).toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 mt-8 flex flex-row">
                      <h2 className="font-black w-2/12 text-right mr-6">
                        ABSTRACT
                      </h2>
                      <p className="w-10/12 font-light">
                        {essay.abstract}
                      </p>
                    </div>
                    <Link href={`/essays/${essay.slug}`}>
                      <a className="font-medium justify-end items-center flex flex-row space-x-1 text-lg hover:italic">
                        <span className="underline underline-offset-2">
                          Read
                        </span>
                        <span className="">→</span>
                      </a>
                    </Link>
                  </article>
                  <hr className="h-px" />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

// NextJs will pre-render this page at build time using the props returned by the getStatic Props function.
export const getStaticProps: GetStaticProps = async () => {
  const essays = getAllPosts([
    'date',
    'abstract',
    'slug',
    'title',
    'keywords',
    'length',
  ]);
  return {
    props: { essays },
  };
};

export default Essays;
