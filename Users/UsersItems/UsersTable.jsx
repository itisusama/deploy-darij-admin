import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PiDotsThreeVertical } from "react-icons/pi";
import userImage from "../../../assets/Group.svg";
import Left from "../../../assets/left-nav.svg";
import Right from "../../../assets/right-nav.svg";
import View from "../../../assets/View.svg";
import Cancel from "../../../assets/Cancel.svg";
import Delete from "../../../assets/Delete.svg";

const UsersTable = ({ searchQuery }) => {
  const useData = [
    {
      id: 1,
      image: "https://placehold.co/30x30",
      name: "Miles Esther",
      email: "example45@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "80%",
      subscription: "Lifetime",
    },
    {
      id: 2,
      image: "https://placehold.co/30x30",
      name: "Nguyen Shen",
      email: "example46@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "70%",
      subscription: "Monthly",
    },
    {
      id: 3,
      image: "https://placehold.co/30x30",
      name: "Aria Jones",
      email: "example47@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "90%",
      subscription: "Annual",
    },
    {
      id: 4,
      image: "https://placehold.co/30x30",
      name: "Kiran Patel",
      email: "example48@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
      ],
      score: "75%",
      subscription: "Lifetime",
    },
    {
      id: 5,
      image: "https://placehold.co/30x30",
      name: "Liam Zhang",
      email: "example49@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
      ],
      score: "85%",
      subscription: "Monthly",
    },
    {
      id: 6,
      image: "https://placehold.co/30x30",
      name: "Emma Brown",
      email: "example50@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "95%",
      subscription: "Annual",
    },
    {
      id: 7,
      image: "https://placehold.co/30x30",
      name: "Noah Garcia",
      email: "example51@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "65%",
      subscription: "Monthly",
    },
    {
      id: 8,
      image: "https://placehold.co/30x30",
      name: "Sophia Lee",
      email: "example52@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "88%",
      subscription: "Lifetime",
    },
    {
      id: 9,
      image: "https://placehold.co/30x30",
      name: "William Kim",
      email: "example53@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "92%",
      subscription: "Annual",
    },
    {
      id: 10,
      image: "https://placehold.co/30x30",
      name: "Isabella Chen",
      email: "example54@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "78%",
      subscription: "Monthly",
    },
    {
      id: 11,
      image: "https://placehold.co/30x30",
      name: "Lucas Martinez",
      email: "example55@gmail.com",
      languages: [
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
        "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",
        "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png",
      ],
      score: "82%",
      subscription: "Lifetime",
    },
  ];

  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleRowClick = (user) => {
    navigate("/user-profile", { state: { user } });
  };

  const [recordsPerPage, setRecordsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuIndex, setMenuIndex] = useState(null);
  const [userChanged, setUserChanged] = useState(false);

  const toggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  // const totalPages = Math.ceil(useData.length / recordsPerPage);
  const totalItems = useData.length;

  // const handlePageChange = (page) => {
  //   if (page >= 1 && page <= totalPages) {
  //     setCurrentPage(page);
  //   }
  // };

  // const startIndex = (currentPage - 1) * recordsPerPage;
  // const visibleUsers = useData.slice(startIndex, startIndex + recordsPerPage);

  const handleRecordsPerPageChange = (e) => {
    setRecordsPerPage(Number(e.target.value));
    setCurrentPage(1);
    setUserChanged(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside of menu or trigger button
      if (
        menuIndex !== null &&
        !event.target.closest(".menu-trigger") &&
        !event.target.closest(".menu-container")
      ) {
        setMenuIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuIndex]);

  const filteredUsers = useData.filter((user) =>
    user.name.toLowerCase().includes((searchQuery || "").toLowerCase()) ||
    user.email.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const visibleUsers = filteredUsers.slice(startIndex, startIndex + recordsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when searching
  }, [searchQuery]);

  return (
    <section className="mt-5 overflow-y-auto overflow-x-hidden h-screen w-full custom-scrollbar">
      <div className="relative overflow-x-hidden rounded-[22px] mb-60">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead className="bg-[#fff1b2] text-[#000000]">
              <tr>
                <td className="py-1 border p-4">Users</td>
                <td className="py-1 border p-4">Emails</td>
                <td className="py-1 border p-4">Language Learned</td>
                <td className="py-1 border p-4">Game Score</td>
                <td className="py-1 border p-4">Subscription Plan</td>
                <td className="py-1 border p-4">Action</td>
              </tr>
            </thead>
            <tbody className="bg-[#FFFFFF] text-black">
              {visibleUsers.length > 0 ? (
                visibleUsers.map((user, index) => (
                  <tr key={user.id} className="py-1">
                    <td
                      className="py-1 border p-4 cursor-pointer"
                      onClick={() => handleRowClick(user)}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={userImage}
                          alt="user"
                          className="rounded-full w-[32px] h-[32px]"
                        />
                        <h2 className="text-sm sm:text-base">{user.name}</h2>
                      </div>
                    </td>
                    <td className="py-1 border p-4 cursor-pointer" onClick={() => handleRowClick(user)}>
                      {user.email}
                    </td>
                    <td
                    className="py-1 border p-4 cursor-pointer"
                    onClick={() => handleRowClick(user)}
                  >
                    <div className="flex">
                      {user.languages.map((lang, index) => (
                        <img
                          key={index}
                          src={lang}
                          alt={`language-${index}`}
                          className={`rounded-full w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] border-2 border-white -ml-3 ${
                            index === 0 ? "ml-0" : ""
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                    <td className="py-1 border p-4 cursor-pointer" onClick={() => handleRowClick(user)}>
                      {user.score}
                    </td>
                    <td className="py-1 border p-4 cursor-pointer" onClick={() => handleRowClick(user)}>
                      {user.subscription}
                    </td>
                    <td className="py-1 border p-4 relative">
                    <div className="flex justify-center items-center">
                      <PiDotsThreeVertical
                        className="cursor-pointer font-semibold w-4 h-4 text-[#000000]"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu(index);
                        }}
                      />
                    </div>
                    {menuIndex === index && (
                      <div
                        className="absolute right-7 top-8 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-40 h-auto z-10"
                        ref={menuRef}
                      >
                        <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer" onClick={() => handleRowClick(user)}>
                          <div className="flex gap-2">
                            <img src={View} alt="view" />
                            <p className="font-inter text-[14px] font-[400]">
                              View Profile
                            </p>
                          </div>
                        </button>

                        <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          <div className="flex gap-2">
                            <img src={Cancel} alt="block" />
                            <p className="font-inter text-[14px] font-[400]" onClick={()=>alert("Comming Soon")}>
                              Block User
                            </p>
                          </div>
                        </button>

                        <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          <div className="flex gap-2">
                            <img src={Delete} alt="delete" />
                            <p className="font-inter text-[14px] font-[400]">
                              Delete
                            </p>
                          </div>
                        </button>
                      </div>
                    )}
                  </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

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
          {[...Array(totalPages).keys()].map((page) => (
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
          ))}
          <button
            className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(currentPage + 1)}
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
    </section>
  );
};

export default UsersTable;
