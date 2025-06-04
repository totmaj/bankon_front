import { Route, Routes } from "react-router-dom";
import Signup from "../pages/public/auth/SignUp";
import Home from "../pages/public/home/Home";
import Monitoring from "../pages/public/Monitoring";
import Login from "../pages/public/auth/Login";
import MainLayout from "../components/layouts/main/MainLayout";
import { ToastContainer } from "react-toastify";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <>
            <ToastContainer />
            <Signup />
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
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/monitoring"
        element={
          <MainLayout>
            <Monitoring />
          </MainLayout>
        }
      />
    </Routes>
  );
}
