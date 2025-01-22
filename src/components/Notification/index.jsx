import React from "react";
import Header from "../Dashboard/Header";
import Sidebar from "../Dashboard/Sidebar";
import Notificationalert from "./Notificationalert";

const NotificationComp = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-grow">
        <Header /> 
        <Notificationalert />
      </div>
    </div>
  );
};

export default NotificationComp;