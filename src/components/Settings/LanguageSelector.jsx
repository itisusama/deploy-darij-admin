import React, { useState } from 'react';
import Downarrow from "../../assets/Downarrow.svg"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  return (
    <div className="">
        <div className=' text-black'><label>Select Language</label> </div>
        
      <button
        className="inline-flex relative items-center px-3 py-2 w-full border rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedLanguage}
        <img src={Downarrow} alt="" className='absolute right-2 ' />
      </button>

      {showDropdown && (
        <div className="absolute z-10 mt-2  bg-white rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <button
                className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange('English')}
              >
                English
              </button>
            </li>
            <li>
              <button
                className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange('Spanish')}
              >
                Spanish
              </button>
            </li>

            <li>
              <button
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange('Arabic')}
              >
                Arabic
              </button>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;