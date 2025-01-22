import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Beginner from "../../../assets/begineer.jpeg";
import Intermediate from "../../../assets/intermediate.jpeg";
import Professionals from "../../../assets/professionals.jpeg";
import Lock from "../../../assets/Lock.svg"
import Plus from "../../../assets/plus.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';

const GameVersions = () => {
  const location = useLocation();
  const { name } = location.state || {};

  const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
       
     // Define paths based on the `name` value
  const getPath = () => {
    switch (name) {
      case "Mini Game 1":
        return "/mini-game-one";
      case "Mini Game 3":
        return "/mini-game-three";
      case "Mini Game 4":
        return "/mini-game-four";
      case "Mini Game 5":
        return "/mini-game-five";
      default:
        return "/professional-version";
    }
  };

    const versions = [
        { name: 'Beginners', tag: "Learn upto 200 Words", img: Beginner, path: getPath()},
        { name: 'Intermediate', tag: "Learn upto 600 Words", img: Intermediate, path: getPath()},
        { name: 'Professionals', tag: "Learn upto 1000 Words", img: Professionals, path: getPath()},
      ];
      const handleCardClick = (index) => {
        setActiveIndex(index);
      };

      const [menuIndex, setMenuIndex] = useState(null);
      
          const toggleMenu = (index) => {
              setMenuIndex(menuIndex === index ? null : index);
          };

  return (
    <>
      <section className="flex gap-3">
        {versions.map((version, index) => (
          <Link to={version.path} state={{ name: name }}>
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`relative w-[240px] h-[262px] bg-white rounded-[18px] flex flex-col justify-center items-center gap-2 ${
              activeIndex === index ? 'border-[3px] border-[#ffc500] bg-[#fffefa]' : ''
            }`}
          >
            
            <div>
                <h2 className="font-inter font-[600] text-[16px] text-center mb-2">{version.name}</h2>
                
                <img
                src={version.img}
                alt={version.name}
                className="w-[120px] h-[120px] rounded-full snap-center"
                />
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={Lock} alt="lock" className='w-[16px] h-[16px]' />
                <h2 className="font-inter font-[600] text-[16px]">Locked</h2>
            </div>
            <div>
                <p className="text-[12px] font-inter font-[400] text-[#626262]">{version.tag}</p>
                <div>
            <FontAwesomeIcon className="text-[16px] font-inter font-[400] text-[#626262] absolute top-7 right-7" icon={faEllipsisVertical} onClick={() => toggleMenu(index)}/>
            {menuIndex === index && (
             <div className="absolute right-4 top-12 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-[67px] h-[75px] z-10">
                <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => navigate("/edit-game-version", { state: { version, name: name } })}
                >
                    Edit
                </button>
                <button
                className="block text-[#FF3B30] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                // onClick={() => alert(`Delete clicked for ${code.promoId}`)}
                >
                    Delete
                </button>
                </div>
                )}
            </div>
            </div>
          </div>
          </Link>
        ))}
        <div className='flex justify-center items-center'>
            <Link to="/add-game-version" state={{ name: name }}>
            <div className='bg-[#ffc500] p-[20px] rounded-full cursor-pointer'>
                <img src={Plus} alt="plus"/>
            </div>
            </Link>
        </div>
      </section>
    </>
  )
}

export default GameVersions
