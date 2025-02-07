import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userImage from "../../../assets/Group.svg";
import StatCards from "./StatCards";

const UsersProfileManagement = () => {
  const location = useLocation();
  const { user } = location.state;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleStatsClick = (index) => {
    setActiveIndex(index);
  };
  const navigate = useNavigate();
  return (
    <section className="flex flex-col h-screen overflow-hidden">
      <div className="bg-white rounded-lg p-2 overflow-y-auto flex-1 custom-scrollbar">
        {/* START:: Top */}
        <div className="flex justify-between py-5">
          <div className="flex gap-3 items-center">
            <img
              src={userImage}
              alt="user-image"
              className="w-20 h-20 rounded-full"
            />
            <h2 className="font-semibold text-[24px]">{user.name}</h2>
          </div>
          <div>
            <button
              onClick={() => navigate("/users", { replace: true })}
              className="inline-flex items-center justify-center py-2 px-16 border border-black rounded-full"
            >
              Back
            </button>
          </div>
        </div>
        {/* END:: Top */}
        {/* START:: User Info */}
        <div className="mt-4">
          <table className="w-full text-left">
            <thead className=" bg-[#ffffff] text-[#000000]">
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
            </thead>
            <tbody className="bg-white text-[#000000]">
              <tr className="text-[14px]">
                <td>Phone Number</td>
                <td>0315 1045125</td>
              </tr>
              <tr className="text-[14px]">
                <td>Age</td>
                <td>28</td>
              </tr>
              <tr>
                <td className="text-[14px]">Learning Language</td>
                <td className="flex gap-2 cursor-pointer">
                  {user.languages.map((lang, index) => (
                    <div
                      key={index}
                      onClick={() => handleStatsClick(index)}
                      className={`p-1 rounded-full justify-start items-center flex gap-2 pr-16 border cursor-pointer ${
                        activeIndex === index ? "bg-[#ffd200]" : "bg-[#f8f8f8]"
                      }`}
                    >
                      <img
                        src={lang}
                        alt={`language-${index}`}
                        className="rounded-full w-[24px] h-[24px]"
                      />
                      <p className="text-black text-[14px]">
                        {index === 0
                          ? "English"
                          : index === 1
                          ? "Arabic"
                          : "Other"}
                      </p>{" "}
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* END:: User Info */}

        {/* START:: Subscription Plan */}
        <div className="mt-2">
          <h2 className="font-semibold text-[16px]">Subscription Plan</h2>
          <div className="border border-[#ffe75a] bg-[#fff1b2] rounded-3xl p-5">
            <h3 className="text-[#000000] text-[16px]">8.95€/month</h3>
            <p className="text-xs text-[#414042] mt-4 text-[12px]">
              ✔ Language courses for beginners (level A1/A2, 1200 words) <br />
              ✔ Language courses for advanced (level B1/B2, 2600 words) <br />
              ✔ Advanced language courses (level C1/C2, 4000 words) <br />✔
              Access to mini-games and dialogues, podcasts, learning methods{" "}
              <br />
              ✔ Possibility to speak the language with a single payment <br />
              ✔ 15% for inviting friends - less stress <br />
            </p>
          </div>
        </div>
        {/* END:: Subscription Plan */}

        {/* START: STATS */}
        <div className="mt-2">
          <h2 className="font-semibold text-[16px]">
            Statistics of English Leaning Language
          </h2>
          <StatCards
            LeftCardNumber={9}
            LeftCardName="Number of days attended"
            RightCardNumber="357th"
          />
          <StatCards
            LeftCardNumber={1252}
            LeftCardName="Number of long sessions"
            RightCardNumber="408th"
          />
          <StatCards
            LeftCardNumber="12h 37m"
            LeftCardName="Learning time"
            RightCardNumber="1192nd"
          />
          <StatCards
            LeftCardNumber="12h 37m"
            LeftCardName="Learning word"
            RightCardNumber="1192nd"
          />
        </div>
        {/* END: STATS */}

        {/* START:: Daywise */}
        <div className="mt-2">
          <h2 className="font-semibold text-[16px]">Day-Wise Breakdown</h2>
          {/* Block 1 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D0
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              23 min
            </div>
          </div>
          {/* Block 2 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D1
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              10 min
            </div>
          </div>
          {/* Block 3 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D2
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              3 min
            </div>
          </div>
          {/* Block 4 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D3
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              12 min
            </div>
          </div>
          {/* Block 5 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D4
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              {" "}
              -{" "}
            </div>
          </div>
          {/* Block 6 */}
          <div className="flex gap-2 mt-2">
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              D5
            </div>
            <div className="bg-[#fff7d2] rounded-lg w-[50%] p-2 flex text-[16px] justify-center items-center">
              {" "}
              -{" "}
            </div>
          </div>
        </div>
        {/* END:: Daywise */}
        <div className="mt-24"></div>
      </div>
    </section>
  );
};

export default UsersProfileManagement;
