import React from 'react'
import GameVersions from './GameVersions'
import { useLocation } from 'react-router-dom';

const MiniGameTwoManagement = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div className='px-8'>
      <h2 className='font-inter font-[600] text-[24px]'>Game Versions</h2>
      {/* <h1>{name}</h1> */}
      <div className='h-screen mt-8'>
        <GameVersions/>
      </div>
    </div>
  )
}

export default MiniGameTwoManagement
