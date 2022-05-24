import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const HomepageHeader = () => {
  const { pathname } = useRouter();
  return (
    <header className="flex flex-col bg-white justify-center items-center w-full py-[21px] sticky top-0">
      <div className="flex flex-row justify-end items-end w-10/12">
        <div className="flex flex-row my-auto space-x-10 text-sm">
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
    <header className="flex flex-col bg-white justify-center items-center w-full py-4 sticky top-0">
      <div className="flex flex-row justify-between items-between w-10/12">
        <div className="h-[30px] flex flex-row space-x-5">
          <Image src="/logo.svg" width={30} height={30} />
          <p className="font-black my-auto text-sm">
            MUSTAFA ALJADERY
          </p>
        </div>
        <div className="flex flex-row my-auto space-x-10 text-sm">
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
