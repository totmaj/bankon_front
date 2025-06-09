import { useContext, useEffect, useState } from "react";
import SidebarItem from "./components/SidebarItem";
import AppContext from "../../context/AppContext";

const sidebarItems = [
  {
    title: "Monitoring",
    href: "/monitoring",
    icon: "/assets/icons/sidebar/alcx_med.svg",
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },
];

const userSidebarItems = [
  {
    title: "Account",
    href: "/user/account",
    icon: "/assets/icons/sidebar/alcx_med.svg",
  },
  {
    title: "Monitoring",
    href: "/monitoring",
    icon: "/assets/icons/sidebar/vaults_med.svg",
  },
  {
    title: "Wallet",
    href: "/wallet",
    icon: "/assets/icons/sidebar/farm_med.svg",
  },

  {
    title: "Profile",
    href: "/user/profile",

    icon: "/assets/icons/sidebar/utilities_med.svg",
  },
];

const Sidebar: React.FC = () => {
  const [list, setList] = useState<any>(sidebarItems);
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user?.username) {
      setList(userSidebarItems);
    }
  }, [user]);
  return (
    <div className="w-[20rem] hidden md:block      border-r border-r-[var(--darkest-gray-color)] p-[1.5rem]  ">
      <nav>
        <ul className="flex flex-col gap-[1rem]">
          {list?.map((item: any, index: number) => (
            <SidebarItem
              key={index}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
