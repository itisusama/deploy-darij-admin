import React from "react";
import  RadicalEdit from "./RadicalEdit"
import Dariggable from "./Dariggable"
import { Link } from "react-router-dom";

const AddMiniGameThreeManagement = () => {
  return (
    <div className="overflow-y-auto h-screen custom-scrollbar">
      <div className="border rounded-3xl border-[#E1E5E8] p-5 m-3">
        <div className=" font-semibold font-inter text-black text-2xl ">
          Add New
        </div>

        <div className=" mt-9">
          <label htmlFor="firstName" className="text-[#000000]">
            Phrase <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-black-500"
            placeholder="Enter the phrase"
          />
        </div>
        < RadicalEdit/>
        <Dariggable/>

        {/* BUTTIONS  */}
        <div className="relaive right-0 space-x-2 float-right mt-12">
          <Link to="/mini-game-three">
          <button className="border  text-black font-bold py-2 px-4 rounded-full w-[210px] ">
          Cancel
          </button>
          </Link>
          
          <button className="border bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
            Add 
          </button>
        </div>

      </div>
      <div className="mb-44"></div>
    </div>
  );
};

export default AddMiniGameThreeManagement;
