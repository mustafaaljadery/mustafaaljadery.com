import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center py-36">
      <div className="w-10/12 flex flex-row">
        <div className="w-2/5 ml-32 flex flex-col space-y-12 my-auto">
          <p className="font-semibold">
            I’m a human interface designer and software engineer from
            California. I mainly work on front-end and back-end
            systems.
          </p>
          <p className="font-semibold">
            My interests are predicated around transformational
            technologies that return outsize{' '}
            <span className="font-bold">BENEFIT</span> to humanity. I
            write about transformational ideas in the narrative of
            case studies and research studies{' '}
            <Link href="/essays">
              <a className="underline font-bold underline-offset-2 hover:italic">
                here
              </a>
            </Link>
            .
          </p>
          <p className="font-semibold">
            Most strongly proficient in typescript, python, and C++.
            Advanced calculus and linear algebra enthusiast.{' '}
          </p>
        </div>
        <div className="w-3/5 flex flex-col justify-end items-end">
          <img src="/mustafa.png" className="w-1/4 mr-32" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
