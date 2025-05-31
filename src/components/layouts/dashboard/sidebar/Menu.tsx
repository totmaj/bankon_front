import React from "react";
import MenuItem from "./MenuItem";
import {
  faChartBar,
  faChartGantt,
  faDashboard,
  faDisplay,
  faFolder,
  faGauge,
  faListSquares,
  faPenAlt,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { faWpforms } from "@fortawesome/free-brands-svg-icons";
import { faGrin } from "@fortawesome/free-regular-svg-icons";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 w-5/6">
      <MenuItem
        title="Dashboard"
        href="/user/dashboard"
        active={window.location.href.includes("dashboard")}
        icon={faGauge}
      />
      <MenuItem title="Element" href="#" icon={faDisplay} />
      <MenuItem title="Widgets" href="#" icon={faListSquares} />
      <MenuItem title="Forms" href="#" icon={faFolder} />
      <MenuItem title="Tables" href="#" icon={faTable} />
      <MenuItem title="Charts" href="#" icon={faChartBar} />
    </div>
  );
};
export default Menu;
