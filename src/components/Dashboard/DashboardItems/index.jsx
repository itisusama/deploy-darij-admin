import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import UserNumber from "./UserNumber";
import Graph from "./Graph";

const Dash_Board = () =>{
    return(
    <>
    <div className="flex">
        {/* <Sidebar/> */}
        <div className=" flex-grow">
            
        {/* <Header/> */}
         <UserNumber/>
         <Graph/>
        </div>
    
           
    
    </div>
        
    </>
        
    )
}
export default Dash_Board;