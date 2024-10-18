import React from 'react'
import {useNavigate, useRoutes} from 'react-router-dom'
import ViewGlorbles from './pages/ViewGlorbles.jsx'
import ChangeGlorble from './pages/ChangeGlorble.jsx'
import CreateGlorble from './pages/CreateGlorble.jsx'
import GlorbleDetails from './pages/GlorbleDetails.jsx'
import GlorbleHome from "./pages/GlorbleHome.jsx";

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <GlorbleHome />
    },
    {
      path: '/new',
      element: <CreateGlorble />
    },
    {
      path:'/glorbles',
      element: <ViewGlorbles />
    },
    {
      path: '/glorbles/:id',
      element: <GlorbleDetails />
    },
    {
      path: '/change/:id',
      element: <ChangeGlorble />
    }
  ]);

  const navigate = useNavigate();

  return (
    <div className='bg-[url(./assets/glorble-house.jpg)] bg-no-repeat bg-center bg-cover min-h-screen'>
      <div className={' w-full backdrop-blur-sm'}>
        <nav className={'grid grid-cols-3 gap-9 px-9 h-[15vh] items-center'}>
          <div className={'flex justify-start items-center'}>
            <button
                className={'px-9 py-3 bg-purple-400 font-bold rounded-lg'}
                onClick={() => navigate('/')}
            >
              Glorble Home
            </button>
          </div>
          <h1 className={'text-center text-5xl font-bold'}>Glorbles!</h1>
          <div className={'flex justify-end items-center'}>
            <button
                className={'px-9 py-3 bg-purple-400 font-bold rounded-lg'}
                onClick={() => navigate('/glorbles')}
            >
              All Glorbles 😈
            </button>
          </div>
        </nav>
        <div className={'h-[85%]'}>
          {element}
        </div>
      </div>
    </div>
  )
}

export default App