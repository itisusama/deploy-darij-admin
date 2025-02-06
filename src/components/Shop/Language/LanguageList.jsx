import React, { useState } from "react";
// import { languageList } from "../../data/Languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const LanguageList = ({ language }) => {
    const [dropdownVisible, setDropdownVisible] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownVisible(dropdownVisible === index ? null : index);
    };

    const handleDelete = (lang) => {
        setDropdownVisible(null);
        alert("Functionality will be added soon");
    };

    return (
        <div className="w-full h-16 flex flex-col px-4">
            <div className="flex flex-col space-y-6 relative mr-6">
                {language.map((lang, index) => (
                    <div key={index} className="flex items-center h-[64px] rounded-[12px] bg-[#FFFF] p-4 relative">
                        <img src={lang.img} alt={lang.text} className="w-8 h-8" />
                        <p className="font-inter font-[300] text-[14px] hover:font-[700] hover:text-[16px] leading-5 pl-3 flex-1 transition-all duration-300">
                            {lang.text}
                        </p>
                        <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            onClick={() => toggleDropdown(index)}
                            className="w-4 h-4 text-[#000000] cursor-pointer"
                        />
                        {dropdownVisible === index && (
                            <div className="absolute top-[75%] right-0 w-32 bg-white border rounded-lg shadow-md z-10 mt-0 mr-2">
                                <button
                                    onClick={() => handleDelete(lang)}
                                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageList;