import React from "react";
import SignUpForm from "./components/SignUpForm";
import Header from "../../../layouts/header/Header";

const SignUp: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main w-full  flex h-[90vh]  ">
          <div className="flex justify-center items-center w-screen ">
            <SignUpForm />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
