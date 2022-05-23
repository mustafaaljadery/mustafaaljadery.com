import Image from 'next/image';
const AboutMe = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-green-200">
      <div className="w-10/12 flex flex-row justify-between items-between">
        <div className="flex flex-col space-y-12 w-3/5 my-auto">
          <p className="font-regular">
            I’m a human interface designer and software engineer from
            California. I mainly work on front-end and backend
            systems.
          </p>
          <p className="font-regular">
            My interests are predicated around transformational
            technologies that return outsize BENEFIT to humanity. I
            write about transformational ideas in the narrative of
            case studies and research studies here.
          </p>
          <p className="font-regular">
            Most strongly proficient in typescript, python, and C++.
            Advanced calculus and linear algebra enthusiast.{' '}
          </p>
        </div>
        <img src="/mustafa.png" className="w-[30%] my-auto" />
      </div>
      <div className="w-10/12 mt-12 flex flex-col justify-between items-between">
        <h2 className="font-bold text-center text-xl">Skills</h2>
      </div>
    </div>
  );
};

export default AboutMe;
