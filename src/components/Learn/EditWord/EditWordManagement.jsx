
import React from "react";
import Uploadwordimg from "../../Learn/Uploadwordimg"
import { Link } from "react-router-dom";



const EditWordManagement = () => {
  return (
    <div className="overflow-y-auto h-screen custom-scrollbar">
      <div className=" border rounded-3xl m-2 p-4 h-[41rem]">
        <div className=" font-inter font-semibold text-xl">Edit</div>
        <div className="mt-4 mb-2">
          <label htmlFor="text" className="text-[#000000]">
            Word ID<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border bg-[#F9F9F9] rounded-md focus:outline-none focus:ring-1 focus:[#D0D5DD]"
            placeholder="01"
            maxlength="50"
          />
        </div>
        <div className=""> <Uploadwordimg/> </div>

        <div className="relative space-x-2 float-right mt-4">
          <Link to="/word-learn">
          <button className="border  text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
          Chancel
          </button>
          </Link>
          <button className="border bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px]" onClick={()=> alert("Functionality will be added soon")}>
            Save Change 
          </button>
        </div>
      </div>
      <div className="mb-24"></div>
    </div>
  )
}

export default EditWordManagement
