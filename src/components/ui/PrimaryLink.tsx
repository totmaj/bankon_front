import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface param {
  href: string;
  children?: ReactNode;
  className?: string;
  target?: string;
}
const PrimaryLink: React.FC<param> = ({
  href,
  children,
  className = "",
  target = "_self",
}) => {
  return (
    <Link
      to={href}
      target={target}
      className={`text-[var(--primary-color)] opacity-90 transition-all duration-300 hover:opacity-100 ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryLink;
