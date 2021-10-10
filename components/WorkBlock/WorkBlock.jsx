import Image from 'next/Image'
import DataBlock from '../DataBlock';
import { getProjectCount } from '../../lib/project'


export default function WorkBlock() {
    return (
      <section className="py-1 mt-16 mb-16">

        <div className="flex justify-evenly flex-col flex-col-reverse  lg:flex-row ">
          <div className="flex-1 flex justify-center self-center flex-col">
            <h1 className="text-4xl mb-4 font-bold text-center">
              Blogs &amp; Project
            </h1>
            <p className="text-xl mb-2  text-center">
              Never stop learning, because life never stops teaching.
            </p>
          </div>
          <div className="flex-1 mx-auto">
            <Image src="/svg/home.svg" width={600} height={400} />
          </div>
        </div>

        <div className="flex justify-center items-center lg:mx-16 dark:text-gray-900 lg:flex-row flex-col">
          <DataBlock color="purple" name="Blogs" count="12" />
          <DataBlock color="pink" name="Project" count={getProjectCount()} />
        </div>

      </section>
    );
}
