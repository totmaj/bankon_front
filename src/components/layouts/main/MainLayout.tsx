import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";

interface Param {
  children: any;
}
const MainLayout: React.FC<Param> = ({ children }) => {
  return (
    <>
      <div className=" flex flex-col w-full relative  ">
        <Header />
        <div className="flex flex-row  ">
          <Sidebar />
          <main className=" main w-full overflow-x-hidden md:pb-0 pb-16 mt-16 min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
