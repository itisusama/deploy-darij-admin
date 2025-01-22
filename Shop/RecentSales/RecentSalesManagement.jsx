import React from 'react'
import WithPromoSales from '@/components/Shop/recentSalesComponents/WithPromoSales'
import ShopHeader from '@/components/Shop/ShopHeader'
import WithoutPromoSales from '@/components/Shop/recentSalesComponents/WithoutPromoSales'

const RecentSalesManagement = () => {
  return (
    <div className='h-screen overflow-y-auto custom-scrollbar'>
      <ShopHeader />
      <h2 className=' font-inter font-[600] text-[24px] leading-9 mb-2'>With Promo Code</h2>
      <WithPromoSales/>
      <h2 className=' font-inter font-[600] text-[24px] leading-9'>Without Promo Code</h2>
      <WithoutPromoSales/>
    </div>
  )
}

export default RecentSalesManagement
