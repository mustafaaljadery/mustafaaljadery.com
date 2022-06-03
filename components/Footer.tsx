import Link from 'next/link';
import data from '../data/footerData.json';

const underlineAnimation: string =
  'ml-auto inline-block relative no-underline px-[2px] after:absolute after:w-[100%] after:h-[1px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100';

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-10/12 flex flex-col-reverse md:flex-row justify-between items-between mt-10">
        <div className="flex flex-col space-y-6">
          <Link href={`mailto:${data.email}`}>
            <a className="text-white font-medium underline underline-offset-8 decoration-[#D4D4D4] decoration-1">
              mustafa@mustafaaljadery.com
            </a>
          </Link>
          <p className="text-white font-light text-sm">
            © Mustafa Aljadery 2022. All rights reserved.
          </p>
        </div>
        <div className="my-auto mb-4 md:mb-0 flex flex-row justify-around items-between md:justify-start md:items-start md:space-x-10 text-white font-medium">
          <Link href={data.twitter}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`md:${underlineAnimation}`}
            >
              Twitter
            </a>
          </Link>
          <Link href={data.linkedin}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`md:${underlineAnimation}`}
            >
              Linkedin
            </a>
          </Link>
          <Link href={data.github}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`md:${underlineAnimation}`}
            >
              {' '}
              Github
            </a>
          </Link>
        </div>
      </div>
      <p className="mt-5 md:mt-10 text-white mb-10 text-sm md:text-base text-center md:text-left font-regular w-11/12 md:w-auto">
        Everything on this site is designed and built with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        by Mustafa Aljadery.
      </p>
    </footer>
  );
};

export default Footer;
