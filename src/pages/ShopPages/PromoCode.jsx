import React from 'react'
// import ShopHeader from '../../components/shop/ShopHeader'
// import Button from '../../components/shop/Button'
// import PromoCodeList from '../../components/Shop/promoCode2/PromoCodeList'

const PromoCode = () => {
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

export default PromoCode