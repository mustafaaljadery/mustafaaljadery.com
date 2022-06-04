import Link from 'next/link';
import Image from 'next/image';
import { HomepageHeader } from '../Header';
import data from '../../data/homeData.json';

const underlineAnimation: string =
  'ml-auto inline-block relative no-underline px-[2px] after:absolute after:w-[100%] after:h-[1px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100';

const InitialScreen = () => {
  return (
    <div className="flex flex-col h-[95vh] items-center -mt-12 md:mt-0">
      <div className="my-auto flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-row space-x-5 md:space-x-9">
          <img
            className="h-[40px] w-[40px] sm:h-[42px] sm:w-[42px] md:w-[50px] md:h-[50px]"
            src="/logo.svg"
          />
          <h1 className="font-bold text-3xl sm:text-4xl my-auto md:text-5xl">
            Mustafa Aljadery
          </h1>
        </div>
        <div className="flex flex-row space-x-5 sm:space-x-7 md:space-x-10 text-sm sm:text-base font-medium">
          <Link href={data.twitter}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={`hover:font-bold ${underlineAnimation}`}
            >
              Twitter
            </a>
          </Link>
          <Link href={data.linkedin}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={`hover:font-bold ${underlineAnimation}`}
            >
              Linkedin
            </a>
          </Link>
          <Link href={data.github}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={`hover:font-bold ${underlineAnimation}`}
            >
              Github
            </a>
          </Link>
          <Link href={`mailto:mustafa@mustafaaljadery.com`}>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={`hover:font-bold ${underlineAnimation}`}
            >
              Email
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-bold text-[#7C7C7C]">Scroll.</p>
          <div className="mt-2 flex flex-col justify-center items-center">
            <img
              src="/arrow.svg"
              className="w-[12px] h-[32px] md:w-[15px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
