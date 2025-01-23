import React from 'react'
import ShopHeader from '@/components/Shop/ShopHeader'
import Button from '@/components/Shop/Button'
import Planlist from '@/components/Shop/PlanComponents/PlanList'

const PlanManagement = () => {
    return (
        <div className='px-4 custom-scrollbar'>
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

export default PlanManagement
