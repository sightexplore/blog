import {Github, Instagram, Facebook, Youtube} from '../MediaIcon'

export default function IconStyle() {
    return (
        <div className="flex items-center mb-6">

        <a aria-label="Github" href="#">
            <div className=" mr-2 text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand
                transition duration-500 ease-in-out transform hover:rotate-180">
                <Github stroke={1.5} />
            </div> 
        </a>

        <a aria-label="Github" href="#">
            <div className=" mr-2 text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand
                transition duration-500 ease-in-out transform hover:rotate-180">
                <Instagram stroke={1.5} />
            </div> 
        </a>

        <a aria-label="Github" href="#">
            <div className=" mr-2 text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand
                transition duration-500 ease-in-out transform hover:rotate-180">
                <Facebook stroke={1.5} />
            </div> 
        </a>

        <a aria-label="Github" href="#">
            <div className=" mr-2 text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand
                transition duration-500 ease-in-out transform hover:rotate-180">
                <Youtube stroke={1.5} />
            </div> 
        </a>


    </div>
    )
}
