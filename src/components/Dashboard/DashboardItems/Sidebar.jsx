import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo2.png";
import Home from "../../assets/Home.png";
import User from "../../assets/User.png";
import Games from "../../assets/Games.png";
import Shop from "../../assets/Buy.png";
import Learn from "../../assets/Learn.png";
import Sitting from "../../assets/Sitting.png";
import LeftArrow from "../../../assets/Leftarrow.png";
import Logout from "../../assets/logout.png";

const Sidebar = () => {
  return (
    <div
      className={`${
        toggle ? "w-[4rem]" : "w-1/6"
      } bg-black flex flex-col h-screen  duration-300 sticky`}
    >
      <div className="flex justify-evenly">
        <div
          className={`${toggle ? "hidden" : ""} mt-[12px] h-[56px] w-[56px]`}
        >
          <img src={logo} alt="Logo" />
        </div>

        <div
          className="  pt-3 pl-5 my-5 transition-500 relative rounded-full hover:bg-[#191919] cursor-pointer items-center"
          onClick={() => setToggle(!toggle)}
        >
          <img src={LeftArrow} alt="" className="h-[16px] w-[16px]" />
        </div>
      </div>
      <div>
        <ul className="space-y-4 p-4">
          {
            sidebarItems.map((item) => {
              return(
                <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer" key={item.id}>
                <img src={item.icon} alt="Home" className="w-6 h-6" />
                {!toggle && (
                  <span className="text-white font-semibold">{item.navItem}</span>
                )}
              </li>
              )
            })
          }
     

          {/* <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer">
            <img src={User} alt="Home" className="w-6 h-6" />
            {!toggle && <span className="text-white font-semibold">User</span>}
          </li>

          <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer">
            <img src={Games} alt="Home" className="w-6 h-6" />
            {!toggle && <span className="text-white font-semibold">Games</span>}
          </li>

          <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer">
            <img src={Shop} alt="Home" className="w-6 h-6" />
            {!toggle && <span className="text-white font-semibold">Shop</span>}
          </li>

          <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer">
            <img src={Learn} alt="Home" className="w-6 h-6" />
            {!toggle && <span className="text-white font-semibold">Learn</span>}
          </li>

          <li className="flex items-center space-x-4 p-2 rounded-lg hover:bg-[#191919] cursor-pointer">
            <img src={Sitting} alt="Home" className="w-6 h-6" />
            <span className="text-white font-semibold">Settings</span>
          </li>
        </ul>
      </div>
      {/* START:: Logout Pop Up */}
      </ul>
      </div>
      {logoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg shadow-lg px-10 sm:px-14 py-6 sm:py-8">
          <p className="mb-4 text-lg sm:text-xl text-[#19191A] font-medium text-center">
            Are you sure you want to <br /> logout?
          </p>
          <div className="flex justify-center gap-5 sm:gap-7 pt-4">
            <button
              className="px-6 sm:px-8 py-2 text-[#19191A] rounded-md border hover:shadow-md border-gray-300"
              onClick={()=>setLogoutPopup(false)}
            >
              No
            </button>
            <button
              className="px-6 sm:px-8 py-2 bg-[#ffd202] text-white hover:shadow-md rounded-md"
              onClick={handleLogOut}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      )}
      {/* END:: Logout Pop Up */}
    </div>
  );
};
export default Sidebar;
