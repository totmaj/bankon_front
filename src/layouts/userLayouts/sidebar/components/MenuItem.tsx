import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
interface MenuItemProps {
  title?: string;
  href?: string;
  icon?: IconDefinition;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}
const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href,
  icon,
  onClick,
  active,
  className,
  children,
}) => {
  return (
    <div className="flex flex-col space-y-4 ">
      <Link
        to={href!}
        className={`group text-light hover:text-primary hover:bg-dark rounded-r-full hover:border-l-3 border-l-3  hover:border-l-primary px-4 py-2 transition-colors duration-300
      flex items-center space-x-2  ${
        active ? "bg-dark text-primary border-l-primary" : "border-l-secondary"
      } `}
      >
        {icon && (
          <span
            className={`bg-dark items-center text-center hover:text-primary group-hover:bg-secondary w-10 h-10 rounded-full inline-flex items-center justify-center  transition-colors duration-200  ${
              active ? "bg-secondary p-2" : ""
            }`}
          >
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
        <span>{title}</span>
      </Link>

      {children && <div className="text-white">{children}</div>}
    </div>
  );
};
export default MenuItem;
