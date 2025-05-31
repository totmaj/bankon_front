import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import UserMenu from "./UserMenu";
interface Param {
  toggleMobileSidebar: () => void;
  toggleSidebar: () => void;
}
const Header: React.FC<Param> = ({ toggleMobileSidebar, toggleSidebar }) => {
  return (
    <>
      {/* Top navigation */}
      <div className="h-16 bg-secondary flex items-center justify-between px-4">
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileSidebar}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="bg-dark rounded-full p-3 text-primary"
          />
        </button>
        <button
          className="hidden md:block text-gray-600 focus:outline-none h-10 w-10  bg-dark rounded-full  text-primary"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} className="" />
        </button>
        <div>
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
