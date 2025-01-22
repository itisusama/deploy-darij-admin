import React from 'react'
import GamesHeader from '../GamesHeader'
import pf from "../../../assets/OBJECTS.svg"
import threedoticon from "../../../assets/Threedot.svg"
import Wordicon from "../../../assets/wordicon.svg"
import WordsContainer from '../GamesScreenComponents/WordsContainer'

const MiniGameFiveManagement = () => {
  const customWordlist = [
      {
          id: 1,
          heading: "Comment vas-tu?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 2,
          heading: "Je t’aime.",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 3,
          heading: "C’est une fille.",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 4,
          heading: "Peux-tu me faire?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 5,
          heading: "Où est ton frère?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 6,
          heading: "Je suis un garçon.",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 7,
          heading: "Peux-tu me faire?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 8,
          heading: "Où est ton frère?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 9,
          heading: "Je suis un garçon.",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 10,
          heading: "Peux-tu me faire?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 11,
          heading: "Où est ton frère?",
          img: Wordicon,
          menu: threedoticon,
        },
        {
          id: 12,
          heading: "Je suis un garçon.",
          img: Wordicon,
          menu: threedoticon,
        },
    ];
  return (
    <>
     <div>
            <GamesHeader title="Add New" path="/add-new-minigamefive" onBack="/mini-games" />
            {/* <div className="flex justify-center mt-5">
                <img src={pf} alt="Professional Version" className='w-[270px] h-[270px] ' />
            </div>
            <p className='font-inter font-[400] text-[18px] text-[#B4B4B4] leading-6 text-center p-8'>No data found</p> */}
      </div> 
      <section className='px-8'>
        <WordsContainer path="/edit-new-minigamefive" customWordlist={customWordlist}/>
      </section>
    </>
  )
}

export default MiniGameFiveManagement
