import styles from '../styles/Block.module.css'


export default function DataBlock({color, name, count}) {

    var style = `colorit bg-opacity-75 rounded-md py-8 px-4`
    
    return (
        <div className={` ${styles.imageBuild} flex-1 rounded-md mx-6 lg:my-0 my-4 shadow-md relative w-8/12`} >
            <div className={style}>
                <h1 className="sm:text-4xl text-2xl pl-8">{name}</h1>
                <h1 className="sm:text-8xl font-bold text-4xl pl-8">{count}</h1>
            </div>

            <style jsx>{`
                .colorit{
                    background-color: hsla(${color},55%,65%,0.75);
                }
            `}</style>
        </div>
    )
}
