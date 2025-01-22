import React from "react";
import Cemra from "../../assets/Cemra.svg";
import Pen from "../../assets/pen.svg";
import Audio from "../../assets/audio.svg";
import Plusicon from "../../assets/plusicon.svg";

const Uploadwordimg = () => {
  return (
    <div>
      <div className="border rounded-3xl bg-[#FFFFFF] text-[#D0D5DD]">
        <div className=" flex ">
          <div className="ml-9 mt-9 mr-9 ">
            <div className="h-[125px] w-[125px] bg-[#F9F9F9] flex justify-center  items-center rounded-lg">
              <img src={Cemra} alt="" className=" items-center" />
            </div>
            <div className=" flex pt-2">
              <div className=" bg-[#F8F8F8] rounded ">
                <img src={Pen} alt="" />
              </div>
              <div className="font-inter underline text-black cursor-pointer">
                Upload Image{" "}
              </div>
            </div>
          </div>
          <div className="mt-9 flex items-center flex-col gap-3">
            <div className=" bg-[#E2E2E2] h-[120px] w-[120px] rounded-full flex justify-center items-center">
              {" "}
              <img src={Audio} alt="" className="" />
            </div>

            <div className=" flex">
              <div className="">
                {" "}
                <img src={Plusicon} alt="" />
              </div>
              <div className=" underline text-[#000000] pl-2"> Add Audio</div>
            </div>
          </div>
        </div>

        <div className="ml-9 mt-2">
          <label htmlFor="text" className="text-[#000000]">
            French Word<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Word in French "
            
            className="w-[97%] px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:[#D0D5DD]"
            
          />
        </div>
        <div className="ml-9 my-4 ">
          <label htmlFor="text" className="text-[#000000] block">
            Translated Word<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter word in translated language "
          
            className="w-[97%] px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:[#D0D5DD]"
          
          />
        </div>
      </div>
    </div>
  );
};

export default Uploadwordimg;
