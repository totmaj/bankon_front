import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef } from "react";
import AppContext from "../../../../context/AppContext";
import ProfileImage from "../../../ui/ProfileImage";

const UserMenu = () => {
  const [userToggle, setUserTogged] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { user } = useContext(AppContext);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setUserTogged(false);
      }
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => setUserTogged(!userToggle)}
        className="flex items-center  space-x-4 md:w-48 xs:w-24 relative"
      >
        <ProfileImage  size="2.5rem" />
        <div className="text-light space-x-2 hover:text-primary flex flex-row  items-center">
          <span className="hidden md:block">{user?.username}</span>
          {userToggle === true ? (
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
          )}
        </div>
      </div>
      {userToggle === true && (
        <>
          <div
            ref={dropdownRef}
            className="absolute flex flex-col bg-secondary w-48 mt-2 rounded-b-lg space-y-2 items-left justify-left   text-light   z-10  right-0
              "
          >
            <button className="hover:bg-dark p-1">My Profile</button>
            <button className="hover:bg-dark p-1">Settings</button>
            <button className="hover:bg-dark p-1">Log Out</button>
          </div>
        </>
      )}
    </>
  );
};
export default UserMenu;
