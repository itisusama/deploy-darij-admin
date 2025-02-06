import React,  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bell from "../../../assets/graybell.svg"
import Add from "../../../assets/addplus.svg"

const AddMiniGameFourManagement = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    
        const handleFileChange = (event) => {
            if (event.target.files && event.target.files[0]) {
              setSelectedFile(event.target.files[0].name);
            }
          };
        
          const openFileSelector = () => {
            document.getElementById("fileInput").click();
          };
    return (
        <>
            <section className="px-6 overflow-y-auto custom-scrollbar">
        <div className='relative p-6 bg-white rounded-[30px] h-fit border overflow-hidden mb-24'>
         <h2 className='font-inter font-[600] text-[24px]'>Add New</h2>
            <div className="mt-4">
                <p className='font-inter text-[16px] font-[400]'>Number in Text <span className='text-red-600'>*</span></p>
                <input type="text" name="number" id="question" placeholder='Enter number in text' className='w-full border rounded-md p-2'/>
            </div>
            
        {/* Audio */}
                <div className="mt-4">
                    <div
                      className="flex gap-3 items-center cursor-pointer"
                      onClick={openFileSelector}
                    >
                      <img src={Add} alt="add plus" className="w-[20px] h-[20px]" />
                      <p className="font-inter text-[16px] font-[400] underline text-[#e0e0e0]">
                        Add Audio
                      </p>
                    </div>
                    <svg
                      width="128"
                      height="120"
                      viewBox="0 0 128 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[120px] h-[120px] cursor-pointer"
                    //   onClick={openFileSelector}
                    >
                      <rect x="0.20752" width="120.922" height="120" rx="60" fill="#E2E2E2"/>
                      <path d="M86.0347 36.6716C90.7591 43.2391 93.5417 51.2971 93.5417 60.005C93.5417 68.7129 90.7591 76.7708 86.0347 83.3383M72.6927 46.6716C75.329 50.4511 76.875 55.0475 76.875 60.005C76.875 64.9625 75.329 69.5589 72.6927 73.3383M52.3227 37.8906L41.7704 48.4429C41.1939 49.0194 40.9057 49.3076 40.5693 49.5138C40.271 49.6965 39.9459 49.8312 39.6058 49.9129C39.2221 50.005 38.8145 50.005 37.9992 50.005H32.2083C30.3415 50.005 29.4081 50.005 28.695 50.3683C28.0678 50.6879 27.5579 51.1978 27.2383 51.825C26.875 52.538 26.875 53.4715 26.875 55.3383V64.6716C26.875 66.5385 26.875 67.4719 27.2383 68.1849C27.5579 68.8121 28.0678 69.3221 28.695 69.6417C29.4081 70.005 30.3415 70.005 32.2083 70.005H37.9992C38.8145 70.005 39.2221 70.005 39.6058 70.0971C39.9459 70.1787 40.271 70.3134 40.5693 70.4962C40.9057 70.7023 41.1939 70.9906 41.7704 71.5671L52.3227 82.1194C53.7506 83.5473 54.4646 84.2612 55.0776 84.3095C55.6094 84.3513 56.1292 84.136 56.4757 83.7304C56.875 83.2628 56.875 82.2531 56.875 80.2337V39.7762C56.875 37.7568 56.875 36.7471 56.4757 36.2796C56.1292 35.8739 55.6094 35.6586 55.0776 35.7005C54.4646 35.7487 53.7506 36.4627 52.3227 37.8906Z" stroke="#B4B4B4" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                        d="M86.0332 36.6716C90.7577 43.2391 93.5402 51.2971 93.5402 60.005C93.5402 68.7129 90.7577 76.7708 86.0332 83.3383M72.6912 46.6716C75.3275 50.4511 76.8735 55.0475 76.8735 60.005C76.8735 64.9625 75.3275 69.5589 72.6912 73.3383M52.3213 37.8906L41.769 48.4429C41.1925 49.0194 40.9042 49.3076 40.5678 49.5138C40.2696 49.6965 39.9444 49.8312 39.6043 49.9129C39.2207 50.005 38.813 50.005 37.9977 50.005H32.2069C30.34 50.005 29.4066 50.005 28.6936 50.3683C28.0664 50.6879 27.5564 51.1978 27.2368 51.825C26.8735 52.538 26.8735 53.4715 26.8735 55.3383V64.6716C26.8735 66.5385 26.8735 67.4719 27.2368 68.1849C27.5564 68.8121 28.0664 69.3221 28.6936 69.6417C29.4066 70.005 30.34 70.005 32.2069 70.005H37.9977C38.813 70.005 39.2207 70.005 39.6043 70.0971C39.9444 70.1787 40.2696 70.3134 40.5678 70.4962C40.9042 70.7023 41.1925 70.9906 41.769 71.5671L52.3213 82.1194C53.7492 83.5473 54.4631 84.2612 55.0761 84.3095C55.608 84.3513 56.1277 84.136 56.4742 83.7304C56.8735 83.2628 56.8735 82.2531 56.8735 80.2337V39.7762C56.8735 37.7568 56.8735 36.7471 56.4742 36.2796C56.1277 35.8739 55.608 35.6586 55.0761 35.7005C54.4631 35.7487 53.7492 36.4627 52.3213 37.8906Z"
                        stroke="black"
                        strokeWidth="8.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g
                        filter="url(#filter0_d_1439_28456)"
                        onClick={() => setSelectedFile(null)}
                      >
                        <circle cx="108.207" cy="20" r="15" fill="#E00D1C" />
                        <path
                          d="M115.067 13.1403C114.957 13.0305 114.808 12.9688 114.653 12.9688C114.497 12.9688 114.348 13.0305 114.238 13.1403L108.207 19.1715L102.176 13.1403C102.066 13.0305 101.917 12.9688 101.762 12.9688C101.606 12.9688 101.457 13.0305 101.348 13.1403C101.238 13.2502 101.176 13.3992 101.176 13.5546C101.176 13.7099 101.238 13.859 101.348 13.9688L107.379 20L101.348 26.0312C101.238 26.141 101.176 26.2901 101.176 26.4454C101.176 26.6008 101.238 26.7498 101.348 26.8597C101.457 26.9695 101.606 27.0312 101.762 27.0312C101.917 27.0312 102.066 26.9695 102.176 26.8597L108.207 20.8285L114.238 26.8597C114.348 26.9695 114.497 27.0312 114.653 27.0312C114.808 27.0312 114.957 26.9695 115.067 26.8597C115.177 26.7498 115.239 26.6008 115.239 26.4454C115.239 26.2901 115.177 26.141 115.067 26.0312L109.036 20L115.067 13.9688C115.177 13.859 115.239 13.7099 115.239 13.5546C115.239 13.3992 115.177 13.2502 115.067 13.1403Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept="audio/*"
                    />
                    {selectedFile && (
                      <p className="text-green-600 mt-2">
                        Selected File: {selectedFile}
                      </p>
                    )}
                  </div>
        {/* Answer */}
        <h2 className='font-inter font-[600] mt-4 text-[24px]'>Answer</h2>
        <div className="mt-4">
          <p className='font-inter text-[16px] font-[400]'>Correct Answer <span className='text-red-600'>*</span></p>
          <input type="number" name="answer" id="answer" className='w-full border rounded-md p-2' placeholder='Enter answer in numbers' />
        </div>
        {/* Answer */}
        {/* START:: Buttons */}
                <div className="relaive right-0 space-x-2 float-right mt-8">
                          <Link to="/mini-game-four">
                          <button
                          // onClick={handleNextClick}
                          className="rounded-full bg-transparent border border-black py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                          >
                          Cancel
                          </button>
                          </Link>
                          <button
                          // onClick={handleNextClick}
                          className="rounded-full bg-[#ffc500] border border-[#ffc500] py-[10px] px-[80px] text-[16px] font-inter font-[600]"
                          onClick={()=> alert("Functionality will be added soon")}
                          >
                          Save Changes
                          </button>
                          </div>
                          {/* END:: Buttons */}
        </div>
    </section>
        </>
    )
}

export default AddMiniGameFourManagement;
