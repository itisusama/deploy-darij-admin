import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

const EditGameVersionManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { version } = location.state || {};
  const { name } = location.state || {};
  
  const [selectedFile, setSelectedFile] = useState(null);
  
  // Ensure name is retrieved from localStorage on mount
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (!name && storedName) {
      navigate("/mini-game-two", { state: { name: storedName }, replace: true });
    }
  }, [name, navigate]);

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

  const handleBack = () => {
    const storedName = localStorage.getItem("name");
    navigate("/mini-game-two", { state: { name: storedName }, replace: true });
  };

  return (
    <div className="px-8">
      <h2 className="font-inter font-[600] text-[24px]">Edit Game Version</h2>

      {/* Profile Image Upload */}
      <div className="w-full flex justify-center items-center">
        <div className="h-[160px] w-[160px] border rounded-full overflow-hidden">
          <img
            src={selectedFile || version?.img || ""}
            alt="version-image"
            className="grayscale-0 rounded-full w-full h-full object-cover"
          />
        </div>
        <label
          htmlFor="fileInput"
          className="bg-black h-10 w-10 border rounded-full border-white flex justify-center items-center absolute ml-[110px] mt-[100px] cursor-pointer"
        >
          <FaPencilAlt className="text-white" />
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
          defaultValue={version?.name || ""}
          className="w-full p-2 rounded-md border"
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
              defaultValue={version?.tag || ""}
              className="w-full p-2 rounded-md border"
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
              defaultValue="0"
              required
            />
          </div>
        </div>

        {/* Buttons */}
        <div>
          <button
            type="button"
            onClick={handleBack}
            className="absolute right-[18rem] bottom-11 rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => alert("Functionality will be added soon")}
            className="absolute right-11 bottom-11 rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGameVersionManagement;
