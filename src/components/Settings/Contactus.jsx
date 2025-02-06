import React from "react";

const Contactus = () => {
  return (
    <section className="overflow-y-auto h-screen custom-scrollbar">
    <div className="border relative rounded-3xl border-gray-300 p-5 h-[500px]">
      <div className="">
        <label htmlFor="email" className="block text-sm font-inter">
          Enter Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          className="mt-1 p-2 w-[50%] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
          maxlength="50"
        />
        <div className="absolute bottom-8 right-4">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] " onClick={()=>alert("Functionality will be added soon")}>
            Update
          </button>
        </div>
      </div>
    </div>
    <div className="mb-44"></div>
    </section>
  );
};

export default Contactus;
