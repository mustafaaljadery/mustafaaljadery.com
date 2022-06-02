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
        <main className="w-10/12">
          <p className="font-black text-xs mt-8 text-[#434343]">
            {customMeta?.keywords?.toUpperCase()}
          </p>
          <h1 className="text-center text-5xl font-medium mt-8">
            {customMeta?.title}
          </h1>
          <p className="text-center font-light text-xl mt-4">
            BY MUSTAFA ALJADERY
          </p>
          <div className="flex flex-row justify-center items-center mt-2 space-x-1 font-bold text-xs">
            <Image
              className="my-auto"
              src="/clock.svg"
              width={12}
              height={12}
            />
            <p className="my-auto">{longDate(customMeta?.date)}</p>{' '}
            <span className="my-auto text-lg">&#183;</span>{' '}
            <p className="my-auto text-[#8c8c92]">
              {customMeta?.length}
            </p>
          </div>
          <div className="flex flex-row mt-6">
            <div className="w-2/3 flex flex-row my-auto">
              <p className="w-1/4 text-right mr-5 mt-1 text-sm font-black">
                ABSTRACT
              </p>
              <p className="w-3/4 mr-16 font-light px-5">
                {customMeta?.abstract}
              </p>
            </div>
            <img
              className="w-1/3"
              alt={`${customMeta?.title} Background Image`}
              src={customMeta?.image}
            />
          </div>
          <hr className="h-px mt-8" />
          <div className="flex flex-col justify-center items-center">
            <div className="ml-10 w-2/3 mt-12 mb-32">{children}</div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default EssayLayout;
