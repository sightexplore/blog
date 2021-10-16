import {Github, Instagram, Facebook, Youtube, SunLight, MoonDark} from '../MediaIcon'
import Data from './Data'
import Image from 'next/image'

export default function AnalyticBlock() {
    return (

<section className="py-1">
<div className="flex justify-evenly flex-col flex-col-reverse  lg:flex-row ">
    <div className="flex-1 flex justify-center self-center flex-col">
    <h1 className="text-4xl mb-4 font-bold text-center">Community &amp; Contribution</h1>
    <p className="text-xl mb-2  text-center" >Never stop learning, because life never stops teaching.</p>
    </div>
    <div className="flex-1 mx-auto">
    <Image src="/svg/home.svg" width={600} height={400} alt={`hero-icon`}/>
    </div>
</div>

<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto ">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl  bg-gray-200 dark:bg-gray-800">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Our Community</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <div className="flex flex-row justify-end flex-1">
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Facebook size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Github size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Instagram size={20}/></a> </div>
              <div className="my-auto ml-2 transition duration-500 ease-in-out transform hover:rotate-180"> <a href="#"><Youtube size={20}/></a> </div>
            </div>
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Social Sites
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Followers
            </th>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                Contribution
            </th>
        </tr>
        </thead>

        <tbody>

            { Data.map((x,index) => 
                <tr key ={index}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {x.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                       {x.user}
                    </td>
                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {x.content}
                    </td>
                </tr>
            )}



        </tbody>

      </table>
    </div>
  </div>
</div>
</section>
    )
}
