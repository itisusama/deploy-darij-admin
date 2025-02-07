import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Shipments from "../../../assets/Shipments.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

const GamesList = () => {
    // const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const { languageName } = location.state || {};
    // const { games } = location.state;
    
        // useEffect(() => {
        //     const handleBackButton = (event) => {
        //         event.preventDefault();
        //         navigate('/games'); // Redirect to "/users" when back is pressed
        //     };
    
        //     window.history.pushState(null, null, window.location.pathname);
        //     window.addEventListener('popstate', handleBackButton);
    
        //     return () => {
        //         window.removeEventListener('popstate', handleBackButton);
        //     };
        // }, [navigate]);

        const [activeIndex, setActiveIndex] = useState(() => {
          const storedIndex = localStorage.getItem("activeIndex");
          const storedName = localStorage.getItem("name");
          const title = localStorage.getItem("title");
          
          return title === "Games" && storedIndex !== null ? parseInt(storedIndex, 10) : null;
      });

    //   useEffect(() => {
    //     const title = localStorage.getItem("name");
    //     if (title !== "Games") {
    //         setActiveIndex(null);
    //         localStorage.removeItem("activeIndex");
    //     }
    // }, []);

    const miniGames = [
        { 
            name: 'Mini Game 1', 
            para: `Tap on the card that you believe matches the word's meaning or represents the correct option.`,
            path: "/mini-game-two" 
        },
        { 
            name: 'Mini Game 2', 
            para: `Start by reading the description above. It contains valuable insights or context for the mini-game.`,
            path: "/mini-game-two" 
          },
          { 
            name: 'Mini Game 3', 
            para: `Press and hold a word from the options below, then drag it to the appropriate blank space.`,
            path: "/mini-game-two" 
          },
          { 
            name: 'Mini Game 4', 
            para: `Ensure the number matches what you heard in the audio.And write in a giving space and click into the tick mark.`,
            path: "/mini-game-two" 
          },
          { 
            name: 'Mini Game 5', 
            para: `Add a specific dialogue and according to selected dialogue add a different translation options`,
            path: "/mini-game-two" 
          },
      ];

      const handleCardClick = (index, path) => {
        setActiveIndex(index);
        localStorage.setItem("activeIndex", index);
        localStorage.setItem("name", path);
    };

    console.log("Game List Location", location.pathname)
  
  return (
    <>
      <section className="flex flex-col gap-3 overflow-hidden mb-64">
         {/* <p>Selected Language: {languageName}</p> */}
        {miniGames.map((game, index) => (
          <Link to={game.path} state={{ name: game.name }} onClick={() => handleCardClick(index, game.name)}>
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-full h-fit py-2 bg-white rounded-xl flex gap-4 px-2 justify-between border ${
              activeIndex === index ? 'border-2 border-[#ffc500]' : ''
            }`}
          >
            <div className='flex gap-3'>
                <img src={Shipments} alt="shipments" className='w-[48px] h-[48px] text-[#ffc500]' />
                <div>
                    <h2 className="font-inter font-[600] text-[16px]">{game.name}</h2>
                    <p className='font-inter font-[400] text-[12px] w-[503px]'>{game.para}</p>
                </div>
            </div>
            <div className='w-[40px] h-[40px] rounded-full bg-[#f9f3f2] my-auto flex justify-center items-center cursor-pointer'>
              <Link to={game.path} state={{ name: game.name }} onClick={() => handleCardClick(index, game.name)}>
              <MdKeyboardArrowRight className='text-[16px]'/>
              </Link>
             </div>
          </div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default GamesList
