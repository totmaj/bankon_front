import React, { useContext } from "react";
import PrimaryLink from "../../components/ui/PrimaryLink";
import PrimaryButton from "../../components/ui/PrimaryButton";
import AppContext from "../../context/AppContext";
import UserProfileButton from "./components/UserProfileButton";
import Logo from "./components/Logo";

const Header: React.FC = () => {
  const { token } = useContext(AppContext);

  return (
    <header className=" z-50 bg-secondary-dark-color w-full top-0 h-[4.5rem] flex justify-between items-center px-4 border-b border-b-[var(--darkest-gray-color)]">
      <Logo />

      {token ? (
        <UserProfileButton />
      ) : (
        <div className="flex items-center gap-[2rem]">
          <PrimaryLink target="" href="/register" className="opacity-100">
            Sign Up
          </PrimaryLink>

          <PrimaryButton
            href="/login"
            className="!w-[5.5rem] !mt-0 !p-[0.4rem]"
            outlined={true}
          >
            Log In
          </PrimaryButton>
        </div>
      )}
    </header>
  );
};

export default Header;
