import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../../assets/Cemra.svg";
import { FaPlus } from "react-icons/fa6";

const AddGameVersionManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state || {}; // Get name from state if available

  const [selectedFile, setSelectedFile] = useState(null);

  // Ensure name is retrieved from localStorage on mount
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (!name && storedName) {
      navigate("/mini-game-two", { state: { name: storedName }, replace: true });
    }
  }, [name, navigate]);

  // Handle image selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Cancel button navigation
  const handleBack = () => {
    const storedName = localStorage.getItem("name");
    navigate("/mini-game-two", { state: { name: storedName }, replace: true });
  };

  return (
    <div className="px-8">
      <h2 className="font-inter font-[600] text-[24px]">Add Game Version</h2>
      
      {/* Profile Image Upload */}
      <div className="w-full flex justify-center items-center">
        <div className="h-[160px] w-[160px] border rounded-full overflow-hidden">
          <img
            src={selectedFile || Profile}
            alt="version-image"
            className="grayscale-0 rounded-full w-full h-full object-cover"
          />
        </div>

        <label
          htmlFor="fileInput"
          className="bg-white h-10 w-10 border rounded-full border-white flex justify-center items-center absolute ml-[110px] mt-[100px] cursor-pointer"
        >
          <FaPlus className="text-black" />
        </label>

        <input
          id="fileInput"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>

      {/* Form */}
      <form>
        <label htmlFor="version-title" className="text-[#9DA0B6] text-[16px]">
          Version Title
        </label>
        <input
          type="text"
          name="version-title"
          id="version-title"
          className="w-full p-2 rounded-md border"
          placeholder="Enter a title of version"
        />

        <div className="w-full mt-4 flex gap-5">
          <div className="w-[50%]">
            <label htmlFor="version-tag" className="text-[#9DA0B6] text-[16px]">
              Locked
            </label>
            <input
              type="text"
              name="version-tag"
              id="version-tag"
              className="w-full p-2 rounded-md border"
              placeholder="Enter a text to show unlocked condition"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="word-select" className="text-[#9DA0B6] text-[16px]">
              Select Words
            </label>
            <input
              type="number"
              id="numberOfWords"
              name="numberOfWords"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value="0"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div>
          <button
            type="button"
            onClick={handleBack}
            className="absolute right-[22rem] bottom-11 rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => alert("Functionality will be added soon")}
            className="absolute right-11 bottom-11 rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
          >
            Add Version
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGameVersionManagement;
