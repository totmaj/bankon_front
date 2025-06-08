import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import React, { useEffect, useMemo, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/global.css";
import { User } from "./models/User.js";
import AppContext, { ContextType } from "./context/AppContext";
import UserRoutes from "./routes/UserRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import UserLayout from "./layouts/userLayouts/UserLayout";
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
            <UserLayout>
              <UserRoutes />
            </UserLayout>
          }
        />
        <Route path="/*" element={<PublicRoutes />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
