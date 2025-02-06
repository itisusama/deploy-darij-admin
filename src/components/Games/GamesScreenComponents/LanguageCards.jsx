import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import English from '../../../assets/English.svg';
import Algerian from '../../../assets/Algeria.svg';
import Moroccan from '../../../assets/morocco.svg';
import Arabic from '../../../assets/saudi-arabia.svg';
import Tunisian from '../../../assets/tunisia.svg';

const LanguageCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const languages = [
    { name: 'English', img: English },
    { name: 'Algerian', img: Algerian },
    { name: 'Moroccan', img: Moroccan },
    { name: 'Emirati/Saudi Arabic', img: Arabic },
    { name: 'Tunisian', img: Tunisian },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(index);

    // Check if local storage title is "Games"
    if (localStorage.getItem("title") === "Games") {
      localStorage.setItem("languageIndex", index);
    }
  };

  const handleNextClick = () => {
    if (activeIndex !== null) {
      navigate("/mini-games");
    } else {
      alert("Please select a language before proceeding.");
    }
  };

  return (
    <>
      <section className="w-full flex gap-3 justify-center items-center">
        {languages.map((language, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-[180px] h-[180px] bg-white rounded-[18px] flex flex-col justify-center items-center gap-6 cursor-pointer ${
              activeIndex === index ? 'border-4 border-[#ffc500]' : ''
            }`}
          >
            <img
              src={language.img}
              alt={language.name}
              className="w-[80px] h-[80px]"
            />
            <h2 className="font-inter font-[600] text-[16px]">{language.name}</h2>
          </div>
        ))}
      </section>
      <button
        onClick={handleNextClick}
        className="absolute right-11 bottom-11 rounded-full bg-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
      >
        Next
      </button>
    </>
  )
}

export default LanguageCards
