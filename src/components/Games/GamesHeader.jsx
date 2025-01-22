import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const GamesHeader = ({ title, path, onBack, onClick }) => {
    let navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(); // Trigger custom onClick if provided
        } else if (path) {
            if (typeof path === 'object') {
                // Handle path as an object (e.g., with pathname and state)
                navigate(path.pathname, { state: path.state });
            } else {
                // Handle path as a simple string
                navigate(path);
            }
        }
    };

    const handleBack = () => {
        navigate(onBack); // This will navigate to the onBack route.
    }

    return (
        <div className="flex justify-between mx-4 mb-4">
            {/* First Half */}
            <div className="flex items-center">
                <IoIosArrowRoundBack 
                    onClick={handleBack} 
                    className="w-[28px] h-[28px] text-[#000000] cursor-pointer" 
                />
                <p className="pl-3 font-inter font-[600] text-[18px] leading-6">
                    Profession Version 
                </p>
            </div>

            {/* Second Half */}
            <div className="flex items-center mt-2">
                <div className="relative mt-2">
                    <AiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#626262] w-[18px] h-[18px]" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[323px] h-[40px] pl-10 pr-4 py-2 font-inter font-[400] text-[12px] leading-5 placeholder:text-[#626262] border border-[#E1E5E8] rounded-[30px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={handleClick}  
                    className="w-[210px] h-[44px]  rounded-[100px] px-4 py-2 ml-8 bg-[#FFC600] font-[600] text-[16px] leading-[24px] flex items-center justify-center space-x-2"
                >
                    <IoMdAdd className="text-black" />
                    <span>{title}</span>
                </button>
            </div>
        </div>
    );
};

export default GamesHeader;
