import React, {useState} from 'react'
import Glorble from "../components/Glorble.jsx";

const CreateGlorble = () => {

    const [glorble, setGlorble] = useState({
        name: '',
        color: 'grey',
        hat: 'none',
        shoes: 'none',
        glasses: 'none'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setGlorble((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const newGlorble = (event) => {
        event.preventDefault();

        if(
            !glorble.name ||
            !glorble.color
        ) {
            alert('Please name and color your glorble! :(');
            return;
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(glorble)
        }

        try {
            const response = fetch('http://localhost:3001/', options);
            response.then(() => window.location = '/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={'h-full'}>
            <div className={'flex justify-center items-end h-[35%]'}>
                <Glorble color={glorble.color}/>
            </div>
            <div className={"bg-blue-400 h-[65%]"}>
                hi
            </div>
        </div>
    )
}

export default CreateGlorble