import React from "react";
import {useNavigate} from "react-router-dom";

export default function GlorbleHome() {

  const navigate = useNavigate();

  return (
      <div className={'flex justify-center'}>
        <button
            className={'px-9 py-3 bg-purple-400 font-bold rounded-lg'}
            onClick={() => navigate('/new')}
        >
          New Glorble 😈
        </button>
      </div>
  )
}