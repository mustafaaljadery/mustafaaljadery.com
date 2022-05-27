import Link from 'next/link';
import Image from 'next/image';
import { HomepageHeader } from '../Header';
import data from '../../data/homeData.json';

const underlineAnimation: string =
  'ml-auto inline-block relative no-underline px-[2px] after:absolute after:w-[100%] after:h-[1px] after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100';

const InitialScreen = () => {
  return (
    <div className="flex flex-col h-[95vh] items-center">
      <div className="my-auto flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-row space-x-9">
          <Image src="/logo.svg" width={50} height={50} />
          <h1 className="font-bold text-5xl">Mustafa Aljadery</h1>
        </div>
        <div className="flex flex-row space-x-10 font-medium">
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
          <Link href={`mailto:${data.email}`}>
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
            <Image src="/arrow.svg" width={15} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialScreen;
