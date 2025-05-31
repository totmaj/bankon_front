const ProfileImage = ({ size }) => {
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
