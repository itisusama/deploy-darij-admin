import React from 'react'
import Uparrow from "../../../assets/Uparrow.svg";
import LanguageSelector from "../LanguageSelector"
import { Link } from 'react-router-dom';

const AddBannerManagement = () => {
  return (
    <section className="overflow-y-auto h-screen custom-scrollbar">
    <div className="border rounded-3xl border-gray-300 p-4 h-auto">
      <div className=" font-inter font-semibold">
        <h2>Add Banner </h2>
      </div>
      <div className="mt-5">
        <LanguageSelector/>
  

        <div className="mt-8 h-[400px]">
          <div className=" font-semibold mb-3"> Add Image</div>

          <div className="flex justify-center items-center w-[100%] h-[140px] border-dashed border-2 border-[#000000] rounded-lg">
            <div className="flex flex-col items-center">
              <button className=" rounded-full bg-yellow-400 p-2">
                {" "}
                <img src={Uparrow} alt="" />{" "}
              </button>

              <p className="mt-2 font-inter  text[#000000] ">Upload Image</p>
            </div>
          </div>
          <div className='mt-48 float-end flex gap-3'>
          <Link to="/settings" className='cursor-pointer'>
          <button className="border  text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
            Back
          </button>
          </Link>
          <button className="border bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
            Save
          </button>
        </div>
        </div>

      </div>
    </div>
    <div className="mb-44"></div>
    </section>
  )
}

export default AddBannerManagement
