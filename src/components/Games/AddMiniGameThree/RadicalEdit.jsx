import React from "react";
import { Iconword } from "../../../Data/Iconword";
import { Icon } from "@mui/material";

const RadicalEdit = () => {
  return (
    <div className=" mt-8">
      <label htmlFor="firstName" className="text-[#000000]">
        Text in French
      </label>
      <div className=" flex gap-5">
        <div className=" space-y-5">
          <div className="">
            <input
              type="text"
              id="text"
              className="w-[141px] px-3 py-2 border-dashed border text-black border-black rounded-md focus:outline-none focus:ring-1"
              placeholder=""
              readOnly
            />
          </div>
          <div className="">
            <button className=" text-black font-semibold font-inter h-[44px] w-[64px] mr-1 rounded-lg  bg-yellow-400 hover:bg-yellow-600 justify-between items-end  ">
              Stuck
            </button>
          </div>
        </div>

        <div className="">
          <input
            type="text"
            className="w-[247px] px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-1"
            placeholder="Enter the radical"
          />
        </div>

        <div className="space-y-5">
          <div className="">
            <input
              type="text"
              className="w-[141px] px-3 py-2 border-dashed border border-black text-black rounded-md focus:outline-none focus:ring-1"
              placeholder=""
              readOnly
            />
          </div>
          <div className="">
            <button className=" text-black font-semibold font-inter h-[44px] w-[64px] mr-1 rounded-lg border  hover:bg-yellow-600  justify-between items-end  ">
              Stuck
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        
        {/* {Iconword.map((item, index) => (
          <div className="flex flex-row cursor-pointer mt-7" key={index} onClick={()=> alert("Functionality will be added soon")}>
            <div className=" flex border rounded-lg w-[57px] h-[28px] justify-center items-center gap-2 ">
              <div className="">
                {" "}
                <img src={item.icon} alt="" />
              </div>
              <div className=" text-black font-inter ">{item.text}</div>
            </div>
          </div>
        ))} */}
      </div>
      
    </div>
  );
};

export default RadicalEdit;
