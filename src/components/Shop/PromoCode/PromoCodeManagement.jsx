import React from 'react'
import ShopHeader from '@/components/Shop/ShopHeader'
import Button from '@/components/Shop/Button'
import PromoCodeList from '../promoCodeComponents/PromoCodeList'

const PromoCodeManagement = () => {
    return (
        <div>
          {/* ShopHeader and Button */}
          <div className="flex justify-between">
            <ShopHeader />
            <Button title="Add Promo Code" path="/addpromo" />
          </div>
    
          {/* Promo Code list */}
            <PromoCodeList />
        </div>
      )
}

export default PromoCodeManagement
