import React, { useState } from "react";
import { settingData } from "./SettingsData";
import My_Profile from "./My_Profile";
import Add_banner from "./Add_banner";
import Contactus from "./Contactus";

const Headings = () => {
  console.log(settingData, "setting daat");
  const [getData, setGetData] = useState("My Profile");

  const handleClick = (title) => {
    setGetData(title);
  };

  console.log(getData, "get data");

  return (
    <div className="flex flex-col h-full">
      <div className=" text-black py-4">
        <ul className="flex space-x-8 pl-5">
          {settingData.map((data, index) => {
            return (
              <div
                onClick={() => handleClick(data.title)}
                key={index}
                className=""
              >
                <li className={`hover:font-semibold cursor-pointer ${getData === data.title ? "text-black font-semibold underline underline-offset-8 decoration-4" : "text-[#2B2A28]"}`}>
                  {data.title}
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      {/* <ul className="flex space-x-8 pl-5">
        <li className="hover:underline hover:font-bold cursor-pointer">My Profile </li>
        <li className="hover:underline hover:font-bold cursor-pointer">Add Banner</li>
        <li className="hover:underline cursor-pointer hover:font-bold">Term & Conditions</li>
        <li className="hover:underline cursor-pointer hover:font-bold">Privacy Policy</li>
        <li className="hover:underline cursor-pointer hover:font-bold ">Contact Us</li>
      </ul> */}
      <div className=" bg-white m-4">
        {getData === "My Profile" && <My_Profile />}
        {getData === "Add Banner" && < Add_banner />}
        {getData === "Contact Us" && < Contactus />}
        

      </div>
    </div>
  );
};
export default Headings;