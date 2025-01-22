import React from 'react'
import GamesHeader from '../GamesHeader'
import Button from '../../Shop/Button'
import pf from "../../../assets/OBJECTS.svg"

const ProfessionalVersion = () => {
    return (
        <div>
            <GamesHeader title="Add New" path="/add-new-minigameone" onBack="/mini-games" />
            <div className="flex justify-center mt-5">
                <img src={pf} alt="Professional Version" className='w-[270px] h-[270px] ' />
            </div>
            <p className='font-inter font-[400] text-[18px] text-[#B4B4B4] leading-6 text-center p-8'>No data found</p>
        </div>
    )
}

export default ProfessionalVersion;
