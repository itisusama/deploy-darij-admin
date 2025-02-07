import React, { useState } from "react";
import { Wordlist } from "../../Data/Wordlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import Edit_word from "./Edit_word"
import Left from '../../assets/left-nav.svg';
import Right from '../../assets/right-nav.svg';

const Words_page = () => {
  const navigate = useNavigate();
        const [menuIndex, setMenuIndex] = useState(null);
      
        const toggleMenu = (index) => {
          setMenuIndex(menuIndex === index ? null : index);
        };
         const [recordsPerPage, setRecordsPerPage] = useState(6); // Dynamic items per page
            const [currentPage, setCurrentPage] = useState(1);
  
            const wordlist = Wordlist;
  
            const totalPages = Math.ceil(12 / recordsPerPage);
            const totalItems = 12;
        
            const handlePageChange = (page) => {
                if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                }
            };
  
            const startIndex = (currentPage - 1) * recordsPerPage;
            const currentItems = wordlist.slice(startIndex, startIndex + recordsPerPage);
  
      const handleRecordsPerPageChange = (e) => {
          setRecordsPerPage(Number(e.target.value));
          setCurrentPage(1); // Reset to the first page
          setUserChanged(true); // Mark as user has manually changed
  
      };
      
  return (
    <div className="flex flex-wrap justify-evenly   gap-2">
      {currentItems.map((word, index) => {
        return (
          <div
            className="relative flex justify-between items-center border rounded-3xl  py-6 w-[32%] hover:border-[#FFC600]"
            key={index}
          >
            <div className="flex gap-3">
              <div className=" flex items-center justify-center ml-4 h-[45px] w-[45px] rounded-full bg-[#FFF1B2]">
                <img src={word.img} alt="" />
              </div>
              <div className="">
                <div className="font-inter font-semibold text-2">
                  {word.heading}
                </div>
                <div className=" text-[#626262] text-sm">{word.time}</div>
              </div>
            </div>
            {/* three Dots */}

            {/* <div className="bg-[#F5F5F5] rounded-full py-4 px-6 cursor-pointer ">
              <img  src={word.menu} alt="" />
            </div> */}
            <div className="  bg-[#F5F5F5] w-[40px] h-[40px] flex justify-center items-center absolute rounded-full right-2 cursor-pointer" onClick={() => toggleMenu(index)}> 
              <FontAwesomeIcon
                className="text-[16px] font-inter   font-[400]  text-[#626262] cursor-pointer"
                icon={faEllipsisVertical}
                onClick={() => toggleMenu(index)}
              />
              {menuIndex === index && (
                <div className="absolute right-7 top-4 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-[67px] h-[75px] z-10">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => navigate("/edit_word")}
                  >
                    Edit
                  </button>
                  <button
                    className="block text-[#FF3B30] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => alert("Functionality will be added soon")}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
          
        );
      })}
        {/* START:: Pagination */}
                       <div className="bg-white flex flex-wrap sm:flex-nowrap justify-between sm:justify-between items-center absolute bottom-0 pb-3 left-0 sm:left-[210px] w-screen gap-4">
                         {/* Left Pagination Controls */}
                         <div className="flex ml-4 mt-4 gap-2 items-between justify-between">
                           <button
                             className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                             onClick={() => handlePageChange(currentPage - 1)}
                             disabled={currentPage === 1}
                           >
                             <img src={Left} alt="left-icon" className="w-6 h-6" />
                           </button>
                           {/* {[...Array(totalPages).keys()].map((page) => (
                             <button
                               key={page}
                               className={`px-3 py-1 border rounded-md ${
                                 currentPage === page + 1
                                   ? "bg-black text-white"
                                   : "bg-gray-200 hover:bg-gray-300"
                               }`}
                               onClick={() => handlePageChange(page + 1)}
                             >
                               {page + 1}
                             </button>
                           ))} */}
                           <button
                              className={`px-3 py-1 border rounded-md ${
                                currentPage === 1 ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                              }`}
                              onClick={() => handlePageChange(1)}
                            >
                              1
                            </button>
                           <button
                             className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            //  onClick={() => handlePageChange(currentPage + 1)}
                             disabled={currentPage === totalPages}
                           >
                             <img src={Right} alt="right-icon" className="w-6 h-6" />
                           </button>
                         </div>
                 
                         {/* Records Per Page Dropdown */}
                         <div className="ml-44 flex gap-2 items-center justify-center sm:justify-end">
                           <select
                             className="border rounded-md px-2 py-1 bg-white w-full sm:w-auto"
                             value={recordsPerPage}
                             onChange={handleRecordsPerPageChange}
                           >
                             {[6, 8, 10, 12, 15, 20].map((count) => (
                               <option key={count} value={count}>
                                 {count}
                               </option>
                             ))}
                           </select>
                           <span className="text-sm sm:text-base float-right">
                             Items per page
                           </span>
                         </div>
                 
                         {/* Item Range and Total */}
                         <div className="text-gray-600 text-center sm:text-right">
                           {startIndex + 1} - {Math.min(startIndex + recordsPerPage, totalItems)}{" "}
                           of {totalItems} items
                         </div>
                       </div>
                       {/* END:: Pagination */}
    </div>
  );
};

export default Words_page;
