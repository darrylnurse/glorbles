import React from "react";

export default function Glorble ({ name, color, hat, shoes, glasses }) {
  return (
      <div
          className={'glorble-body relative flex justify-center items-center'}
          style={{backgroundColor: color}}
      >
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