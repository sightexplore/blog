import styles from './Block.module.css'
import Image from 'next/Image'

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

            <div className={` ${styles.imageBuild} flex-1 rounded-md mx-6 lg:my-0 my-4 shadow-md relative w-8/12`} >
                <div className="bg-purple-200 bg-opacity-75 rounded-md py-8 px-4">
                    <h1 className="sm:text-4xl text-2xl pl-8">Blogs</h1>
                    <h1 className="sm:text-8xl font-bold text-4xl pl-8">12</h1>
                </div>
            </div>

            <div className={` ${styles.imageBuild} flex-1 rounded-md mx-6 lg:my-0 my-4 shadow-md relative w-8/12`} >
                <div className="bg-pink-200 bg-opacity-75 rounded-md py-8 px-4">
                    <h1 className="sm:text-4xl text-2xl pl-8">Projects</h1>
                    <h1 className="sm:text-8xl font-bold text-4xl pl-8">19</h1>
                </div>
            </div>

        </div>

      </section>
    );
}
