import React, { useState, useEffect } from "react";
import { sidebarData } from "../Data/data";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import FrameClose from "../assets/frameclose.svg"
import FrameOpen from "../assets/frameopen.svg"
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
  
  const [logoutPopup, setLogoutPopup] = useState(false);
  
  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    localStorage.clear("title");
    navigate("/");
  };

  const toggleLogoutPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleTabClick = (title, id, route) => {
    const currentTitle = localStorage.getItem("title"); // Get the current title
    if (currentTitle) {
        localStorage.setItem("previous-title", currentTitle); // Save current title as previous
    }
    
    localStorage.setItem("title", title); // Save the new title
    navigate(route);
};

useEffect(() => {
  const savedTitle = localStorage.getItem("title");
  const matchedItem = sidebarData.find((item) => item.route === location.pathname);

  if (matchedItem) {
    localStorage.getItem("title"); // Save current title as previous
    setActiveSection(matchedItem.title);
    localStorage.setItem("title", matchedItem.title);
  } else if (savedTitle) {
    setActiveSection(savedTitle);
  }

  // Listen to browser back/forward actions
  const handleBackButton = () => {
    const previousTitle = localStorage.getItem("previous-title");

    if (previousTitle) {
      const previousItem = sidebarData.find((item) => item.title === previousTitle);
      if (previousItem) {
        navigate(previousItem.route, { replace: true });
        localStorage.setItem("title", previousTitle); // Set title back
      }
    }
  };

  window.addEventListener("popstate", handleBackButton);

  return () => {
    window.removeEventListener("popstate", handleBackButton);
  };
}, [location, navigate, setActiveSection]);

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
            <div className={`${isCollapsed ? "" : "flex justify-between px-9"}`}>
              <div className={`${isCollapsed ? "hidden" : "w-16"} mt-[12px]`}>
                <img src={logo} alt="" />
              </div>
              <div
                className="ml-6 cursor-pointer"
                onClick={toggleSidebar}
              >
                {isCollapsed ? (
                  // <MdKeyboardArrowRight className="text-white mt-4 text-xl ml-[-20px]" />
                  <img src={FrameOpen} alt="frame-open" className="mt-4 ml-[-0.5rem]"/>
                ) : (
                  // <IoIosArrowBack className="text-white m-4 text-xl ml-[10px]" />
                  <img src={FrameClose} alt="frame-open" className="mt-4"/>
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
                      </div>
                    </li>
                  ))}
                  <li
                    className="flex items-center absolute bottom-4 space-x-4 p-2 rounded-full cursor-pointer ml-9"
                    onClick={() => setLogoutPopup(true)}
                  >
                    <img src={Logout} alt="Logout" className={`${isCollapsed ? "-ml-[30px]" : "w-6 h-6"}`} />
                    {!isCollapsed && (
                      <span className="text-white font-inter font-[400] text-[16px]">Logout</span>
                    )}
                  </li>
                  {logoutPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                      <div className="bg-white rounded-lg shadow-lg px-10 sm:px-14 py-6 sm:py-8">
                        <p className="mb-4 text-lg sm:text-xl text-[#19191A] font-medium text-center">
                          Are you sure you want to <br /> logout?
                        </p>
                        <div className="flex justify-center gap-5 sm:gap-7 pt-4">
                          <button
                            className="px-6 sm:px-8 py-2 text-[#19191A] rounded-md border border-gray-300"
                            onClick={() => setLogoutPopup(false)}
                          >
                            No
                          </button>
                          <button
                            className="px-6 sm:px-8 py-2 bg-[#ffd200] text-white rounded-md"
                            onClick={handleLogOut}
                          >
                            Yes
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
