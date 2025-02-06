import React, { useState } from "react";
import Cemra from "../../assets/Cemra.svg";
import Pen from "../../assets/pen.svg";
import Audio from "../../assets/audio.svg";
import Plusicon from "../../assets/plusicon.svg";
import Bell from "../../assets/bell.svg";

const Uploadwordimg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedAudioFile, setSelectedAudioFile] = useState(null);
      
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }
  };
          
            const openFileSelector = () => {
              document.getElementById("fileInput").click();
            };

          const handleAudioFileChange = (event) => {
              if (event.target.files && event.target.files[0]) {
                setSelectedAudioFile(event.target.files[0].name);
              }
            };
          
            const openAudioFileSelector = () => {
              document.getElementById("fileInput2").click();
            };
  return (
    <div>
      <div className="border rounded-3xl bg-[#FFFFFF] text-[#D0D5DD]">
        <div className=" flex ">
          {/* Image */}
          <div className="ml-9 mt-9 mr-9 cursor-pointer" onClick={openFileSelector}>
            <div className="h-[125px] w-[125px] bg-[#F9F9F9] flex justify-center  items-center rounded-lg">
            {selectedFile ? (
        <img src={selectedFile} alt="Selected" className="w-full h-full object-cover" />
      ) : (
        <img src={Cemra} alt="Camera Icon" className="items-center" />
      )}
            </div>
            <div className=" flex pt-2">
              <div className=" bg-[#F8F8F8] rounded ">
                <img src={Pen} alt="" />
              </div>
              <div className="font-inter underline text-black cursor-pointer">
                Upload Image{" "}
              </div>
            </div>
            <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept="image/*"
                    />
          </div>
          {/* Audio */}
          <div className="mt-9 flex items-center flex-col gap-3 cursor-pointer" onClick={openAudioFileSelector}>
  <div className="bg-[#E2E2E2] h-[120px] w-[120px] rounded-full flex justify-center items-center">
    {selectedAudioFile ? (
      <img src={Bell} alt="Selected Audio" className="w-full h-full" />
    ) : (
      <img src={Audio} alt="Upload Audio" className="" />
    )}
  </div>

  <div className="flex">
    <div>
      <img src={Plusicon} alt="Plus Icon" />
    </div>
    <div className="underline text-[#000000] pl-2"> Add Audio</div>
  </div>

            <input
                      type="file"
                      id="fileInput2"
                      style={{ display: "none" }}
                      onChange={handleAudioFileChange}
                      accept="audio/*"
                    />
          </div>
        </div>

        {/* {selectedFile && (
                      <p className="text-green-600 mt-2 ml-4">
                        {selectedFile} <span className="text-black cursor-pointer" onClick={()=> setSelectedFile(null)}>x</span>
                      </p>
                    )} */}

        {/* {selectedAudioFile && (
                      <p className="text-green-600 mt-2 ml-4">
                        {selectedAudioFile} <span className="text-black cursor-pointer" onClick={()=> setSelectedAudioFile(null)}>x</span>
                      </p>
                    )} */}
        <div className="ml-9 mt-2">
          <label htmlFor="text" className="text-[#000000]">
            French Word<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Word in French "
            
            className="w-[97%] px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:[#D0D5DD]"
            maxlength="50"
          />
        </div>
        <div className="ml-9 my-4 ">
          <label htmlFor="text" className="text-[#000000] block">
            Translated Word<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter word in translated language "
          
            className="w-[97%] px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:[#D0D5DD]"
            maxlength="50"
          />
        </div>
      </div>
    </div>
  );
};

export default Uploadwordimg;
