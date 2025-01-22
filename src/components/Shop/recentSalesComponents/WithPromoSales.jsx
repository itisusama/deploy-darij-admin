import React, { useState } from 'react';
import { VscEye } from "react-icons/vsc";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { withPromoCode } from '@/Data/RecentPromoCode';
import { promoCode } from '@/Data/PromoCode';

const WithPromoSales = () => {
    const navigate = useNavigate();
    
        const handleViewDetailClick = () => {
            navigate(`/detailed-view`);
        };
    
  const test = promoCode[2]
  console.log(test, 'test consoled')
    return (
        <div className='w-full h-[240px] border border-[#E1E5E8] rounded-[30px] mb-[30px] bg-white overflow-hidden'>
            <table className="w-full h-full border-collapse">
                <thead className='h-[22px] bg-[#FFF1B2] text-black'>
                    <tr className="w-full">
                        <th className='w-[176px] h-[18px] border border-[#E1E5E8] text-start pl-2 first:rounded-tl-[30px] font-inter font-[500] text-[14px] leading-5'>
                            Promo Code
                        </th>
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                            Subscription Plan
                        </th>
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                            Users
                        </th>
                        <th className='w-[176px] h-[48px] border border-[#E1E5E8]  font-inter font-[500] text-[14px] leading-5'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {withPromoCode.map((code, index) => (
                        <tr key={index} className="h-[12px] text-center relative">
                            <td className="border border-[#E1E5E8] text-start pl-2 font-[400] text-[12px] leading-5 h-[12px]">{code.promoCode}</td>
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

export default WithPromoSales;