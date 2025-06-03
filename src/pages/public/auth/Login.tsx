import React from "react";
import Header from "../../../components/layouts/main/header/Header";
import LoginForm from "./components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main w-full  flex h-screen  pb-16">
          <div className="flex justify-center items-center w-screen ">
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
