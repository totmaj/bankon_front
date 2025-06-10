import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Dropdown from "../../../components/ui/Dropdown";
import ProfileImage from "../../../components/ui/ProfileImage";
import AppContext from "../../../context/AppContext";

const UserProfileButton = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useContext(AppContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setToken("");
    setUser("");

    window.location.reload();
  };

  const options = [
    { value: "profile", label: "Profile", href: "/user/profile" },
    { value: "logout", label: "Log Out", onClick: handleLogout },
  ];

  const { user } = useContext(AppContext);
  return (
    <Dropdown
      title={
        <div className="text-white flex items-center gap-[0.5rem] cursor-pointer">
          <ProfileImage size="2.5rem" />
          <p>{user?.username}</p>
        </div>
      }
      options={options}
      asLinks={true}
    />
  );
};

export default UserProfileButton;
