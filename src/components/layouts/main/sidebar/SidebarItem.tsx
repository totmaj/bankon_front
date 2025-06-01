import { Link, useLocation } from "react-router-dom";
interface Props {
  href: string;
  title: string;
  className?: string;
  icon?: React.ReactNode;
}
import React from "react";
const SidebarItem: React.FC<Props> = ({
  href,
  title,
  className = "",
  icon,
}) => {
  const location = useLocation();

  const isActive = location.pathname === href;

  return (
    <li
      className={`${className} text-[1.15rem] font-[500] text-white pr-[1rem] rounded-md animate-fade-right animate-duration-200 flex justify-between items-center ${
        isActive ? "bg-[var(--dark-color)]" : ""
      }`}
    >
      <a
        href={href}
        target={href ? "_blank" : ""}
        className="w-full px-[1rem] py-[0.7rem]"
      >
        {title}
      </a>

      {icon}
    </li>
  );
};

export default SidebarItem;
