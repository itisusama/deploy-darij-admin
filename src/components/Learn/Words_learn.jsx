import React, { useState } from "react";
import left from "../../assets/left-nav.svg";
import right from "../../assets/right-nav.svg";
import Words_page from "./Words_page";
import Addword from "./Addword";

const Words_learn = () => {
  const [addword, setAddword] = useState(false);
  return (
    <div>
      {!addword && (
        <div className=" flex justify-between my-1 ">
          <div className="w-[80%]">
            <div className="relative  ">
              <form>
                <label for="user-search" class="text-sm font-medium sr-only">
                  Search
                </label>
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="user-search"
                  class="w-[100%] block p-2 py-3 ps-10 bg-[#F9F9F9] text-sm border border-[#E1E5E8] rounded-full"
                  placeholder="Search"
                  required
                  maxlength="50"
                />
              </form>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setAddword(true)}
              className=" text-black font-semibold font-inter h-[42px] w-[180px] mr-1 rounded-full bg-yellow-400 hover:bg-yellow-600 justify-between items-end  "
            >
              + Add New
            </button>
          </div>
        </div>
      )}
      {!addword ? (
        <div className="mt-3 flex-wrap">
          <Words_page />
        </div>
      ) : (
        <Addword />
      )}
    </div>
  );
};

export default Words_learn;
