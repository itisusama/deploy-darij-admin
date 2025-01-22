import React, { useState } from 'react';
import { promoCode } from '@/Data/PromoCode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const PromoCodeList = () => {
    const navigate = useNavigate();
    const [menuIndex, setMenuIndex] = useState(null);

    const toggleMenu = (index) => {
        setMenuIndex(menuIndex === index ? null : index);
    };

    return (
        <div className="w-full border border-[#E1E5E8] rounded-[20px] mx-auto bg-white" style={{overflowY: 'auto', maxHeight:"500px"}}>
            <table className="w-full border-collapse">
                <thead className='bg-[#FFF1B2] text-black'>
                    <tr className="w-full h-[22px]">
                        <th className='w-[176px] h-[22px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Promo ID
                        </th>
                        <th className='w-[176px] h-[30px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Applicable Language
                        </th>
                        <th className='w-[176px] h-[30px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Discount
                        </th>
                        <th className='w-[176px] h-[30px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Subscription Plan
                        </th>
                        <th className='w-[176px] h-[30px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            No. of Users
                        </th>
                        <th className='w-[176px] h-[22px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {promoCode.map((code, index) => (
                        <tr key={index} className="h-[35px] text-center relative">
                            <td className="border border-[#E1E5E8] font-[400] text-[12px] leading-5">{code.promoId}</td>
                            <td className="border border-[#E1E5E8] font-[400] text-[12px] leading-5">
                              <img src={code.applanguage} alt="language" className="mx-auto w-[24px] h-[24px]" />
                            </td>
                            <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5">{code.Discount}</td>
                            <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5">{code.SubPlan}</td>
                            <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5">{code.users}</td>
                            <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5 relative">
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className="cursor-pointer w-4 h-4 text-[#000000]"
                                    onClick={() => toggleMenu(index)}
                                />
                                {menuIndex === index && (
                                    <div className="absolute right-7 top-5 bg-white border border-[#E1E5E8] rounded-lg shadow-md w-[67px] h-[75px] z-10">
                                        <button
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => navigate("/editpromo")}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="block text-[#FF3B30] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => alert(`Delete clicked for ${code.promoId}`)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <div className='mb-28 mt-0 border-none'></div> */}
        </div>
    );
};

export default PromoCodeList;
