export default function ListBlock(props) {
    return (
        <>
            { props.listElement.map( (x,index) => {
                return <div key={index} className="flex-1 mx-4 my-2">
                    <ul className="flex flex-col p-4 bg-gray-300 rounded">

                        {
                        x.value.map((y,indey) => <li key={`${index}-${indey}`} className="border-gray-400 flex flex-row mb-2" >
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-white">
                            <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">{x.icon}</div>
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium dark:text-gray-700">{y}</div>
                            </div>
                        </div>
                        </li> )
                        }

                    </ul>
                </div>
            }) }
        </>
    )
}
