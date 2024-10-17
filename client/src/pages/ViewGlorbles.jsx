import React, {useEffect, useState} from 'react'
import Glorble from "../components/Glorble.jsx";

const ViewGlorbles = () => {

    const [glorbles, setGlorbles] = useState([]);

    useEffect(() => {
        const getGlorbles = async () => {
            const response = await fetch('http://localhost:3000/api');
            if(response.ok) {
                const data = await response.json();
                setGlorbles(data);
            }
        }
        getGlorbles().catch(console.error);
    })

    return (
        <div className={'grid grid-cols-3 p-9'}>
            {glorbles &&
                glorbles.map((glorble, glorbleDex) => (
                    <div className={"flex flex-col justify-center gap-4 items-center"} key={glorbleDex}>
                        <Glorble
                            name={glorble.name}
                            color={glorble.color}
                            hat={glorble.hat}
                            shoes={glorble.shoes}
                            glasses={glorble.glasses}
                        />
                        <h2 className={'font-bold text-3xl'}>{glorble.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewGlorbles