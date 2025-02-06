import React from "react";
import { Iconword } from "../../../Data/Iconword";

const Dariggable = () => {
  return (
    <div>
      <div className="mt-4 mb-16">
        <div className=" mb-1">
          <label htmlFor="">
            Add Draggable Cards <span className="text-red-500">*</span>
          </label>
        </div>
        <div className=" flex gap-3">
          <input
            type="text"
            className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-black-500"
            
          />
          <button className="w-[143px] h-[40px] flex justify-center items-center border-2 border-yellow-500 bg-[#FFF1B2] rounded" onClick={()=> alert("Functionality will be added soon")}>
            Add New Card
          </button>
        </div>

        <div className="flex flex-row gap-3">
          {/* {Iconword.map((item, index) => (
            <div className="flex flex-row cursor-pointer mt-3" key={index}>
              <div className=" flex border rounded-lg bg-[#FFF1B2] w-[76px] h-[28px] justify-center items-center gap-2 ">
                <div className="">
                  {" "}
                  <img src={item.icon} alt="" />
                </div>
                <div className=" text-black font-inter ">{item.text}</div>
                <div className="">
                  {" "}
                  <img src={item.Crossimg} alt="" />
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Dariggable;
