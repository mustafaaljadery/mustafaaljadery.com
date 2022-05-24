import Image from 'next/image';
import React from 'react';
import { Header } from '../Header';
import { MetaProps } from '../../types/layout';
import Head from './Head';

type Props = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://www.mustafaaljadery.com';

const EssayLayout = ({
  children,
  customMeta,
}: Props): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <Header />
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>

      <div>
        <p>Hello World</p>
      </div>
    </>
  );
};

export default EssayLayout;
