import Image from 'next/image'
import Link from 'next/link'
import Data from './Data'


export default function IntroBlock() {
    return (
        <>
            <section className="my-16 lg:mx-8">
            { Data.map((x, index) =>
                {
                    return <div key={index} className={x.styles} >

                        <div className="flex-1 flex justify-center self-center flex-col">
                            <h1 className="text-3xl mb-2 ">{x.title}</h1>
                            <p className="text-xl mb-4">{x.tagline}</p>
                            <p className="">{x.about}</p>
                            <Link href={x.link}>
                                <a 
                                    className={`font-medium text-center my-4 px-4 py-2 rounded shadow-md bg-gray-100 text-${x.color}-500 w-1/4 mx-auto sm:mx-0` }>
                                    Visit
                                </a>
                            </Link>
                        </div>

                        <div className="flex-1 mx-auto">
                            <Image src={x.src} width={600} height={400} alt={`hero-icon`} />
                        </div>

                    </div>
                })
            }
            </section>

        </>
    )
}
