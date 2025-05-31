import React from "react";

interface param{
  size:string
}
const ProfileImage:React.FC <param> = ({ size }) => {
  return (
    <div>
      <img
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
        src="/images/user-profile.jpg"
        alt="User Profile"
      />
    </div>
  );
};

export default ProfileImage;
