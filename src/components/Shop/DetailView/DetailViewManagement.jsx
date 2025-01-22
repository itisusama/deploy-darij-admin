import React from 'react'
import DetailedViewList from '@/components/Shop/recentSalesComponents/DetailedViewList'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DetailViewManagement = () => {
    const navigate = useNavigate();
  return (
    <div>
            <div className="flex ml-6 my-7">
                <FaArrowLeft className='cursor-pointer mr-2' onClick={()=> navigate("/recent-sales")}/>
                <p className='font-inter font-[500] text-[20px] leading-5'>Detailed View <span className='text-[#B4B4B4] font-inter font-[500] text-[10px] leading-5'>(Promo Code - 99866, Subscription - Lifetime)</span></p>
            </div>
      <DetailedViewList/>
    </div>
  )
}

export default DetailViewManagement
