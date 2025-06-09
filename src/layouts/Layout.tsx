import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface Param {
  children: any;
}
const Layout: React.FC<Param> = ({ children }) => {
  return (
    <>
      <div className="main flex flex-col w-full relative  ">
        <Header />
        <div className="flex flex-row main ">
          <Sidebar />
          <main className="  w-full overflow-x-hidden md:pb-0 pb-16 min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
