import PrimaryButton from "../../../ui/PrimaryButton";
import PrimaryLink from "../../../ui/PrimaryLink";
import Logo from "../Logo";
import UserProfileButton from "./UserProfileButton";
import React, { useContext } from "react";
import AppContext from "../../../../context/AppContext";

const Header: React.FC = () => {
  const { token } = useContext(AppContext);

  return (
    <header className="bg-[var(--dark-color)] h-[4.5rem] flex justify-between items-center px-4 border-b border-b-[var(--darkest-gray-color)]">
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
