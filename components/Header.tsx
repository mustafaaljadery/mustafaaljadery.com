import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomepageHeader = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex flex-col bg-white justify-center items-center w-full py-[21px] md:sticky top-0">
      <div className="flex flex-col md:flex-row md:justify-end md:items-end w-11/12 md:w-10/12 md:-mt-1.5">
        <div className="flex flex-col md:flex-row my-auto space-y-1 md:space-y-0 md:space-x-10 text-sm">
          <Link href="/">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/tools">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/tools'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Tools
            </a>
          </Link>
          <Link href="/essays">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/essays'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Essays
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="flex flex-col bg-white justify-center items-center w-full py-4 md:sticky top-0">
      <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-between w-10/12">
        <Link href="/">
          <a className="h-[30px] flex flex-row text-sm md:text-base space-x-2 md:space-x-5">
            <img
              src="/logo.svg"
              className="my-auto h-[20px] md:h-[30px] w-[20px] md:w-[30px]"
            />
            <p className="font-black my-auto text-xs md:text-sm">
              MUSTAFA ALJADERY
            </p>
          </a>
        </Link>
        <div className="flex flex-col md:flex-row my-auto space-y-1 md:space-y-0 md:space-x-10 text-sm">
          <Link href="/">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/tools">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/tools'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Tools
            </a>
          </Link>
          <Link href="/essays">
            <a
              className={`font-regular text-[#9D9D9D] hover:underline hover:underline-offset-1  ${
                pathname === '/essays'
                  ? 'italic underline underline-offset-1 text-[#535353]'
                  : ''
              }`}
            >
              Essays
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
