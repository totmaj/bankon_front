import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import MainLayout from "./components/layouts/main/MainLayout";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout";
import React, { useEffect, useMemo, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/global.css";
import { User } from "./models/User.js";
import AppContext, { ContextType } from "./context/AppContext";
import SignUp from "./pages/public/auth/SignUp";
import Home from "./pages/public/home/Home";
import UserRoutes from "./routes/UserRoutes";
import Monitoring from "./pages/public/Monitoring";
import Login from "./pages/public/auth/Login";
import PublicRoutes from "./routes/PublicRoutes";
const App: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const user_storage = JSON.parse(localStorage.getItem("user") || "null");
  const token_storage = localStorage.getItem("token") || "null";
  const navigate = useNavigate();
  const contextValue = useMemo<ContextType>(
    () => ({
      user,
      token,
      setUser,
      setToken,
    }),
    [user, token, setUser, setToken]
  );

  useEffect(() => {
    if (!user_storage && !token) {
      if (window?.location.href?.includes("user/")) navigate("/login");
    } else {
      setToken(token_storage);
      setUser(user_storage);
    }
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route
          path="/user/*"
          element={
            <DashboardLayout>
              <UserRoutes />
            </DashboardLayout>
          }
        />

        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
