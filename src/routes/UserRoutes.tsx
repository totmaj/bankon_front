import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/home/Home";
import React from "react";
import Dashboard from "../pages/user/Dashboard";

const UserRoutes: React.FC = () => {
  debugger
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Default Redirect */}
    </Routes>
  );
};
export default UserRoutes