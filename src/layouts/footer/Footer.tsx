import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sidebarItems, userSidebarItems } from "../../constants/constansValues";
import AppContext from "../../context/AppContext";

const Footer = () => {
  const [list, setList] = useState<any>(sidebarItems);
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user?.username) {
      setList(userSidebarItems);
    }
  }, [user]);
  return (
    <>
      <footer className="md:hidden text-white p-4 fixed bottom-0 w-full main h-16 z-50 border-t border-t-[var(--darkest-gray-color)] flex flex-row justify-between">
        {list?.map((item: any, index: number) => (
          <button
            key={index}
            className="text-center flex items-center justify-center gap-2
          w-1/2"
          >
            <Link to={item.href}>
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
            </Link>
          </button>
        ))}
      </footer>

      <footer className=" bg-footer md:flex text-light p-8  w-full text-sm  border-t border-t-[var(--darkest-gray-color)] flex flex-row ">
        <div className="flex flex-col w-72 gap-4">
          <span className="text-gold-color font-bold text-xl">Trox</span>
          <span>© 2020-2025 Trox Labs </span>

          <span>
            All Rights Reserved. Trox Machine™ is a proprietary trading bot
            software.
          </span>
        </div>
        <div className="flex flex-col w-48 gap-2">
          <span>NAVIGATION</span>
          <span>Introduction</span>
          <span>Github</span>
          <span>Documentation</span>
          <span>Snapshot</span>
        </div>
        <div className="flex flex-col w-48"></div>
        <div className="flex flex-col w-48"></div>
      </footer>
    </>
  );
};
export default Footer;
