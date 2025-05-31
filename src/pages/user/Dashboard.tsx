import {
  faChartArea,
  faChartBar,
  faChartColumn,
  faChartDiagram,
  faChartLine,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Dashboard: React.FC = () => {
  debugger;
  return (
    <>
      <div className=" flex flex-col gap-6">
        <div className="grid lg:grid-cols-4 xs:grid-cols-1 text-white font-bold md:grid-cols-2 gap-6">
          <div
            className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
          >
            <div className="text-primary">
              <FontAwesomeIcon icon={faChartLine} size="3x" />
            </div>
            <div className="flex flex-col">
              <span className="text-light">Base Invest</span>
              <span>Loading...</span>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
          >
            <div className="text-primary">
              <FontAwesomeIcon icon={faChartColumn} size="3x" />
            </div>
            <div className="flex flex-col">
              <span className="text-light">Last Transaction</span>
              <span>Loading...</span>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
          >
            <div className="text-primary">
              <FontAwesomeIcon icon={faChartArea} size="3x" />
            </div>
            <div className="flex flex-col">
              <span className="text-light">Total Profit</span>
              <span>Loading...</span>
            </div>
          </div>
          <div
            className="bg-secondary rounded-lg flex flex-row p-6 
      items-center justify-between"
          >
            <div className="text-primary">
              <FontAwesomeIcon icon={faChartPie} size="3x" />
            </div>
            <div className="flex flex-col">
              <span className="text-light">Total Revenue</span>
              <span>Loading...</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xs:grid-cols-1 text-white font-bold md:grid-cols-2 gap-6">
          <div className="h-42 bg-secondary rounded-lg"></div>
          <div className="h-42 bg-secondary rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
