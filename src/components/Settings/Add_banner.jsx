import React, { useState } from "react";
import Banner from "../../assets/Banner.jpg";
import Threedot from "../../assets/Threedot.svg";
// import Update_banner from "./Update_banner";
import { Link, useNavigate } from "react-router-dom";

const bannerItems = [
  {
    id: 1,
    banItems: "English",
    icon: Threedot,
    img: Banner,
  },
  {
    id: 2,
    banItems: "English",
    icon: Threedot,
    img: Banner,
  },
  {
    id: 3,
    banItems: "English",
    icon: Threedot,
    img: Banner,
  },
  {
    id: 4,
    banItems: "English",
    icon: Threedot,
    img: Banner,
  },
];

const Add_banner = () => {
  const [compChange, setChangeComp] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const toggleDropdown = (id) => {
    setDropdownVisible((prev) => (prev === id ? null : id));
  };

  const handleDelete = (banItem) => {
    console.log(`Delete banner: ${banItem}`);
    alert("Functionality will be added soon");
  };
  return (
    <div className="">
      <div className=" flex justify-between py-2">
        <div className=" font-semibold font-inter ">Banners</div>
        <div className="">
          {/* Add button  */}
          <Link to="/addbanner" className="cursor-pointer">
          <button
            // onClick={() => setChangeComp(true)}
            className='"bg-yellow-400 text-black font-semibold font-inter py-2 px-4 rounded-full bg-yellow-400 hover:bg-yellow-600'
          >
            {" "}
            + New Banners
          </button>
          </Link>
        </div>
      </div>
      {/* Banner Section  */}
      {!compChange ? (
        <div className="h-screen overflow-y-auto custom-scrollbar">
          {bannerItems.map((item) => {
            return (
              <div
                className="flex items-center gap-3 relative rounded-3xl my-3 bg-slate-50"
                key={item.id}
              >
                <div className="">
                  {" "}
                  <img
                    src={item.img}
                    alt=""
                    className="h-fit w-[100px] rounded-3xl"
                  />
                </div>
                <div className="font-semibold font-inter text-[#2B2A28]">
                  {item.banItems}
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={item.icon}
                    alt=""
                    className="absolute right-6 top-4 cursor-pointer w-[14px] h-[14px]"
                    onClick={() => toggleDropdown(item.id)}
                  />
                  {/* Dropdown Menu */}
              {dropdownVisible === item.id && (
                <div className="absolute top-8 right-0 w-fit bg-white border rounded-lg shadow-md z-10">
                  <button
                    onClick={() => handleDelete(item.banItems)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
                  >
                    Delete
                  </button>
                </div>
              )}
                </div>
              </div>
            );
          })}
          <div className="mb-60"></div>
        </div>
      ) : (
        <div>
          {/* <Update_banner /> */}
        </div>
      )}
    </div>
  );
};

export default Add_banner;