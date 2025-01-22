import React, { useState } from "react";
import Banner from "../../assets/Banner.jpg";
import Threedot from "../../assets/Threedot.svg";
// import Update_banner from "./Update_banner";
import { Link } from "react-router-dom";

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
        <div className="h-screen overflow-y-auto">
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
                    className="absolute right-4  cursor-pointer "
                  />
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