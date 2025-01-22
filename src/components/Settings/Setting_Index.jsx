import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";
import Headings from "./Headings";

const Setting_Index = () => {
  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-grow">
        <Header />
        <Headings />
      </div>
    </div>
  );
};
export default Setting_Index; 