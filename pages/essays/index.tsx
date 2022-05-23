import type { NextPage } from 'next';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';

const Essays: NextPage = () => {
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
        </div>
      </div>
    </>
  );
};

export default Essays;
