import React from "react";

import Header from "../../components/layouts/main/header/Header";
import AuthPageContainer from "./auth/AuthPageContainer";
import LoginForm from "./auth/LoginForm";
import Footer from "../../components/layouts/main/footer/Footer";

const Login: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main  flex h-screen  pb-16">
          <AuthPageContainer>
            <LoginForm />
          </AuthPageContainer>
        </main>
      </div>
    </div>
  );
};

export default Login;
