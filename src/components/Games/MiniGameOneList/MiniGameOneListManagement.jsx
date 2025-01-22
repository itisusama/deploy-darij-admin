import React, { useState } from 'react';
import { words } from '../../../Data/miniGameOne';
import GamesHeader from '../GamesHeader';
import { TiDocumentText } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const MiniGameOneListManagement = () => {
    const navigate = useNavigate();

    const [menuIndex, setMenuIndex] = useState(null);

    const toggleMenu = (index) => {
        setMenuIndex(menuIndex === index ? null : index);
    };

    const handleEdit = (index) => {
        setMenuIndex(null); 
        navigate(`/edit-new-minigameone`);
    };

    const handleDelete = (index) => {
        setMenuIndex(null); 
        alert(`Delete clicked for ${words[index].title}`);
    };

    return (
        <div className='mx-3'>
            <GamesHeader title="Add New" path="/add-new-minigameone" />
            <div className="mx-8 flex flex-wrap gap-4">
                {words.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between w-[32%] h-[96px] bg-[#FFFFFF] border border-[#E1E5E8] rounded-[16px] p-4 relative"
                        >
                            <div className="flex items-center">
                                <div className="flex items-center justify-center bg-[#FFF1B2] rounded-full w-[40px] h-[40px]">
                                    <TiDocumentText className="w-[20px] h-[24px] text-[#000000]" />
                                </div>
                                <p className='ml-4 text-[16px] font-inter font-[600] leading-6 text-[#000000] truncate'>
                                    {data.title}
                                </p>
                            </div>
                            <div className="ml-auto">
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className="cursor-pointer w-4 h-4 text-[#000000]"
                                    onClick={() => toggleMenu(index)}
                                />
                                {menuIndex === index && (
                                    <div className="absolute right-4 top-12 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-[61px] h-[75px] z-10">
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => handleEdit(index)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="block text-[#FF3B30] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MiniGameOneListManagement;
