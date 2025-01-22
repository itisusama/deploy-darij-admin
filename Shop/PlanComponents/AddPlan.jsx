import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPlan = () => {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState(''); 

  const handleEditorChange = (content) => {
    setEditorContent(content); 
  };

  return (
    <section className='overflow-y-auto h-screen custom-scrollbar'>
      <div className='w-full h-fit border border-[#E1E5E8] rounded-[30px] bg-white'>
      <h1 className='mt-[25px] ml-10 font-inter font-[600] text-[24px] leading-[36px]'>Add Plan</h1>

      {/* Text Editor Section */}
      <div className="w-auto h-[247px] mt-4 mx-6 bg-[#FCFCFD] border-2 border-[#FCFCFD] rounded-md">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          className="h-[203px] bg-[#FCFCFD]  rounded-md"
          placeholder="Add Details Here ....."
        />
      </div>


      {/* Subscription Plan Section */}
      <div className="flex justify-between mt-10 mx-6">
        <div>
          {/* Set price */}
          <label
            htmlFor="price"
            className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
          >
            Set Price<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter Price"
            className="mt-2 w-full sm:h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] py-[12px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
            required
            autoComplete="off"
          />
        </div>

        {/* Subscription Selection */}
        <div>
          <label
            htmlFor="subscription"
            className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
          >
            Subscription Plan<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            name="subscription"
            id="subscription"
            className="mt-2 w-full sm:h-[44px] sm:w-[300px] md:w-[540px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-44 mb-12">
        <button
          onClick={() => navigate('/plan')}
          className="w-[210px] h-[44px] rounded-[100px] border border-[#000000] py-2 px-4 font-inter font-[600] text-[16px] leading-6"
        >
          Back
        </button>
        <button
          className="w-[210px] h-[44px] rounded-[100px] bg-[#FFC600] mx-5 mr-5 py-2 px-4 font-inter font-[600] text-[16px] leading-6"
        >
          Save
        </button>
      </div>
    </div>
    <div className='mb-24'></div>
    </section>
  );
};

export default AddPlan;