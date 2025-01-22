import React from "react";
import UserProfile from "../../../assets/user.svg";
import Notification from "../../../assets/Notification.svg";

const Header = () => {
  return (
    <div className="w-full bg-white flex items-center justify-between p-1 shadow-md">
      
      <h1 className="text-xl text-gray-800 pl-4">Dashboard</h1>

    
      <div className="flex items-center justify-end space-x-6 mr-7">
        <div className="relative cursor-pointer">
          <img src={Notification} alt=" icon" />
        </div>
        
        <div
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img
            src={UserProfile}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Header;
