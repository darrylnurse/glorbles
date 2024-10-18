import React, {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import Glorble from "../components/Glorble.jsx";

export default function GlorbleHome() {

  const navigate = useNavigate();

  const [glorbles, setGlorbles] = useState([]);
  const [randomId, setRandomId] = useState(1);

  useEffect(() => {
    const getGlorbles = async () => {
      const response = await fetch('/api/');
      if(response.ok) {
        const data = await response.json();
        setGlorbles(data);
        const glorbleIds = data.map(glorble => glorble.id);
        setRandomId(glorbleIds[Math.floor(Math.random() * glorbleIds.length)]);
      }
    }
    getGlorbles().catch(console.error);
  }, []);

  useEffect(() => {
    console.log(randomId);
  })

  return (
      <div className={'flex relative h-[85vh] flex-col gap-[7rem] items-center justify-start overflow-hidden'}>
        <button
            className={'px-9 py-3 bg-purple-400 font-bold rounded-lg'}
            onClick={() => navigate('/new')}
        >
          New Glorble 😈
        </button>
        <p className={'w-1/3 text-center font-bold text-3xl'}>
          Mischievous little dude glob marble things I really have no idea how they got here I just put em in my house they ate all the furniture and the cat I have no insurance
        </p>
        {glorbles.length > 0 && randomId !== null && glorbles[randomId] &&
            <div className={'absolute bottom-0 glorble-move'}>
              <Glorble
                color={glorbles[randomId].color}
                hat={glorbles[randomId].hat}
                glasses={glorbles[randomId].glasses}
                created={true}
              />
            </div>
        }
      </div>
  )
}