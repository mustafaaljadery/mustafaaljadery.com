import { EssayType } from '../../types/essay';
import Link from 'next/link';

type IndexProps = {
  essays: EssayType[];
};

const Essays = ({ essays }: IndexProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-10/12 flex my-10 mb-24 flex-col justify-center items-center">
        <h2 className="font-black text-lg my-10 text-[#555555]">
          RECENT ESSAYS
        </h2>
        <div className="w-full flex flex-row flex-wrap">
          {essays.slice(0, 6).map((essay) => {
            return (
              <div key={essay.slug} className="p-3 hover:p-0 w-1/3">
                <div
                  key={essay.slug}
                  className="h-full shadow p-5 bg-[#F9F9FB] rounded-xl flex flex-col justify-center items-center"
                >
                  <img
                    src={`/images/${essay.slug}.png`}
                    className="w-auto rounded mt-4"
                  />
                  <Link href={`/essays/${essay.slug}`}>
                    <a
                      className={`mt-6 font-semibold text-[#404040] text-xl w-2/3 text-center hover:underline hover:underline-offset-1 hover:italic`}
                    >
                      {essay.title}
                    </a>
                  </Link>
                  <div className="mt-auto w-full flex flex-col justify-end items-end">
                    <Link className="" href={`/essays/${essay.slug}`}>
                      <a className="flex flex-row space-x-1">
                        <span className="text-sm font-bold underline underline-offset-2 hover:italic">
                          Continue
                        </span>
                        <span className="font-bold text-sm">→</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Essays;
