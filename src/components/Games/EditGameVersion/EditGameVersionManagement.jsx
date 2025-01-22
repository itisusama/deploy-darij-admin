import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";

const EditGameVersionManagement = () => {
    const location = useLocation();
    const { version } = location.state || {};
    const { name } = location.state || {};
  return (
    <div className='px-8'>
     <h2 className='font-inter font-[600] text-[24px]'>Edit Game Version</h2>
      {/* <div>
        <h2>{version.name}</h2>
        <p>{version.tag}</p>
        <img src={version.img} alt={version.name} />
      </div> */}
        <div className="w-full flex justify-center items-center">
            <div>
                <img src={version.img} alt="" className="h-[160px] w-[160px] rounded-full" />
            </div>
            <div className=" bg-black h-10 w-10 border rounded-full border-white flex justify-center items-center absolute ml-[110px] mt-[100px] cursor-pointer">
            <FaPencilAlt className='text-white' />
            </div>
        </div>
        {/* Start:: Form */}
        <div>
            <form>
                <label htmlFor="version-title" className='text-[#9DA0B6] text-[16px]'>Version Title</label>
                <input type="text" name="version-title" id="version-title" value={version.name} className='w-full p-2 rounded-md border' />

                <div className='w-full mt-4 flex gap-5'>
                    <div className='w-[50%]'>
                    <label htmlFor="version-title" className='text-[#9DA0B6] text-[16px]'>Locked</label>
                    <input type="text" name="version-tag" id="version-tag" value={version.tag} className='w-full p-2 rounded-md border' />
                    </div>
                    <div className='w-[50%]'>
                    <label htmlFor="word-select" className='text-[#9DA0B6] text-[16px]'>Select Words</label>
                    <select id="words" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" >
                        <option selected>1000</option>
                        <option value="2000">2000</option>
                        <option value="3000">3000</option>
                        <option value="4000">4000</option>
                        <option value="5000">5000</option>
                    </select>
                    </div>
                </div>
                {/* START:: Buttons */}
                <div>
                <Link to="/mini-game-two">
                <button
                    // onClick={handleNextClick}
                    className="absolute right-[18rem] bottom-11 rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                >
                    Cancel
                </button>
                </Link>
                <button
                    // onClick={handleNextClick}
                    className="absolute right-11 bottom-11 rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                >
                    Save
                </button>
                </div>
                {/* END:: Buttons */}
            </form>
        </div>
        {/* END:: Form */}
  </div>
  )
}

export default EditGameVersionManagement
