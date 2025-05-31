import { Route, Routes } from "react-router-dom";
import Login from "../pages/public/Login";
import Signup from "../pages/public/SignUp";
import Home from "../pages/public/home/Home";

export default function PublicRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Signup />} />
      {/* Default Redirect */}
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}
