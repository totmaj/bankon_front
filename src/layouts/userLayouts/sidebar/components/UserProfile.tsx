import { useContext } from "react";
import AppContext from "../../../../context/AppContext";
import ProfileImage from "../../../../components/ui/ProfileImage";

const UserProfile: React.FC = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="flex items-center pl-6 pt-6 space-x-4">
      <ProfileImage size="2.5rem" />
      <div>
        <h2 className="text-white font-bold">{user?.username}</h2>
        <p className="text-light">Admin</p>
      </div>
    </div>
  );
};
export default UserProfile;
