import React from "react";
import Userlogo from "../../../assets/Statistics.svg"
import Language from "../../../assets/Tournament.svg"

const UserNumber = ( ) => {
    return( 
        <div className="flex justify-center items-center gap-2 mt-5">
            <div className="w-[50%] border border-gray-300 rounded-lg bg-white flex justify-between py-2">
                <div className="flex  justify-center flex-col pl-5">

                    <div className=" font-bold text-2xl py-1 ">344</div>
                    <div className=" font-inter text-gray-600">Total Number Of Users</div>
                </div>
                <div className="flex  justify-center flex-col pr-5"><img src={Userlogo} alt="" /></div>

            </div>

            <div className="w-[50%] border border-gray-300 rounded-lg bg-white flex justify-between py-2">
                <div className="flex  justify-center flex-col pl-5">

                    <div className=" font-bold text-2xl py-1 ">6</div>
                    <div className=" font-inter text-gray-600">Learning Language</div>
                </div>
                <div className="flex  justify-center flex-col pr-5"><img src={Language} alt="" /></div>

            </div>


        </div>
    );
};
export default UserNumber;