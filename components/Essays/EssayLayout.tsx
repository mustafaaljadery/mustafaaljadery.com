import Image from 'next/image';
import React from 'react';
import { Header } from '../Header';
import { MetaProps } from '../../types/layout';
import Head from './Head';
import { longDate } from '../../utils/dateParse';
import Footer from '../../components/Footer';
import { EssayType } from '../../types/essay';

type Props = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  moreEssays?: EssayType[];
};

export const WEBSITE_HOST_URL = 'https://www.mustafaaljadery.com';

const EssayLayout = ({
  children,
  customMeta,
  moreEssays,
}: Props): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      <div className="flex flex-col justify-center items-center">
        <main className="w-11/12 md:w-10/12">
          <p className="font-black text-xs mt-4 md:mt-8 text-[#434343]">
            {customMeta?.keywords?.toUpperCase()}
          </p>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium mt-4 md:mt-8">
            {customMeta?.title}
          </h1>
          <p className="text-center font-light text-base sm:text-lg md:text-xl mt-2 md:mt-4">
            BY MUSTAFA ALJADERY
          </p>
          <div className="flex flex-row justify-center items-center mt-2 space-x-1 font-bold text-[10px] md:text-xs">
            <img
              className="my-auto h-[8px] w-[8px] md:w-[12px] md:h-[12px]"
              src="/clock.svg"
            />
            <p className="my-auto">{longDate(customMeta?.date)}</p>{' '}
            <span className="my-auto text-lg">&#183;</span>{' '}
            <p className="my-auto text-[#8c8c92]">
              {customMeta?.length}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-6">
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row my-auto">
              <p className="w-full lg:w-1/4 text-left lg:text-right mr-5 mt-1 text-sm font-black">
                ABSTRACT
              </p>
              <p className="w-full mt-2 lg:mt-0 lg:mr-16 font-light lg:px-5">
                {customMeta?.abstract}
              </p>
            </div>
            <img
              className="mt-4 lg:mt-0 w-full lg:w-1/3"
              alt={`${customMeta?.title} Background Image`}
              src={customMeta?.image}
            />
          </div>
          <hr className="h-px mt-8" />
          <div className="flex flex-col justify-center items-center">
            <div className="w-full ml-10 lg:w-4/5 xl:w-2/3 mt-12 mb-32">
              {children}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default EssayLayout;
