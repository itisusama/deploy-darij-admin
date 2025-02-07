import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNewPromo = () => {
    const navigate = useNavigate();
    const [selectedLanguages, setSelectedLanguages] = useState([]);
        const [selectedPlan, setSelectedPlan] = useState([]);
    
        const handleLanguageChange = (event) => {
          const selectedValue = event.target.value;
      
          setSelectedLanguages((prevLanguages) => {
            return prevLanguages.includes(selectedValue)
              ? prevLanguages.filter((lang) => lang !== selectedValue)
              : [...prevLanguages, selectedValue];
          });
        };
    
        const handlePlanChange = (event) => {
          const selectedValue = event.target.value;
      
          setSelectedPlan((prevPlan) => {
            return prevPlan.includes(selectedValue)
              ? prevPlan.filter((plan) => plan !== selectedValue)
              : [...prevPlan, selectedValue];
          });
        };
    return (
        <section className='h-screen overflow-y-auto overflow-x-hidden custom-scrollbar'>
        <div className='w-full h-fit bg-white border border-[#E1E5E8] rounded-[30px] p-7'>
    {/* header */}
    <h2 className='font-inter text-2xl font-semibold leading-9 text-left text-black'>Add New</h2>

    {/* promo code fields */}
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 mt-7">
        {/* first */}
        <div>
            <label
                htmlFor="code"
                className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
            >
                Promo Code<span className="text-red-500 ml-1">*</span>
            </label>
            <input
                id="code"
                placeholder="Enter a Promo Code to use"
                className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] py-[12px] pl-[14px] focus:outline-[#ffc500] font-[400] text-[16px] leading-[24px]"
                required
                autoComplete="off"
                maxlength="50"
            />
        </div>

        <div className="w-full">
      <label
        htmlFor="subscription"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Subscription Plan<span className="text-red-500 ml-1">*</span>
      </label>
      <select
        id="subscription"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        value={selectedPlan}
        onChange={handlePlanChange}
      >
        <option value="Lifetime">Lifetime</option>
        <option value="Yearly">Yearly</option>
        <option value="Monthly">Monthly</option>
        <option value="Weekly">Weekly</option>
      </select>
      <div className="mt-2 text-[16px] text-green-700">
         {selectedPlan.join(", ")}
      </div>
    </div>

        {/* second */}
        <div className="w-full">
      <label
        htmlFor="language"
        className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
      >
        Applicable Language<span className="text-red-500 ml-1">*</span>
      </label>
      <select
        id="language"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]" 
        value={selectedLanguages}
        onChange={handleLanguageChange}
      >
        <option value="Moroco">Moroco</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Algerian">Algerian</option>
      </select>
      <div className="mt-2 text-[16px] text-green-700">
         {selectedLanguages.join(", ")}
      </div>
    </div>

        <div>
            <label
                htmlFor="date"
                className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
            >
                Expiry Date<span className="text-red-500 ml-1">*</span>
            </label>
            <input
                id="date"
                type="date"
                className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] py-[12px] pl-[14px] focus:outline-[#ffc500] font-[400] text-[16px] leading-[24px]"
                required
                autoComplete="off"
                maxlength="50"
            />
        </div>

        {/* third */}
        <div>
            <label
                htmlFor="discount"
                className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
            >
                Promo Code Discount<span className="text-red-500 ml-1">*</span>
            </label>
            <input
                id="discount"
                placeholder="Enter an amount of discount"
                className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] shadow-[0px_1px_2px_0px_#1018280D] rounded-[8px] py-[12px] pl-[14px] focus:outline-[#ffc500] font-[400] text-[16px] leading-[24px]"
                required
                autoComplete="off"
                maxlength="50"
            />
        </div>

        <div>
            <label
                htmlFor="usageLimit"
                className="ml-2 flex items-center font-inter text-[#000000] font-[500] text-[14px] leading-[20px]"
            >
                Usage Limit<span className="text-red-500 ml-1">*</span>
            </label>
            <input
        type='number'
        placeholder='Enter User Limit'
        id="usageLimit"
        className="mt-2 w-full h-[44px] bg-white text-black placeholder:text-[#D0D5DD] border border-[#D0D5DD] rounded-[8px] pl-[14px] focus:outline-none font-[400] text-[16px] leading-[24px]"
        maxlength="50"
      />
        </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-col-reverse md:flex-row justify-end items-center mt-14 gap-4">
        <button
            onClick={() => navigate('/promo-code', {replace: true})}
            className="w-full md:w-[210px] h-[44px] rounded-[100px] border border-[#000000] py-2 px-4 font-inter font-[600] text-[16px] leading-6"
        >
            Cancel
        </button>
        <button
            className="w-full md:w-[210px] h-[44px] rounded-[100px] bg-[#FFC600] py-2 px-4 font-inter font-[600] text-[16px] leading-6" onClick={()=> alert("Functionality will be added soon")}
        >
            Add
        </button>
    </div>
</div>

        <div className='mb-24'></div>
        </section>
    )
}

export default AddNewPromo;