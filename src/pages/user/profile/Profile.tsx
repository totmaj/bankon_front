import React, { useContext } from "react";
import ProfileImage from "../../../components/ui/ProfileImage";
import AppContext from "../../../context/AppContext";

const Profile :React.FC  = () => {
  const{user}=useContext(AppContext)
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <ProfileImage size="10rem" />

      <div className="flex flex-col items-center mt-10 gap-[1rem] text-[1.1rem]">
        <p className="text-white">{user?.username}</p>
        <p className="text-[var(--gray-color)]">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
