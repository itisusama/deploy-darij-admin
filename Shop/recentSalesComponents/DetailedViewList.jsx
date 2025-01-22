import React, { useState } from 'react';
import { RecentPromoDetails } from '../../../Data/RecentPromoCode';

const DetailedViewList = () => {

    return (
        <div className='h-screen overflow-y-auto custom-scrollbar px-4'>
            
            <div className='w-full h-screen border border-[#E1E5E8] rounded-[22px] bg-white overflow-hidden mb-64'>
                <table className="w-full h-full border-collapse">
                    <thead className='h-[48px] bg-[#FFF1B2] text-black'>
                        <tr className="w-full">
                            <th className='w-[176px] h-[38px] border border-[#E1E5E8] text-start pl-2 first:rounded-tl-[22px] font-inter font-[500] text-[14px] leading-5'>
                                User Name
                            </th>
                            <th className='w-[176px] h-[38px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                                Email Address
                            </th>
                            <th className='w-[176px] h-[38px] border border-[#E1E5E8] text-start pl-2 font-inter font-[500] text-[14px] leading-5'>
                                Learning Languages
                            </th>
                            <th className='w-[176px] h-[38px] border border-[#E1E5E8]  font-inter font-[500] text-[14px] leading-5'>
                                Purchase Date
                            </th>
                            <th className='w-[176px] h-[38px] border border-[#E1E5E8]  font-inter font-[500] text-[14px] leading-5'>
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {RecentPromoDetails.map((code, index) => (
                            <tr key={index} className="h-[10px] text-center relative">
                                <td className="border border-[#E1E5E8] text-start pl-2 font-[400] text-[12px] leading-5 h-[12px]">{code.userName}</td>
                                <td className="border border-[#E1E5E8] text-start pl-2 font-inter font-[400] text-[12px] leading-5 h-[12px]">{code.emailAddress}</td>
                                <td className="border border-[#E1E5E8] text-start pl-6 font-inter font-[400] text-[14px] leading-5 h-[12px] relative">
                                    {code.learningLanguages.map((lang, idx) => (
                                        <img
                                            key={idx}
                                            src={lang.imageSrc}
                                            alt={`Language ${idx + 1}`}
                                            className={`w-[24px] h-[24px] inline-block ${idx === 1 ? "absolute top-[0.55] left-[6px]" : "mr-2"}`}
                                        />
                                    ))}
                                </td>


                                <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5 h-[10px]">{code.purchasedDate}</td>
                                <td className="border border-[#E1E5E8] font-inter font-[400] text-[12px] leading-5 h-[10px]">{code.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DetailedViewList