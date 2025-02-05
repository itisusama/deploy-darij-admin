import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { usePolicyContext } from "../Hooks/AddpolicyContext";
import UserProfile from "../assets/Group.svg";
import Notification from "../assets/Notification.svg";

const Header = () => {
    const location = useLocation();
    // const { name } = location.state || {};
    let title = "";
    const name = localStorage.getItem("name");

    switch (location.pathname) {
        case "/dashboard":
          title = "Dashboard";
          break;
        case "/users":
          title = "Users Management";
          break;
        case "/user-profile":
          title = "Users Management / View";
          break;
        case "/plan":
          title = "Shop";
          break;
        case "/addplan":
          title = "Shop / Add Plan";
          break;
        case "/editplan":
          title = "Shop / Edit Plan";
          break;
        case "/promo-code":
          title = "Shop";
          break;
        case "/addpromo":
          title = "Shop / Add";
          break;
        case "/editpromo":
          title = "Shop / Edit";
          break;
        case "/recent-sales":
          title = "Recent Sales";
          break;
        case "/detailed-view":
          title = "Recent Sales";
          break;
        case "/games":
          title = "Games";
          break;
        case "/mini-games":
          title = "Games";
          break;
        case "/mini-game-two":
          title = `Games/ ${name}`;
          break;
        case "/edit-game-version":
          title = `Games/ ${name}`;
          break;
        case "/edit-professional-version":
          title = "Games/ Mini Game 2";
          break;
        case "/add-professional-version":
          title = "Games/ Mini Game 2";
          break;
        case "/add-game-version":
          title = `Games/ ${name}`;
          break;
        case "/professional-version":
          title = "Games/ Mini Game 2";
          break;
        case "/mini-game-three":
          title = "Games / Mini Game 3";
          break;
        case "/edit-minigamethree":
          title = "Games / Mini Game 3";
          break;
        case "/add-minigamethree":
          title = "Games / Mini Game 3";
          break;
        case "/mini-game-four":
          title = "Games / Mini Game 4";
          break;
        case "/edit-minigamefour":
          title = "Games / Mini Game 4";
          break;
        case "/add-minigamefour":
          title = "Games / Mini Game 4";
          break;
        case "/mini-game-five":
          title = "Games / Mini Game 5";
          break;
          case "/add-new-minigamefive":
          title = "Games / Mini Game 5";
          break;
          case "/edit-new-minigamefive":
          title = "Games / Mini Game 5";
          break;
        case "/mini-game-one":
          title = "Games / Mini Game 1";
          break;
        case "/add-new-minigameone":
          title = "Games / Mini Game 1";
          break;
          case "/edit-new-minigameone":
          title = "Games / Mini Game 1";
          break;
          case "/minigameone-list":
          title = "Games / Mini Game 1";
          break;
        case "/shop":
          title = "Shop";
          break;
        case "/learn":
          title = "Learn";
          break;
        case "/word-learn":
          title = "Learn";
          break;
        case "/edit_word":
          title = "Learn";
          break;
        case "/settings":
          title = "Settings";
          break;
        case "/addbanner":
          title = "Settings";
          break;
        case "/notification":
          title = "Notification";
          break;
        default:
          title = "Default Title";
          break;
      }
  
return (
    <>
      <div className="w-full bg-white flex items-center justify-between p-1 shadow-md">
        
        <div>
        <h1 className="text-xl text-gray-800 pl-4">
          {title}
        </h1>
        </div>

        <div className="flex items-center justify-end space-x-6 mr-7">
        <Link to="/notification">
        <div className="relative cursor-pointer">
          <img src={Notification} alt=" icon" />
        </div>
        </Link>
        <Link to="/settings">
        <div
          className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img
            src={UserProfile}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        </Link>
      </div>

      </div>
    </>
  )
}

export default Header
