import React from "react";
import {useNavigate} from "react-router-dom";

export default function Glorble ({ id, color, hat, shoes, glasses, price, created }) {

  const navigate = useNavigate();
  const handleNav = () => {
    if (created) {
      navigate(`${id}`);
    }
  }

  return (
      <div
          className={'glorble-body cursor-pointer relative z-0 flex justify-center items-center'}
          style={{backgroundColor: color, opacity: "inherit"}}
          onClick={handleNav}
      >
        <img
            src={String(hat).includes('none') ? null : hat}
            alt={''}
            className={'absolute top-[-30%] z-2'}
        />
        <img
            src={String(glasses).includes('none') ? null : glasses}
            alt={''}
            className={'absolute top-[15%] z-1'}
        />
        <img
            src={'/src/assets/glorble-face.png'}
            alt={'glorble-face'}
            className={'w-[80%]'}
        />
        <div
            className={'glorble-feet absolute right-[-10%] bottom-0'}
            style={{backgroundColor: color}}
        >
        </div>
        <div
            className={'glorble-feet absolute left-[-10%] bottom-0'}
            style={{backgroundColor: color}}
        >
        </div>
        <div
            className={'glorble-horn-left absolute right-0 top-0'}
            style={{borderRight: `30px solid ${color}`}}
        >
        </div>
        <div
            className={'glorble-horn-right absolute left-0 top-0'}
            style={{borderRight: `30px solid ${color}`}}
        >
        </div>
      </div>
  )
}