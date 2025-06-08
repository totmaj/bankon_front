import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/home/Home";
import { ToastContainer } from "react-toastify";
import SignUp from "../pages/public/signup/SignUp";
import Login from "../pages/public/login/Login";
import PublicLayout from "../layouts/publicLayouts/PublicLayout";
import Monitoring from "../pages/public/monitoring/Monitoring";
import UserLayout from "../layouts/userLayouts/UserLayout";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <>
            <ToastContainer />
            <SignUp />
          </>
        }
      />

      <Route
        path="/login"
        element={
          <>
            <ToastContainer />
            <Login />
          </>
        }
      />
      <Route
        path="/*"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path="/monitoring"
        element={
          <PublicLayout>
            <Monitoring />
          </PublicLayout>
        }
      />
    </Routes>
  );
}
