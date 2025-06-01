import React from "react";
import { Link } from "react-router-dom";

interface param {
  children?: any;
  type?: string | undefined;
  className?: string | undefined;
  href?: string | undefined;
  target?: string | undefined;
  outlined?: boolean | undefined;
  aos?: boolean;
  onClick?: () => void;
}
const PrimaryButton: React.FC<param> = ({
  children,
  className = "",
  href,
  target = "_self",
  outlined = false,
  onClick,
}) => {
  const baseClasses =
    "primary-button w-full mt-4 px-4 py-[0.5rem] rounded-md transition-all duration-300 font-semibold cursor-pointer flex justify-center items-center ";

  const styleClasses = !outlined
    ? "bg-[var(--dark-color)] border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--dark-color)]"
    : "bg-[var(--primary-color)] text-[var(--dark-color)]";

  const commonClasses = `${baseClasses} ${styleClasses} ${className}`;

  if (href) {
    return (
      <Link to={href} target={target} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={commonClasses}>
      {children}
    </button>
  );
};

export default PrimaryButton;
