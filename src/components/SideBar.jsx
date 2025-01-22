import React, { useState, useEffect } from "react";
import { sidebarData } from "../Data/data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Logout from "../assets/logout.png";

const SideBar = ({ activeSection, setActiveSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem("isCollapsed");
    return savedState ? JSON.parse(savedState) : false;
  });

  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("isCollapsed", JSON.stringify(newState));
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTitle = localStorage.getItem("title");
    const matchedItem = sidebarData.find((item) => item.route === location.pathname);
    if (matchedItem) {
      setActiveSection(matchedItem.title);
      localStorage.setItem("title", matchedItem.title);
    } else if (savedTitle) {
      setActiveSection(savedTitle);
    }
  }, [location, setActiveSection]);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.clear("title");
    navigate("/");
  };

  const handleTabClick = (title, id, route) => {
    console.log(title, "title here");
    localStorage.setItem("title", title);
  
    if (id === 3) { // For Games
      if (isGamesOpen) {
        setIsGamesOpen(false); // Close the dropdown
      } else {
        navigate(route); // Navigate to Games
        setIsGamesOpen(true); // Open the dropdown
      }
    } else {
      navigate(route); // For other tabs
    }
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={`top-0 left-0 z-40 h-full bg-black transition-all ${
          isCollapsed ? "w-fit" : "w-fit"
        }`}
        aria-label="Sidebar"
      >
        <div className="max-h-full flex flex-col justify-between items-center text-xs">
          <div className="w-full">
            <div className={`${isCollapsed ? "flex flex-col" : "flex justify-between px-9"}`}>
              <div className={`${isCollapsed ? "hidden" : "w-16"} mt-[12px]`}>
                <img src={logo} alt="" />
              </div>
              <div
                className="h-[16px] w-[16px] -mt-4 relative ml-9 p-4 rounded-full cursor-pointer"
                onClick={toggleSidebar}
              >
                {isCollapsed ? (
                  <MdKeyboardArrowRight className="text-white mt-4 text-xl ml-[-20px]" />
                ) : (
                  <IoIosArrowBack className="text-white bg-[#1a1a1a] rounded-full m-4 text-xl ml-[10px]" />
                )}
              </div>
            </div>
            <div className="mt-3 pr-5 pt-5">
              <div className="flex flex-col">
                <ul className="space-y-2 text-white">
                  {sidebarData.map((e) => (
                    <li
                      key={e.id}
                      className={`flex flex-col rounded-full cursor-pointer mx-2 ${
                        location.pathname === e.route ? "bg-[#1a1a1a] h-10" : "bg-transparent"
                      }`}
                      onClick={()=> handleTabClick(e.title, e.id, e.route)}
                    >
                      <div
                        className={`relative flex items-center ${
                          isCollapsed ? "py-2 px-2 ml-[-0.5rem]" : "mr-9 ml-7 py-2"
                        }`}
                      >
                        <img src={e.icon} alt={e.title} className={`${isCollapsed ? "ml-2" : "w-6 h-6"}`} />
                        {!isCollapsed && (
                          <div className="ml-5 flex-1 font-inter font-[400] text-[16px]">{e.title}</div>
                        )}
                        {/* {e.id === 3 && !isCollapsed && (
                          <FaChevronDown
                            className={`text-white text-lg transform ${
                              isGamesOpen ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          />
                        )} */}
                      </div>
                      {/* {e.id === 3 && isGamesOpen && (
                        <ul  className={`${isCollapsed ? "absolute left-16 bg-[#1a1a1a] text-white text-sm rounded-lg" : "ml-8 mt-2 bg-[#1a1a1a] text-white text-sm rounded-lg relative z-[100]"}`}>
                          {["Mini Game 1", "Mini Game 2", "Mini Game 3", "Mini Game 4", "Mini Game 5"].map((game, index) => {
                          const gamePaths = ["mini-game-one", "mini-game-two", "mini-game-three", "mini-game-four", "mini-game-five"];
                          return (
                            <li key={index} className="cursor-pointer hover:bg-gray-700 p-2">
                              <div onClick={() => navigate(`/${gamePaths[index]}`)}>{game}</div>
                            </li>
                          );
                        })}
                        </ul>
                      )} */}
                    </li>
                  ))}
                  <li
                    className="flex items-center absolute bottom-0 space-x-4 p-2 rounded-full cursor-pointer ml-9"
                    onClick={() => setLogoutPopup(true)}
                  >
                    <img src={Logout} alt="Logout" className={`${isCollapsed ? "-ml-[30px]" : "w-6 h-6"}`} />
                    {!isCollapsed && (
                      <span className="text-white font-inter font-[400] text-[16px]">Logout</span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
