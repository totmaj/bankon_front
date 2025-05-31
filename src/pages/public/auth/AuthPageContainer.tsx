import React, { ReactNode } from "react";

interface Param{
  children:ReactNode
}
const AuthPageContainer:React.FC<Param> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-screen ">
      {children}
    </div>
  );
};

export default AuthPageContainer;
