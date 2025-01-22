import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiDotsThreeVertical } from "react-icons/pi";
import userImage from '../../../assets/Group.svg';
import Left from '../../../assets/left-nav.svg';
import Right from '../../../assets/right-nav.svg';
import View from '../../../assets/View.svg';
import Cancel from '../../../assets/Cancel.svg';
import Delete from '../../../assets/Delete.svg';

const UsersTable = () => {

    const useData = [
        {
            id: 1,
            image: "https://placehold.co/30x30",
            name: "Miles Esther",
            email: "example45@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "80%",
            subscription: "Lifetime"
        },
        {
            id: 2,
            image: "https://placehold.co/30x30",
            name: "Nguyen Shen",
            email: "example46@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "70%",
            subscription: "Monthly"
        },
        {
            id: 3,
            image: "https://placehold.co/30x30",
            name: "Aria Jones",
            email: "example47@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "90%",
            subscription: "Annual"
        },
        {
            id: 4,
            image: "https://placehold.co/30x30",
            name: "Kiran Patel",
            email: "example48@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png", "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png"],
            score: "75%",
            subscription: "Lifetime"
        },
        {
            id: 5,
            image: "https://placehold.co/30x30",
            name: "Liam Zhang",
            email: "example49@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png", "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png",],
            score: "85%",
            subscription: "Monthly"
        },
        {
            id: 6,
            image: "https://placehold.co/30x30",
            name: "Emma Brown",
            email: "example50@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "95%",
            subscription: "Annual"
        },
        {
            id: 7,
            image: "https://placehold.co/30x30",
            name: "Noah Garcia",
            email: "example51@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "65%",
            subscription: "Monthly"
        },
        {
            id: 8,
            image: "https://placehold.co/30x30",
            name: "Sophia Lee",
            email: "example52@gmail.com",
            languages: [ "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "88%",
            subscription: "Lifetime"
        },
        {
            id: 9,
            image: "https://placehold.co/30x30",
            name: "William Kim",
            email: "example53@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "92%",
            subscription: "Annual"
        },
        {
            id: 10,
            image: "https://placehold.co/30x30",
            name: "Isabella Chen",
            email: "example54@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "78%",
            subscription: "Monthly"
        },
        {
            id: 11,
            image: "https://placehold.co/30x30",
            name: "Lucas Martinez",
            email: "example55@gmail.com",
            languages: ["https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png", "https://cdn.countryflags.com/thumbs/united-kingdom/flag-400.png", "https://cdn.countryflags.com/thumbs/saudi-arabia/flag-wave-250.png"],
            score: "82%",
            subscription: "Lifetime"
        }
    ];
    
    const navigate = useNavigate();

    const handleRowClick = (user) => {
        navigate('/user-profile', { state: { user } });
    };

    const [recordsPerPage, setRecordsPerPage] = useState(8); // Dynamic items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [menuIndex, setMenuIndex] = useState(null);
    const [userChanged, setUserChanged] = useState(false);

    const updateRecordsPerPage = () => {
        if (window.innerHeight < 560) {
            setRecordsPerPage(6); // Adjust for smaller screens
        } else {
            setRecordsPerPage(8); // Default value
        }
    };

    useEffect(() => {
        // Set initial records per page based on screen height
        updateRecordsPerPage();

        // Update records per page on window resize
        window.addEventListener('resize', updateRecordsPerPage);

        return () => {
            window.removeEventListener('resize', updateRecordsPerPage);
        };
    }, []);


    const toggleMenu = (index) => {
        setMenuIndex(menuIndex === index ? null : index);
    };

    const totalPages = Math.ceil(useData.length / recordsPerPage);
    const totalItems = useData.length;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 560px)");

        const handleResize = () => {
            if (!userChanged) {
                // Adjust recordsPerPage only if the user hasn't manually selected
                setRecordsPerPage(mediaQuery.matches ? 6 : 6);
            }
        };

        // Initial check
        handleResize();

        // Listen for screen size changes
        mediaQuery.addEventListener("change", handleResize);

        // Cleanup event listener
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, [userChanged]);

    const startIndex = (currentPage - 1) * recordsPerPage;
    const visibleUsers = useData.slice(startIndex, startIndex + 8);

    const handleRecordsPerPageChange = (e) => {
        setRecordsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to the first page
        setUserChanged(true); // Mark as user has manually changed

    };


  return (
    <section className='mt-5 overflow-y-auto w-full'>
        <div className="relative overflow-hidden rounded-[22px]">
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
                {visibleUsers.map((user, index) => (
                    <tr key={user.id} className="py-1">
                        <td
                            className="py-1 border p-4 cursor-pointer"
                            onClick={() => handleRowClick(user)}
                        >
                            <div className="flex items-center gap-2">
                                <img
                                    src={userImage}
                                    alt="user-image"
                                    className="rounded-full w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                                />
                                <h2 className="text-sm sm:text-base">{user.name}</h2>
                            </div>
                        </td>
                        <td className="py-1 border p-4 text-sm sm:text-base">{user.email}</td>
                        <td className="py-1 border p-4">
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
                        <td className="py-1 border p-4 text-sm sm:text-base">{user.score}</td>
                        <td className="py-1 border p-4 text-sm sm:text-base">
                            {user.subscription}
                        </td>
                        <td className="py-1 border p-4 relative">
                            <div className="flex justify-center items-center">
                                <PiDotsThreeVertical
                                    className="cursor-pointer font-semibold w-4 h-4 text-[#000000]"
                                    onClick={() => toggleMenu(index)}
                                />
                            </div>
                            {menuIndex === index && (
                                <div className="absolute right-7 top-8 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-40 h-auto z-10">
                                    <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
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
                                            <p className="font-inter text-[14px] font-[400]">
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
                ))}
            </tbody>
        </table>
    </div>
</div>

{/* START:: Pagination */}
<div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center mt-4 absolute bottom-3 left-0 sm:left-[230px] w-full gap-4">
    {/* Left Pagination Controls */}
    <div className="flex gap-2 items-center justify-center sm:justify-start">
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
    <div className="flex gap-2 items-center justify-center sm:justify-end">
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
        <span className="text-sm sm:text-base">Items per page</span>
    </div>

    {/* Item Range and Total */}
    <div className="text-gray-600 text-center sm:text-right">
        {startIndex + 1} - {Math.min(startIndex + recordsPerPage, totalItems)} of {totalItems} items
    </div>
</div>
{/* END:: Pagination */}

    </section>
  )
}

export default UsersTable
