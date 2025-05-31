import React, { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

interface Param {
  children: ReactNode;
}

const DashboardLayout: React.FC<Param> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        mobileSidebarOpen={mobileSidebarOpen}
      ></Sidebar>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          toggleMobileSidebar={toggleMobileSidebar}
          toggleSidebar={toggleSidebar}
        ></Header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 bg-dark">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
