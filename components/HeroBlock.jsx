import Image from 'next/image'
import Link from 'next/link'


export default function HeroBlock(props) {
    return (
        <div className="flex justify-evenly flex-col flex-col-reverse  lg:flex-row mb-12">
          <div className="flex-1 flex justify-center self-center flex-col">
            <h1 className="text-4xl mb-4 font-bold   text-center lg:text-left">{props.title}</h1>
            <p className="text-xl mb-2  text-center lg:text-left" >{props.tagline}</p>

            <div className="inline-flex mx-auto lg:mx-0">
              <Link href={ props.links[0].path } >
                <a className="hover:bg-blue-600 bg-blue-700 text-gray-200 py-2 px-6 rounded-l-xl shadow-inner">
                    { props.links[0].name }
                </a>
              </Link>
              <Link href={ props.links[1].path } >
                <a className="bg-gray-200 text-blue-700 hover:bg-gray-100 py-2 px-6 rounded-r-xl shadow-inner">
                    { props.links[1].name }
                </a>
              </Link>
            </div>

          </div>
          <div className="flex-1 mx-auto">
            <Image src={props.src} width={600} height={400} alt={`hero-icon`} />
          </div>
        </div>
    )
}
