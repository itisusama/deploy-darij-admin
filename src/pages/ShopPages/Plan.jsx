import React from 'react'
// import Button from '../../components/shop/Button'
// import ShopHeader from '../../components/shop/ShopHeader'
// import Planlist from "../../components/shop/plan/PlanList"

const Plan = () => {
    return (
        <div>
            {/* ShopHeader and Button */}
            <div className="flex justify-between">
                <ShopHeader />
                <Button title="Add Plan" path="/addplan" />
            </div>


            {/* plans list */}
            <Planlist />
        </div>  
    )
}

export default Plan