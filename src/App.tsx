import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/public/Login.tsx";
import MainLayout from "./components/layouts/main/MainLayout.tsx";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout.tsx";
import React, { useEffect, useMemo, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/global.css";
import { User } from "./models/User.js";
import AppContext, { ContextType } from "./context/AppContext";
import SignUp from "./pages/public/SignUp.tsx";
import Home from "./pages/public/home/Home.tsx";
import UserRoutes from "./routes/UserRoutes";
const App: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const contextValue = useMemo<ContextType>(
    () => ({
      user,
      token,
      setUser,
      setToken,
    }),
    [user, token, setUser, setToken]
  );
  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        {/* admin Routes */}

        {/* <Route
            path="/admin/*"
            element={
              <Layout language={language}>
                <AdminRoutes />
                <ToastContainer
                  hideProgressBar={true}
                  icon={false}
                  closeButton={true}
                />
              </Layout>
            }
          />

       

          <Route
            path="/superadmin/*"
            element={
              <SuperAdminLayout language={language}>
                <SuperAdminRoutes />
                <ToastContainer />
              </SuperAdminLayout>
            }
          /> */}
        {/* <Route
          path="/*"
          element={
            <MainLayout>
              <Route path="/*" element={<Home />} />
            </MainLayout>
          }
        /> */}

        <Route
          path="/user/*"
          element={
            <DashboardLayout>
              <UserRoutes />
            </DashboardLayout>
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
        <Route path="/register" element={<SignUp />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
