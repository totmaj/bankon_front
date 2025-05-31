import React from "react";
import PrimaryButton from "../../../components/ui/PrimaryButton";

interface Param {
  children: any;
  onSubmit?: any;
  title: any;
  subTitle: any;
  type?: any;
  buttonText?: string;
  afterButtonElement?: any;
  buttonDisabled?: boolean;
}
const AuthFormTemplate: React.FC<Param> = ({
  children,
  onSubmit,
  title,
  subTitle,
  type,
  afterButtonElement,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="login-form w-[35rem] mx-auto p-6 md:px-10 md:py-12 relative [@media(max-height:470px)]:h-full md:bg-[var(--secondary-dark-color)] rounded-3xl"
    >
      <div className="flex flex-col gap-[0.5rem] mb-[3rem]">
        <h2 className="text-xl font-semibold text-center text-white">
          {title}
        </h2>
        <p className="text-center text-[var(--light-gray-color)]">{subTitle}</p>
      </div>

      {children}

      <PrimaryButton type="submit">
        {type === "login" ? "Log In" : "Sign Up"}
      </PrimaryButton>

      {afterButtonElement}
    </form>
  );
};

export default AuthFormTemplate;
