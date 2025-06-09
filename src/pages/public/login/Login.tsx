import React from "react";
import LoginForm from "./components/LoginForm";
import Header from "../../../layouts/header/Header";

const Login: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main w-full  flex h-[90vh] ">
          <div className="flex justify-center items-center w-screen ">
            <LoginForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
