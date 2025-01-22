import React from 'react'
import LanguageCard from "./LanguageCards"
// import Words_learn from './Words_learn'

const LearnManagement = () => {
  return (
    <div>
    <h2 className='font-inter font-[600] text-[24px] ml-11'>Choose Language</h2>
    <div className='h-screen mt-24'>
      <LanguageCard/>
    </div>
  </div>
  )
}

export default LearnManagement
