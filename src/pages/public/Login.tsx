import React from "react";

import Header from "../../components/layouts/main/header/Header.tsx";
import AuthPageContainer from "./auth/AuthPageContainer.tsx";
import LoginForm from "./auth/LoginForm.tsx";

const Login: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main w-full h-full flex">
          <AuthPageContainer>
            <LoginForm />
          </AuthPageContainer>
        </main>
      </div>
    </div>
  );
};

export default Login;
