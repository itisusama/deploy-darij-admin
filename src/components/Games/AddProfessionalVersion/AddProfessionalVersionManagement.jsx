import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Text from "../../../assets/Text.svg";
import Microphone from "../../../assets/Microphone.svg";
import Image from "../../../assets/Image.svg";
import Uparrow from "../../../assets/Uparrow.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Bell from "../../../assets/yellowbell.svg";
import imageone from "../../../assets/userimageone.jpeg";
import imagetwo from "../../../assets/userimagetwo.jpeg";
import { RiDeleteBin5Fill } from "react-icons/ri";

const AddProfessionalVersionManagement = () => {
  const location = useLocation();
  const { pv } = location.state || {};
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [{ name: Text }, { name: Microphone }, { name: Image }];
  const handleCardClick = (index) => {
    setActiveIndex(index);
    alert("Functionality will be added soon");
  };
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };
  const { name } = location.state || {};

  const [url, setUrl] = useState("");
  const [isUrlValid, setIsUrlValid] = useState(true);

  const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
  
    const handleFileChange = (event) => {
      const file = event.target.files[0]; // Get the selected file
  
      if (file) {
        setSelectedFile(file);
  
        // Generate a preview URL (for images/videos)
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      }
    };

  const validateUrl = (value) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-zA-Z\\d_]*)?$",
      "i"
    );
    return urlPattern.test(value);
  };

  const handleUrlChange = (event) => {
    const value = event.target.value;
    setUrl(value);
    setIsUrlValid(validateUrl(value));
  };

  return (
    <section className="px-4 overflow-y-auto custom-scrollbar">
      <div className="p-6 bg-white rounded-[30px] border mb-24 pb-24">
        <h2 className="font-inter font-[600] text-[24px]">Add</h2>
        <div className="mt-4">
          <p className="font-inter text-[16px] font-[400]">
            Add Question <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="question"
            id="question"
            className="w-full border rounded-md p-2"
            placeholder="Enter the question"
          />
        </div>
        {/* active icons */}
        <section className="flex gap-3 items-center mt-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`w-[50px] h-[50px] bg-white rounded-md flex flex-col justify-center items-center gap-6 cursor-pointer border ${
                activeIndex === index ? "border-3 border-[#ffc500]" : ""
              }`}
            >
              <img src={icon.name} alt="icon" />
            </div>
          ))}
        </section>
        {/* active icons */}
        {/* Text Editor */}
        <div className="mt-4">
          {/* Text Editor Section */}
          <div className="relative w-auto h-[247px] mt-4 bg-[#FCFCFD] border-2 border-[#FCFCFD] rounded-md">
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              className="h-[203px] bg-[#FCFCFD]  rounded-md"
              placeholder="Add Details Here ....."
            />
            <section className="absolute top-14 lg:left-3">
              <section className="flex items-center gap-2">
                <div className="bg-white p-4 rounded-[24px] border w-[100%] lg:w-[80%]">
                  <p className="text-[16px] font-inter font-[400]">
                    A learning AI named Badrah Fat has experienced a lot of ways
                    of learning a language, and the reactions of the public were
                    shocking.
                  </p>
                </div>
                <img src={Bell} className="w-[38px] h-[38px]" alt="bell" />
              </section>
              <div className="mt-4">
                <div className="flex items-center flex-row gap-2">
                  <img
                    src={imageone}
                    alt="one"
                    className="w-[83px] h-[83px] rounded-[20px]"
                  />
                  <img
                    src={imagetwo}
                    alt="two"
                    className="w-[83px] h-[83px] rounded-[20px]"
                  />
                  <div
                    className="border bg-[#ffeaeb] border-[#bc0a2c] rounded-md cursor-pointer"
                    onClick={() => alert("Functionality will be added soon")}
                  >
                    <div className="w-[38px] h-[38px] flex justify-center items-center">
                      <RiDeleteBin5Fill className="text-[#bc0a2c]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Text Editor */}
        {/* Link */}
        <div className="mt-4">
          <p className="font-inter text-[16px] font-[400]">
            Add URL <span className="text-red-600">*</span>
          </p>
          <input
            type="text"
            name="link"
            id="link"
            className="w-full border rounded-md p-2"
            style={{
              borderColor: !isUrlValid ? "red" : "green", // Border color
              color: !isUrlValid ? "red" : "green", // Text color
            }}
            placeholder="Enter valid URL"
            value={url}
            onChange={handleUrlChange}
          />
          {!isUrlValid && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid URL.
            </p>
          )}
        </div>
        {/* Link */}

      <p className="font-inter text-[16px] font-[400] mt-4">Upload </p>
              <div className="flex justify-center items-center h-[140px] border-dashed border-2 border-[#000000] rounded-lg">
                <div className="flex flex-col items-center">
                  {/* Clicking this button will open the file selection window */}
                  <button
                    className="rounded-full bg-yellow-400 p-2"
                    onClick={() => document.getElementById("fileUpload").click()}
                  >
                    <img src={Uparrow} alt="Upload" />
                  </button>
      
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*, video/*" // Accept images and videos
                    onChange={handleFileChange}
                  />
      
                  <p className="mt-2 font-inter text-[#000000]">Upload Video</p>
                </div>
                {/* Preview Section */}
                {selectedFile && (
              <div className="ml-4">
                {selectedFile.type.startsWith("image/") ? (
                  <div className='relative'>
                    <span className='absolute right-0 text-white cursor-pointer' onClick={()=>setSelectedFile(null)}>X</span>
                    <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 w-[80px] h-[80px] object-cover rounded-md"
                  />
                  </div>
                ) : selectedFile.type.startsWith("video/") ? (
                  <div className='relative'>
                    <span className='absolute right-0 text-white cursor-pointer' onClick={()=>setSelectedFile(null)}>X</span>
                    <video
                    controls
                    className="mt-2 w-[80px] h-[80px] rounded-md"
                  >
                    <source src={previewUrl} type={selectedFile.type} />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
              </div>

        {/* START:: Buttons */}
        <div className="flex gap-3 relative mt-6 bottom-0 float-right">
          <Link to="/professional-version">
            <button
              // onClick={handleNextClick}
              className="rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
            >
              Cancel
            </button>
          </Link>
          <button
            onClick={() => alert("Functionality will be added soon")}
            className="rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
          >
            Save Changes
          </button>
        </div>
        {/* END:: Buttons */}
      </div>
    </section>
  );
};

export default AddProfessionalVersionManagement;
