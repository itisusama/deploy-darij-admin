import React from 'react'
import GamesList from '../GamesScreenComponents/GamesList'

const MiniGamesManagement = () => {
  return (
    <div className='px-8'>
      <h2 className='font-inter font-[600] text-[24px]'>Games</h2>
      <div className='h-screen mt-8 overflow-y-auto custom-scrollbar'>
        <GamesList/>
      </div>  
    </div>
  )
}

export default MiniGamesManagement
