import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-10/12 my-10 mb-24">
        <h2 className="font-black text-lg my-10 text-[#555555] w-full text-center">
          PROJECTS
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#DDE4EC] w-2/3 h-[60vh] flex flex-row justify-between items-center px-24">
            <img src="/images/speed.png" className="h-3/4" />
            <img src="/images/security.png" className="h-3/4" />
          </div>
          <h3 className="mt-6 text-lg w-1/2 text-center font-bold text-[#7C7C7C]">
            Blockchain Research
          </h3>
          <p className="mt-2 text-lg w-1/2 text-center font-medium text-[#BABABA]">
            Analysis of blockchain security models, and proposal of a
            parallel system for executing smart contracts
            concurrently.{' '}
          </p>
          <div className="flex flex-row space-x-7 mt-3">
            <Link href="/papers/speed.pdf">
              <a className="hover:italic font-semibold underline underline-offset-2">
                Parallel Execution
              </a>
            </Link>
            <Link href="/papers/security.pdf">
              <a className="hover:italic font-semibold underline underline-offset-2">
                Blockchain Security
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <div className="bg-[#DDE4EC] w-2/3 h-[60vh] flex flex-col justify-center items-center">
            <img
              src="/images/fieldtriprecordswebsite.png"
              className="h-3/4"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="mt-6 text-lg w-1/2 text-center font-bold text-[#7C7C7C]">
              Field Trip Records Front-End
            </h3>
            <p className="mt-2 text-lg w-1/2 text-center font-medium text-[#BABABA]">
              Designed about built the front-end site for music record
              label Field Trip Recordings. Designed using Figma, and
              built using NextJS, Tailwind, Framer Motion, and Styled
              Components.
            </p>
            <div className="mt-3">
              <Link href="https://fieldtriprecords.vercel.app/">
                <a className="text-[#4F4F4F] hover:italic font-semibold underline underline-offset-2">
                  Field Trip Records Site
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <div className="bg-[#DDE4EC] w-2/3 h-[60vh] flex flex-col justify-center items-center">
            <img src="/images/textbooks.png" className="h-3/4" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="mt-6 text-lg w-1/2 text-center font-bold text-[#7C7C7C]">
              The Art of Mathematics
            </h3>
            <p className="mt-2 text-lg w-1/2 text-center font-medium text-[#BABABA]">
              Authored three textbooks teaching single variable
              integral and differential calculus, and multi-variable
              calculus.
            </p>
            <div className="mt-3">
              <Link href="https://mustafaaljadery.github.io/#/">
                <a className="text-[#4F4F4F] hover:italic font-semibold underline underline-offset-2">
                  Textbooks
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#DDE4EC] w-2/3 h-[60vh] flex flex-col justify-center items-center">
            <img src="/images/randomization.png" className="h-1/2" />
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="mt-6 text-lg w-1/2 text-center font-bold text-[#7C7C7C]">
              Randomization Interface for Experiment Design
            </h3>
            <p className="mt-2 text-lg w-1/2 text-center font-medium text-[#BABABA]">
              A randomization interface that allows for experimental
              design and analysis of systems. Built using Python.
            </p>
            <div className="mt-3">
              <Link href="https://github.com/mustafaaljadery/Randomization-Interface-for-Experiment-Design">
                <a className="text-[#4F4F4F] hover:italic font-semibold underline underline-offset-2">
                  Github Repo
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
