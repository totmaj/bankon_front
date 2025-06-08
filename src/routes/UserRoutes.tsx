import { Route, Routes } from "react-router-dom";
import React from "react";
import Monitoring from "../pages/user/monitoring/Monitoring";

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
