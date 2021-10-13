import Image from 'next/image'
import {Github, Instagram, Facebook, Twitter} from '../MediaIcon'


export default function AboutUs() {
    return (
        <div className="text-center my-16">
        <h1 className="text-4xl">Our Team</h1>

        <div className="flex mt-4 sm:flex-row flex-col justify-center items-center">

            <div className="group flex-initial h-full m-4 shadow-xl relative">
                <div className="flex h-100 group-hover:opacity-25 transition duration-300 ease-in-out">
                    <Image src="https://source.unsplash.com/6mRfNloPHlc/900x900" width={450} height={450} alt={`member-name`}/>
                </div>
                <div className="absolute bottom-0 text-left pl-5 mb-5 group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out">
                    {/* <p className="text-2xl mb-0 animate-pulse">Undercover</p> */}
                    <div className="w-full shadow-xl h-10 rounded-full bg-gray-300 animate-pulse"></div>
                    <p className="font-light italic text-2xl">Founder</p>
                    <div className="flex mt-4">
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Instagram stroke={1} size={16} />
                        </a>
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Facebook stroke={1} size={16} />
                        </a>
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Twitter stroke={1} size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="group flex-initial h-full m-4 shadow-xl relative">
                <div className="flex h-100 group-hover:opacity-25 transition duration-300 ease-in-out">
                    <Image src="https://source.unsplash.com/6mRo659CPmM/900x900" width={450} height={450} alt={`member-name`}/>
                </div>
                <div className="absolute bottom-0 text-left pl-5 mb-5 group-hover:opacity-100 opacity-0 transition duration-300 ease-in-out">
                    {/* <p className="text-2xl mb-0 animate-pulse">Undercover</p> */}
                    <div className="w-full shadow-xl h-10 rounded-full bg-gray-300 animate-pulse"></div>
                    <p className="font-light italic text-2xl">Content Creator</p>
                    <div className="flex mt-4">
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Instagram stroke={1} size={16} />
                        </a>
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Facebook stroke={1} size={16} />
                        </a>
                        <a href="#" className="mr-2 transition duration-500 ease-in-out transform hover:rotate-180">
                            <Github stroke={1} size={16} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
