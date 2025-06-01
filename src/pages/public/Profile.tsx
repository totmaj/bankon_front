import React from "react";
import ProfileImage from "../../components/ui/ProfileImage.js";

const Profile :React.FC  = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh]">
      <ProfileImage size="10rem" />

      <div className="flex flex-col items-center mt-10 gap-[1rem] text-[1.1rem]">
        <p className="text-white">jasmine_brindle</p>
        <p className="text-[var(--gray-color)]">jasmine@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
