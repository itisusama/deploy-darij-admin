import React, { useState } from 'react';
import upload from "../../../assets/Upload.svg";
import { CiTrash } from "react-icons/ci";
import { FaFile } from "react-icons/fa";

const AddLanguage = ({ handleClose, handleAdd }) => {
  const [languageName, setLanguageName] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState({
    languageName: "",
    file: "",
  });

  const handleAddLanguage = () => {
    let isValid = true;
    let errorMessages = { languageName: "", file: "" };

    if (!languageName) {
      errorMessages.languageName = "Please enter a language name.";
      isValid = false;
    }
    if (!uploadedFile) {
      errorMessages.file = "Please upload a flag image.";
      isValid = false;
    }

    if (!isValid) {
      setErrors(errorMessages);
      return;
    }

    const newLanguage = {
      img: URL.createObjectURL(uploadedFile),
      text: languageName,
    };
    handleAdd(newLanguage);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      setUploadedFile(file);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        setUploadProgress(progress);
      } else {
        clearInterval(interval);
        setUploading(false);
      }
    }, 500);
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  return (
    <div className="absolute right-0 p-6 border rounded-md shadow-lg w-[560px] h-screen bg-white z-20">
      {/* Close Button */}
      <button
        className="absolute top-4 right-6 text-gray-600 hover:text-gray-900 text-4xl font-bold"
        onClick={handleClose}
      >
        &times;
      </button>

      {/* Content */}
      <h1 className="font-inter font-[600] text-[24px] leading-8">Add Language</h1>
      <br />
      <br />
      <label htmlFor="add-lang" className='font-inter font-[500] text-[]'>Add Language<span className="text-red-500 ml-1">*</span></label>
      <input
        type="text"
        id='add-lang'
        placeholder='English'
        onChange={(e) => setLanguageName(e.target.value)}
        className='w-[512px] h-[44px] font-inter font-[400] py-[10px] px-[14px] border rounded-lg border-[#E1E1E1] focus:outline-none'
      />
      {errors.languageName && (
        <span className="text-red-500 text-sm">{errors.languageName}</span>
      )}
      <br /><br /><br />

      {/* Upload Flag or Display File */}
      {uploading ? (
        <div className="w-[512px] h-[100px] border-none bg-[#FFF1B2] rounded-[7px] flex flex-col justify-between p-3">
          {/* Top Section: File Name */}
          <div className="ml-10 mt-4">
            <span className="font-inter text-[14px] font-semibold leading-[20px] text-black">
              {uploadedFile.name}
            </span>
          </div>

          {/* Middle Section: Progress Bar and Trash Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center w-[80%]">
              <FaFile className="w-[26px] h-[26px] text-[#EC555A] bg-white rounded-full p-1 mr-4" />
              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
                <div
                  className="bg-[#019A5A] h-2 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={handleDeleteFile}
              className="ml-4 text-red-500 hover:text-red-700 flex-shrink-0"
            >
              <CiTrash className="w-[24px] h-[24px] text-[#EC555A]" />
            </button>
          </div>

          {/* Bottom Section: Upload Percentage */}
          <span className="font-inter text-[12px] text-gray-600 text-right mt-1">
            {uploadProgress}%
          </span>
        </div>
      ) : uploadedFile ? (
        <div className="w-[512px] h-[72px] border-none bg-[#FFF1B2] rounded-[7px] relative flex items-center justify-between px-4 py-2">
          <FaFile className="w-[26px] h-[26px] text-[#EC555A] text-2xl bg-white rounded-full p-1" />
          <span className="font-inter text-[14px] font-semibold leading-[20px] text-black ml-2">
            {uploadedFile.name}
          </span>
          <button onClick={handleDeleteFile} className="text-red-500 hover:text-red-700">
            <CiTrash className="w-[24px] h-[24px] text-[#EC555A]" />
          </button>
        </div>
      ) : (
        <div className="w-[517px] h-[140px] bg-[#F8F8F8] border-[0.88px] border-black border-dashed rounded-[7px] relative flex items-center justify-center">
          <button
            onClick={handleUploadClick}
            className="absolute top-[32px] left-[237.5px] w-[42px] h-[42px] bg-[#FFC600] rounded-full flex items-center justify-center"
          >
            <img
              src={upload}
              alt="Upload Icon"
              className="w-6 h-6"
            />
          </button>
          <input type="file" id='fileInput' onChange={handleFileChange} accept='image/*' className='hidden' />
          <span className="absolute top-[88px] left-[189px] text-center font-inter text-[14px] font-semibold leading-[20px] text-black">
            Upload Country Flag
          </span>
        </div>
      )}
      {errors.file && (
        <span className="text-red-500 text-sm">{errors.file}</span>
      )}

      <div className="flex justify-end mt-32">
        <button
          onClick={handleAddLanguage}
          className="w-[179px] h-[44px] py-[10px] px-5 rounded-[100px] bg-[#FFC600] text-black font-inter font-[600] text-[14px] leading-6"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLanguage;