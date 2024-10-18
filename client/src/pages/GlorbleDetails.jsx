import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import Glorble from "../components/Glorble.jsx";

const GlorbleDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [glorble, setGlorble] = useState({
        id: 0,
        name: '',
        color: 'grey',
        hat: 'none',
        shoes: 'none',
        glasses: 'none',
        price: 0
    });

    useEffect(() => {
        const getGlorble = async () => {
            try {
                const response = await fetch(`/api/${id}`);
                const data = await response.json();
                setGlorble({
                    id: data.id,
                    name: data.name,
                    color: data.color,
                    hat: data.hat,
                    shoes: data.shoes,
                    glasses: data.glasses,
                    price: data.price
                })
            } catch (error) {
                console.error('Error getting glorble :( - ', error);
            }
        }
        getGlorble().catch(console.error);
    }, [id])

    const glorbleDeath = () => {
        setDeathClass("death");
        return new Promise((resolve) => {
            setTimeout(() => resolve(null), 2000);
        });
    }

    const deleteGlorble = () => {

        const options = {
            method: 'DELETE'
        }

        try {
            fetch(`/api/${id}`, options)
                .then(glorbleDeath)
                .then(() =>  window.location = '/')
                .catch(console.error);
        } catch (error) {
            console.error(error);
        }
    }

    let [deathClass, setDeathClass]  = useState("");

    return (
        <div className={'h-[85vh] flex flex-col justify-between py-12 items-center'}>

            <div className={'flex flex-row gap-9'}>
                <button
                    onClick={() => navigate(`/change/${id}`)}
                    className={'px-9 py-3 bg-purple-800 hover:scale-[105%] active:scale-[95%] transition-transform rounded-lg font-bold text-white'}
                >
                    Change {glorble.name} Beyond Recognition
                </button>
                <button
                    onClick={deleteGlorble}
                    className={'px-9 py-3 bg-red-800 hover:scale-[305%] active:scale-[95%] transition-transform rounded-lg font-bold text-white'}
                >
                    Kill
                </button>
            </div>

            <div className={`${deathClass} flex flex-col gap-5 justify-center items-center`}>
                <div className={'font-bold text-3xl pb-10'}>${glorble.price} Glorbucks</div>
                <div className={'active:scale-[102%]'}>
                    <Glorble
                        id={glorble.id}
                        color={glorble.color}
                        hat={glorble.hat}
                        shoes={glorble.shoes}
                        glasses={glorble.glasses}
                        price={glorble.price}
                        created={false}
                    />
                </div>
                <div className={'font-bold text-5xl'}>{glorble.name}</div>
            </div>
        </div>
    )
}

export default GlorbleDetails