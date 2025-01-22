import React, { useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { withPromoCode } from '../../../Data/RecentPromoCode';

const WithoutPromoSales = () => {
    const navigate = useNavigate();

    const handleViewDetailClick = () => {
        navigate(`/detailed-view`);
    };

    return (
        <div className='w-full h-[240px] border border-[#E1E5E8] rounded-[30px] bg-white overflow-hidden mb-24'>
            <table className="w-full h-full border-collapse">
                <thead className='h-[22px] bg-[#FFF1B2] text-black'>
                    <tr className="w-full">
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                            Subscription Plan
                        </th>
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                            Users
                        </th>
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8] font-inter font-[500] text-[14px] leading-5'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {withPromoCode.map((code, index) => (
                        <tr key={index} className="h-[12px] text-center relative">
                            <td className="border border-[#E1E5E8] text-start pl-2 font-inter font-[400] text-[12px] leading-5 h-[12px]">{code.subscriptionPlan}</td>
                            <td className="border border-[#E1E5E8] text-start pl-2 font-inter font-[400] text-[12px] leading-5 h-[12px]">{code.user}</td>
                            <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5 h-[12px]">
                                <div className="flex justify-center cursor-pointer" onClick={() => handleViewDetailClick(code.subscriptionPlan)}>
                                    <VscEye className="w-5 h-5 text-[#000000]" />
                                    <span className='pl-2'>View Detail</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WithoutPromoSales;