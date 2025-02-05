import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import GamesHeader from '../GamesHeader'
import pf from "../../../assets/OBJECTS.svg"
import Shipments from "../../../assets/Shipment-black.svg";
import One from "../../../assets/userimageone.jpeg";
import Two from "../../../assets/userimagetwo.jpeg";
import Bell from "../../../assets/bell.svg";
import ChannelVideo from "../../../assets/channelvideo.jpeg";
import ChannelIcon from "../../../assets/channelicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';

const ProfessionalVersionManagement = () => {
  const navigate = useNavigate();
  const [menuIndex, setMenuIndex] = useState(null);
      
          const toggleMenu = (index) => {
              setMenuIndex(menuIndex === index ? null : index);
          };


          const professionalVersionData = [
            { 
              question: 'How to train yourself as a professional',
              para: `A learning AI named Badrah Fat has experienced a lot of ways of learning a language, and this is what he said, and the reactions of the public were shocking.`,
              imageone: One,
              imagetwo: Two,
              channelvideo: ChannelVideo,
              videotitle: `How to train yourself as a professional`
             },
          ];

          const location = useLocation();
          const { name } = location.state || {};
          // state={{ name: name }}

  return (
    <>
      <section className="px-4">
            <GamesHeader title="Add New" path={{pathname: "/add-professional-version", state: { name: name }}} onBack="/mini-games" />
            {/* <div className="flex justify-center mt-5">
                <img src={pf} alt="Professional Version" className='w-[270px] h-[270px] ' />
            </div>
            <p className='font-inter font-[400] text-[18px] text-[#B4B4B4] leading-6 text-center p-8'>No data found</p> */}
            {professionalVersionData.map((pv, index) => (
            <div className="w-full bg-[#fffefa] rounded-[20px] border border-[##fcf1c5] p-4 px-6">
              {/* first */}
              <div className="flex justify-between ">
                {/* Icon and heading */}
                <div className="flex gap-3 justify-center items-center">
                  <div className="bg-[#fcf1c5] rounded-full p-2"><img src={Shipments} alt="shipments" className='w-[16px] h-[16px]' /></div>
                  <h2 className="font-inter text-[16px] font-[600]">{pv.question}</h2>
                </div>
                {/* Ellipse */}
                <div className="relative">
                <FontAwesomeIcon className="w-[14px] h-[14px] font-inter font-[400] bg-[#f5f5f5] rounded-full p-4 text-[#000000] cursor-pointer" icon={faEllipsisVertical} onClick={() => toggleMenu(index)}/>
                {menuIndex === index && (
             <div className="absolute right-0 top-8 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-[67px] h-[75px] z-10">
                <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => navigate("/edit-professional-version", { state: { pv, name: name } })}
                >
                    Edit
                </button>
                <button
                className="block text-[#FF3B30] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => alert("Functionality Comming soon")}
                >
                    Delete
                </button>
                </div>
                )}
                </div>
              </div>
              {/* second */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-2">
                  <img src={pv.imageone} alt="one" className="w-[83px] h-[83px] rounded-[20px]" />
                  <img src={pv.imagetwo} alt="two" className="w-[83px] h-[83px] rounded-[20px]"/>
                </div>
                <p className="font-inter font-[500] text-[14px] w-[72%]">
                A learning AI named Badrah Fat has experienced a lot of ways of learning a language, and this is what he said, <br/> <img src={Bell} alt="bell" className="inline" /> and the reactions of the public were shocking.
                </p>
              </div>
              {/* third */}
              <div className="mt-4 w-[60%] flex gap-2">
                <img src={pv.channelvideo} alt="channel-video" className="w-[126px] h-[77px] rounded-[24px]" />
                <div>
                  {/* <p className="font-inter text-[16px] font-[600]">{pv.videotitle}</p> */}
                  <div className="flex gap-2 mt-5">
                    <img src={ ChannelIcon} alt="channel-icon" className="w-[40px] h-[40px] rounded-full" />
                    <div className="flex flex-col">
                      <p className="font-inter text-[#3C3C3B] text-[14px]">channel Name</p>
                      <p className="font-inter text-[#3C3C3B] text-[11px]">usename views &nbsp; 1.1M Views &nbsp; 1 month ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
        </section>
    </>
  )
}

export default ProfessionalVersionManagement
