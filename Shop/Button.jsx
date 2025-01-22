import React from 'react';
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Button = ({ title, path, onClick }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-[210px] h-[44px] mt-5 rounded-[100px] px-4 py-2 bg-[#FFC600] font-[600] text-[16px] leading-[24px] flex items-center justify-center space-x-2"
      >
        <IoMdAdd className="text-black" />
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
