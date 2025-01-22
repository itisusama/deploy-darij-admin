import React from 'react'
import LanguageCards from './LanguageCards'

const MainScreen = () => {
  return (
    <div>
      <h2 className='font-inter font-[600] text-[24px] ml-11'>Choose Language</h2>
      <div className='h-screen mt-24'>
        <LanguageCards/>
      </div>
    </div>
  )
}

export default MainScreen
