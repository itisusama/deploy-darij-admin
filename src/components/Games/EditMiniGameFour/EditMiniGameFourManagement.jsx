import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bell from "../../../assets/yellowbell.svg"
import Add from "../../../assets/addplus.svg"

const EditMiniGameFourManagement = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="px-6 overflow-y-auto custom-scrollbar">
        <div className='relative p-6 bg-white rounded-[30px] h-fit border overflow-hidden mb-24'>
         <h2 className='font-inter font-[600] text-[24px]'>Edit</h2>
            <div className="mt-4">
                <p className='font-inter text-[16px] font-[400]'>Number in Text <span className='text-red-600'>*</span></p>
                <input type="text" name="number" id="question" value="Seventy four lac fifty eight thousand seven hundred and eighty seven" className='w-full border rounded-md p-2'/>
            </div>
            
        {/* Audio */}
        <div className='mt-4'>
            <div className='flex gap-3 items-center cursor-pointer'>
                <img src={Add} alt="add plus" className='w-[20px] h-[20px]' />
                <p className='font-inter text-[16px] font-[400] underline text-[#e0e0e0]'>Add Audio</p>
            </div>
            <img src={Bell} alt="yellow bell" className='w-[120px] h-[120px]' />
        </div>
        {/* Audio */}
        {/* Answer */}
        <h2 className='font-inter font-[600] mt-4 text-[24px]'>Answer</h2>
        <div className="mt-4">
          <p className='font-inter text-[16px] font-[400]'>Correct Answer <span className='text-red-600'>*</span></p>
          <input type="number" name="answer" id="answer" value="7458787" className='w-full border rounded-md p-2' placeholder='Enter valid URL' />
        </div>
        {/* Answer */}
        {/* START:: Buttons */}
        <div className="relaive right-0 space-x-2 float-right mt-8">
                  <Link to="/mini-game-four">
                  <button
                  // onClick={handleNextClick}
                  className="rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                  >
                  Cancel
                  </button>
                  </Link>
                  <button
                  // onClick={handleNextClick}
                  className="rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                  >
                  Save Changes
                  </button>
                  </div>
                  {/* END:: Buttons */}
        </div>
        
    </section>
        </>
    )
}

export default EditMiniGameFourManagement;
