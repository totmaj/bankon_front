import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/home/Home";
import { ToastContainer } from "react-toastify";
import SignUp from "../pages/public/signup/SignUp";
import Login from "../pages/public/login/Login";
import Layout from "../layouts/Layout";
import Monitoring from "../pages/public/monitoring/Monitoring";

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
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/monitoring"
        element={
          <Layout>
            <Monitoring />
          </Layout>
        }
      />
    </Routes>
  );
}
