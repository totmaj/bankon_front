import { Link, useLocation } from "react-router-dom";
interface Props {
  href: string;
  title: string;
  className?: string;
  icon?: string;
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
    <button
      className={`${className}  text-[1.15rem] font-[500] text-light hover:text-white hover:opacity-100 pr-[1rem] rounded-md animate-fade-right animate-duration-200 flex justify-between items-center ${
        isActive ? "bg-secondary text-white opacity-100" : "opacity-80"
      }`}
    >
      <Link to={href} className="w-full px-[1rem] py-[0.7rem] text-left">
        {title}
      </Link>

     <img src={icon} alt=""  width={20}/>
    </button>
  );
};

export default SidebarItem;
