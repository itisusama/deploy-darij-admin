import React from 'react';
import { Link } from 'react-router-dom';
import Profile from "../../../assets/Cemra.svg";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const AddGameVersionManagement = () => {
     const location = useLocation();
     const { name } = location.state || {};
  return (
    <div className='px-8'>
     <h2 className='font-inter font-[600] text-[24px]'>Add Game Version</h2>
        <div className="w-full flex justify-center items-center">
            <div>
                <img src={Profile} alt="" className="h-[160px] w-[160px] p-8 grayscale-0 rounded-full border" />
            </div>
            <div className=" bg-[#fefefe] h-10 w-10 border rounded-full flex justify-center items-center absolute ml-[110px] mt-[100px] cursor-pointer">
            <FaPlus className='text-black' />
            </div>
        </div>
        {/* Start:: Form */}
        <div>
            <form>
                <label htmlFor="version-title" className='text-[#9DA0B6] text-[16px]'>Version Title</label>
                <input type="text" name="version-title" id="version-title" className='w-full p-2 rounded-md border' placeholder='Enter a title of version' />

                <div className='w-full mt-4 flex gap-5'>
                    <div className='w-[50%]'>
                    <label htmlFor="version-title" className='text-[#9DA0B6] text-[16px]'>Locked</label>
                    <input type="text" name="version-tag" id="version-tag" className='w-full p-2 rounded-md border' placeholder='Enter a text to show unlocked condition'/>
                    </div>
                    <div className='w-[50%]'>
                    <label htmlFor="word-select" className='text-[#9DA0B6] text-[16px]'>Select Words</label>
                    <select id="words" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" >
                        <option className='font-inter text-[16px] text-[#D4D4D4]'>Select words to unlock</option>
                        <option>2000</option>
                        <option>3000</option>
                        <option>4000</option>
                        <option>5000</option>
                    </select>
                    </div>
                </div>
                {/* START:: Buttons */}
                <div>
                <Link to="/mini-game-two">
                <button
                    // onClick={handleNextClick}
                    className="absolute right-[22rem] bottom-11 rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                >
                    Cancel
                </button>
                </Link>
                <button
                    // onClick={handleNextClick}
                    className="absolute right-11 bottom-11 rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                >
                    Add Version
                </button>
                </div>
                {/* END:: Buttons */}
            </form>
        </div>
        {/* END:: Form */}
  </div>
  )
}

export default AddGameVersionManagement
