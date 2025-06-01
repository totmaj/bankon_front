import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface Param {
  children: any;
}
const MainLayout: React.FC<Param> = ({ children }) => {
  return (<>
    <div  className=" flex flex-col w-full  ">
       <Header /> 
      <div className="flex flex-row  ">
        <Sidebar />
        <main  className=" main w-full overflow-x-hidden">{children}</main>
      </div>
    </div>



</>
  );
};

export default MainLayout;
