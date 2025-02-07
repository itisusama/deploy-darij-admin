import React from 'react'
import GamesHeader from '../GamesHeader'
import pf from "../../../assets/OBJECTS.svg"
import threedoticon from "../../../assets/Threedot.svg"
import Wordicon from "../../../assets/wordicon.svg"
import WordsContainer from '../GamesScreenComponents/WordsContainer'
const MiniGameThreeManagement = () => {
  const customWordlist = [
    {
        id: 1,
        heading: "Je Veux",
        img: Wordicon,
        menu: threedoticon,
      },
      {
        id: 2,
        heading: "I went to",
        img: Wordicon,
        menu: threedoticon,
      },
      {
        id: 3,
        heading: "I went to",
        img: Wordicon,
        menu: threedoticon,
      },
      {
        id: 4,
        heading: "I went to",
        img: Wordicon,
        menu: threedoticon,
      },
      {
        id: 5,
        heading: "I went to",
        img: Wordicon,
        menu: threedoticon,
      },
      {
        id: 6,
        heading: "I went to",
        img: Wordicon,
        menu: threedoticon,
      },
      // {
      //   id: 7,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
      // {
      //   id: 8,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
      // {
      //   id: 9,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
      // {
      //   id: 10,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
      // {
      //   id: 11,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
      // {
      //   id: 12,
      //   heading: "I went to",
      //   img: Wordicon,
      //   menu: threedoticon,
      // },
  ];
  return (
    <>
     <div className=''>
            <GamesHeader  title="Add New"  path="/add-minigamethree" onBack="/mini-games"  />
            {/* <div className="flex justify-center mt-5">
                <img src={pf} alt="Professional Version" className='w-[270px] h-[270px] ' />
            </div>
            <p className='font-inter font-[400] text-[18px] text-[#B4B4B4] leading-6 text-center p-8'>No data found</p> */}
      </div>
      <section className=''>
        <WordsContainer path="/edit-minigamethree" customWordlist={customWordlist}/> 
      </section>  
    </>
  )
}
export default MiniGameThreeManagement