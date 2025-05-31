import React from "react";
import AuthPageContainer from "./auth/AuthPageContainer.tsx";
import SignUpForm from "./auth/SignUpForm.tsx";
import Header from "../../components/layouts/main/header/Header.tsx";

const SignUp: React.FC = () => {
  return (
    <div className=" flex flex-col w-full">
      <Header />
      <div className="flex flex-row ">
        <main className=" main w-full   flex">
          <AuthPageContainer>
            <SignUpForm />
          </AuthPageContainer>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
