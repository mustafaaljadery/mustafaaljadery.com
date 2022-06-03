import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center xl:py-36">
      <div className="w-10/12 flex flex-row justify-center items-center">
        <div className="w-full md:w-4/5 lg:w-7/10 xl:w-2/5 xl:ml-32 flex flex-col space-y-12 my-auto">
          <p className="font-semibold text-sm sm:text-base">
            I’m a human interface designer and software engineer from
            California. I mainly work on front-end and back-end
            systems.
          </p>
          <p className="font-semibold text-sm sm:text-base">
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
          <p className="font-semibold text-sm sm:text-base">
            Most strongly proficient in typescript, python, and C++.
            Advanced calculus and linear algebra enthusiast.{' '}
          </p>
        </div>
        <div className="hidden w-3/5 xl:flex flex-col justify-end items-end">
          <img src="/mustafa.png" className="w-1/4 mr-32 my-auto" />
        </div>
      </div>
      <div className="w-10/12 flex flex-col justify-center items-center mt-24">
        <div className="w-full md:w-4/5 lg:w-7/10 xl:w-3/5 flex flex-col justify-between items-between">
          <h2 className="text-left w-full text-2xl md:text-3xl font-bold">
            Skills
          </h2>
          <div className="flex flex-row space-x-7 md:space-x-32 mt-3">
            <div className="flex-1 flex-col space-y-2 text-sm sm:text-base md:text-lg font-light">
              <p>Product Design</p>
              <p>Front-End Web Engineering</p>
              <p>Back-End and API Engineering</p>
              <p>Data Mining</p>
            </div>
            <div className="flex-1 flex flex-col space-y-2 text-sm sm:text-base md:text-lg font-light">
              <p>Data Analysis</p>
              <p>A/B Growth Testing</p>
              <p>Survey/Testing Management</p>
              <p>Brand Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
