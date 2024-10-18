import React, {useEffect, useState} from 'react'
import Glorble from "../components/Glorble.jsx";

const ViewGlorbles = () => {

    const [glorbles, setGlorbles] = useState([]);

    useEffect(() => {
        const getGlorbles = async () => {
            const response = await fetch('/api/');
            if(response.ok) {
                const data = await response.json();
                setGlorbles(data);
            }
        }
        getGlorbles().catch(console.error);
    }, []);

    return (
        <div className={'grid grid-cols-3 gap-y-16 p-9'}>
            {glorbles &&
                glorbles.map((glorble, glorbleDex) => (
                    <div className={"flex flex-col justify-center gap-4 items-center"} key={glorbleDex}>
                        <Glorble
                            id={glorble.id}
                            color={glorble.color}
                            hat={glorble.hat}
                            shoes={glorble.shoes}
                            glasses={glorble.glasses}
                            created={true}
                        />
                        <div>
                            <h2 className={'text-center font-bold text-3xl'}>{glorble.name}</h2>
                            <p className={'text-center font-bold text-xl'}>${glorble.price} Glorbucks</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ViewGlorbles