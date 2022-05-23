import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Image src="" />
      <div className="flex flex-row space-x-5">
        <Link></Link>
      </div>
    </div>
  );
};

export default Header;
