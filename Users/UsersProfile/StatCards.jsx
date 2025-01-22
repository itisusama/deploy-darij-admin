import React from 'react'
import Userlogo from "../../../assets/Statistics.svg"
import Language from "../../../assets/Tournament.svg"

const StatCards = ({LeftCardNumber, LeftCardName, RightCardNumber}) => {
  return (
    <div>
      {/* Stat */}
      <div className="flex justify-center items-center gap-2 mt-2">
                         <div className="w-[50%] border border-gray-300 rounded-lg bg-white flex justify-between py-2">
                             <div className="flex  justify-center flex-col pl-5">
             
                                 <div className=" font-bold text-[32px] py-1 ">{LeftCardNumber}</div>
                                 <div className=" font-inter text-[#2B2A28]">{LeftCardName}</div>
                             </div>
                             <div className="flex  justify-center flex-col pr-5"><img src={Userlogo} alt="" /></div>
                         </div>
                         <div className="w-[50%] border border-gray-300 rounded-lg bg-white flex justify-between py-2">
                             <div className="flex  justify-center flex-col pl-5">
                                 <div className=" font-bold text-[32px] py-1 ">{RightCardNumber}</div>
                                 <div className=" font-inter text-[#2B2A28]">Ranking</div>
                             </div>
                             <div className="flex  justify-center flex-col pr-5"><img src={Language} alt="" /></div>
                         </div>             
                     </div>
             {/* Stat */}
    </div>
  )
}

export default StatCards
