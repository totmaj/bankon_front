import React from "react";
import MenuItem from "./MenuItem";
import {
  faChartBar,
  faDisplay,
  faFolder,
  faGauge,
  faListSquares,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col mt-4 w-5/6">
      <MenuItem
        title="Monitoring"
        href="/user/monitoring"
        active={window.location.href.includes("monitoring")}
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
