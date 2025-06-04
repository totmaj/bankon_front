import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/home/Home";
import React from "react";
import Monitoring from "../pages/user/Monitoring/Monitoring";

const UserRoutes: React.FC = () => {
  debugger;
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/monitoring" element={<Monitoring />} />
      {/* Default Redirect */}
    </Routes>
  );
};
export default UserRoutes;
