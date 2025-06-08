import { faClose, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UserProfile from "./components/UserProfile";
import Menu from "./components/Menu";
import { Link } from "react-router-dom";
interface Param {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<Param> = ({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}) => {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };
  return (
    <>
      {/* Sidebar for desktop */}
      <div
        className={`hidden md:flex md:flex-shrink-0 ${
          sidebarOpen ? "w-64" : "w-0"
        } bg-secondary transition-all duration-500 ease-in-out flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {sidebarOpen === true ? (
            <Link
              to="/"
              className="text-primary flex flex-row gap-2 text-3xl items-center"
            >
              <FontAwesomeIcon icon={faUserPen} />
              <span className="text-primary font-bold">Trox</span>
            </Link>
          ) : (
            <></>
          )}
        </div>
        {/* Add your sidebar navigation items here */}
        <UserProfile />
        <Menu />
      </div>
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-secondary transform ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-500 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <Link
            to="/"
            className="text-primary flex flex-row gap-2 text-3xl items-center"
          >
            <FontAwesomeIcon icon={faUserPen} />
            <span className="text-primary font-bold">Trox</span>
          </Link>

          <button onClick={toggleMobileSidebar}>
            <FontAwesomeIcon
              icon={faClose}
              className="bg-dark rounded-full p-3 text-primary"
            />
          </button>
        </div>
        <UserProfile />
        <Menu />
      </div>
    </>
  );
};

export default Sidebar;
