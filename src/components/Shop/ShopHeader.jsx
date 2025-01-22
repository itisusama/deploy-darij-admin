import React from 'react';
import { NavLink } from 'react-router-dom';

const ShopHeader = () => {
    return (
        <div>
            <nav className='flex'>
                <div className="flex justify-start p-8 space-x-6 -ml-[15px]">
                    <NavLink 
                        to="/shop" 
                        className={({ isActive }) =>
                            isActive 
                                ? 'font-semibold text-[14px] leading-[20px] border-b-[3px] border-[#2B2A28] pb-1 text-[#2B2A28]' 
                                : 'font-inter font-normal text-[14px] leading-[20px] text-[#939393]'
                        }
                    >
                        Languages
                    </NavLink>
                    <NavLink 
                        to="/plan" 
                        className={({ isActive }) =>
                            isActive 
                                ? 'font-semibold text-[14px] leading-[20px] border-b-[4px] border-[#2B2A28] pb-1 text-[#2B2A28]' 
                                : 'font-inter font-normal text-[14px] leading-[20px] text-[#939393]'
                        }
                    >
                        Plans
                    </NavLink>
                    <NavLink 
                        to="/promo-code" 
                        className={({ isActive }) =>
                            isActive 
                                ? 'font-semibold text-[14px] leading-[20px] border-b-[4px] border-[#2B2A28] pb-1 text-[#2B2A28]' 
                                : 'font-inter font-normal text-[14px] leading-[20px] text-[#939393]'
                        }
                    >
                        Promo Code
                    </NavLink>
                    <NavLink 
                        to="/recent-sales" 
                        className={({ isActive }) =>
                            isActive 
                                ? 'font-semibold text-[14px] leading-[20px] border-b-[4px] border-[#2B2A28] pb-1 text-[#2B2A28]' 
                                : 'font-inter font-normal text-[14px] leading-[20px] text-[#939393]'
                        }
                    >
                        Recent Sales
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default ShopHeader;
