import React, {useEffect, useMemo, useState} from 'react'
import Glorble from "../components/Glorble.jsx";
import {useNavigate} from "react-router-dom";
import Accessory from "../components/Accessory.jsx";

const CreateGlorble = () => {

    const [glorble, setGlorble] = useState({
        name: '',
        color: 'grey',
        hat: 'none',
        shoes: 'none',
        glasses: 'none',
        price: 0
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
            fetch('/api/', options).catch(console.error);
            window.location = '/';
        } catch (error) {
            console.error('Glorble not created - ', error);
        }
    }

    const appendUrl = (name) => '/src/assets/' + name + '.png';

    const hats = useMemo(() => [
        ['none', 1],
        ['cowboy-hat', 400],
        ['beanie', 1500],
        ['cap', 35],
        ['top-hat', 777],
        ['strawhat', 3000000000],
        ['goku', 9001]
    ], []);

    const glasses = useMemo(() => [
        ['none', 1],
        ['shades', 450],
        ['orange-visor', 714],
        ['cyclops', 97],
        ['nerd',  3141592653589793238462643383279],
        ['doffy', 90447],
        ['kamina', 9696969696]
    ], []);

    const [hatPrice, setHatPrice] = useState(hats[0][1]);
    const [glassesPrice, setGlassesPrice] = useState(glasses[0][1]);

    const accessoryChange = (accessoryChoice, type) => {
        const newAccessoryPrice = accessoryChoice[1];
        if(type === 'hat') {
            setHatPrice(newAccessoryPrice);
            setGlorble((prev) => ({
                ...prev,
                hat: appendUrl(accessoryChoice[0]),
                price: newAccessoryPrice + glassesPrice
            }));
        }
        else if(type === 'glasses') {
            setGlassesPrice(newAccessoryPrice);
            setGlorble((prev) => ({
                ...prev,
                glasses: appendUrl(accessoryChoice[0]),
                price: newAccessoryPrice + hatPrice
            }));
        }
    }

    return (
        <div className={'h-[85vh]'}>
            <div className={'flex relative justify-center items-end h-[45%]'}>
                <Glorble
                    color={glorble.color}
                    hat={glorble.hat}
                    glasses={glorble.glasses}
                    created={false}
                />
                <div className={'font-bold text-3xl absolute top-[10%]'}>
                    ${glorble.price} Glorbucks
                </div>
            </div>
            <div className={"bg-purple-200 h-[55%] flex flex-col justify-start p-6 items-center"}>
                <div>
                    <form className={'flex flex-col gap-5'}>
                        <div id={'name'} className={'flex flex-row gap-3'}>
                            <label htmlFor={'name'} className={'font-bold text-xl flex items-center'}>Name Your
                                Glorble!</label>
                            <input
                                type={'text'}
                                name={'name'}
                                value={glorble.name}
                                onChange={handleChange}
                                className={'font-bold p-5 rounded-lg'}
                                autoComplete={'off'}
                            />
                        </div>

                        <div id={'color'} className={'flex flex-row gap-3'}>
                            <label htmlFor={'color'} className={'font-bold text-nowrap text-xl flex items-center'}>Color
                                that Glorble!</label>
                            <input
                                type={'color'}
                                name={'color'}
                                onChange={handleChange}
                                className={'w-full cursor-pointer'}
                            />
                        </div>

                        <div id={'hat'}
                             className={"flex flex-row items-center cursor-pointer select-none gap-3 w-full"}>
                            {hats.map((hat, hatIndex) => {
                                const hatUrl = appendUrl(hat[0]);
                                return (
                                    <div
                                        key={hatIndex}
                                        onClick={() => accessoryChange(hat, 'hat')}
                                    >
                                        <Accessory source={hatUrl}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div id={'glasses'}
                             className={"flex flex-row items-center cursor-pointer select-none gap-3 w-full"}>
                            {glasses.map((glass, glassIndex) => {
                                const hatUrl = appendUrl(glass[0]);
                                return (
                                    <div
                                        key={glassIndex}
                                        onClick={() => accessoryChange(glass, 'glasses')}
                                    >
                                        <Accessory source={hatUrl}/>
                                    </div>
                                )
                            })}
                        </div>

                        <input
                            type={'submit'}
                            value={'Submit'}
                            onClick={newGlorble}
                            className={'px-9 font-bold py-3 bg-purple-400 rounded-lg cursor-pointer select-none'}
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateGlorble