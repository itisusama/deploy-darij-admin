import React, {useState} from 'react'
import Uparrow from "../../../assets/Uparrow.svg";
import LanguageSelector from "../LanguageSelector"
import { Link } from 'react-router-dom';

const AddBannerManagement = () => {
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
  return (
    <section className="overflow-y-auto h-screen custom-scrollbar">
    <div className="border rounded-3xl border-gray-300 p-4 h-auto">
      <div className=" font-inter font-semibold">
        <h2>Add Banner </h2>
      </div>
      <div className="mt-5">
        <LanguageSelector/>
  

        <div className="mt-8 h-[400px]">
          <div className=" font-semibold mb-3"> Add Image</div>

          <div className="flex justify-center items-center w-[100%] h-[140px] border-dashed border-2 border-[#000000] rounded-lg">
            <div className="flex flex-col items-center">
              <button className=" rounded-full bg-yellow-400 p-2" onClick={() => document.getElementById("fileUpload").click()}>
                {" "}
                <img src={Uparrow} alt="" />{" "}
              </button>
              {/* Hidden File Input */}
              <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*" // Accept images and videos
                    onChange={handleFileChange}
                  />
              <p className="mt-2 font-inter  text[#000000] ">Upload Image</p>
            </div>
            {selectedFile && (
              <div className="ml-4">
                {selectedFile.type.startsWith("image/") ? (
                  <div className='relative'>
                    <span className='absolute right-2 top-1 text-white cursor-pointer' onClick={()=>setSelectedFile(null)}>X</span>
                    <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 w-[80px] h-[80px] object-cover rounded-md"
                  />
                  </div>
                ) : selectedFile.type.startsWith("video/") ? (
                  <div className='relative'>
                    <span className='absolute right-3 top-1 text-white cursor-pointer' onClick={()=>setSelectedFile(null)}>X</span>
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
          <div className='mt-48 float-end flex gap-3'>
          <Link to="/settings" state={{ fromBack: true }} className='cursor-pointer'>
          <button className="border  text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
            Back
          </button>
          </Link>
          <button className="border bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] " onClick={()=> alert("Functionality will be added soon")}>
            Save
          </button>
        </div>
        </div>

      </div>
    </div>
    <div className="mb-44"></div>
    </section>
  )
}

export default AddBannerManagement
