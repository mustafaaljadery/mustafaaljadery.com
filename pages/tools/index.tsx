import type { NextPage } from 'next';
import { Header } from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

const Tools: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tools by Mustafa Aljadery</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>

      <Header />
      <div className="flex flex-col justify-center items-center h-[95vh]">
        <p className="text-[#7C7C7C] font-semibold text-sm">
          End of the page.
        </p>
        <p className="text-[#C6C6C6] font-semibold text-sm">
          More tools may be coming soon.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Tools;
