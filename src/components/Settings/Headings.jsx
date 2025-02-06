import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { settingData } from "./SettingsData";
import My_Profile from "./My_Profile";
import Add_banner from "./Add_banner";
import Contactus from "./Contactus";

const Headings = () => {
  const location = useLocation();
  
  // Check if the user came from the Back button
  const [getData, setGetData] = useState(
    location.state?.fromBack ? "Add Banner" : "My Profile"
  );

  const handleClick = (title) => {
    setGetData(title);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="text-black py-4">
        <ul className="flex space-x-8 pl-5">
          {settingData.map((data, index) => (
            <div onClick={() => handleClick(data.title)} key={index}>
              <li
                className={`hover:font-semibold cursor-pointer ${
                  getData === data.title
                    ? "text-black font-semibold underline underline-offset-8 decoration-4"
                    : "text-[#2B2A28]"
                }`}
              >
                {data.title}
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="bg-white m-4">
        {getData === "My Profile" && <My_Profile />}
        {getData === "Add Banner" && <Add_banner />}
        {getData === "Contact Us" && <Contactus />}
      </div>
    </div>
  );
};

export default Headings;
