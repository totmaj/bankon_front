import { useDispatch } from "react-redux";
import Dropdown from "../../../ui/Dropdown";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../../../ui/ProfileImage";

const UserProfileButton = () => {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("token", { path: "/" });
    dispatch(logoutUser());
    navigate("/");
  };

  const options = [
    { value: "profile", label: "Profile", href: "/profile" },
    { value: "logout", label: "Log Out", onClick: handleLogout },
  ];

  return (
    <Dropdown
      title={
        <div className="text-white flex items-center gap-[0.5rem] cursor-pointer">
          <ProfileImage size="2.5rem" />
          <p>Jasmine Brindle</p>
        </div>
      }
      options={options}
      asLinks={true}
    />
  );
};

export default UserProfileButton;
