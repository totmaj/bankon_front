import React from "react";
import Header from "./header/Header.tsx";
import Sidebar from "./sidebar/Sidebar.jsx";

interface Param {
  children: any;
}
const MainLayout: React.FC<Param> = ({ children }) => {
  return (
    <div  className=" flex flex-col w-full  ">
       <Header /> 
      <div className="flex flex-row  ">
        <Sidebar />
        <main  className=" main w-full ">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
