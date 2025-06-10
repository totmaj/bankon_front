import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Account from "../pages/user/account/Account";
import Profile from "../pages/user/profile/Profile";
import AppContext from "../context/AppContext";

const UserRoutes: React.FC = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      //navigate("/home");
    }
  }, [user]);
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/account" element={<Account />} />
      <Route path="/profile" element={<Profile />} />
      {/* Default Redirect */}
    </Routes>
  );
};
export default UserRoutes;
