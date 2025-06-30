import React from "react";
import { bankItems } from "../../../constants/constansValues";
import BanksItem from "./components/BanksItem";

const Banks: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-dark p-4 text-white lg:m-6 m-2  text-2xl font-bold">
        BTCx
      </div>

      <div className="bg-dark p-8 text-white lg:m-6 m-2  text-center flex  flex-col space-y-8 ">
        <span className="text-3xl font-bold">
          Financial Institutions & Banks
        </span>
        <span className="text-light-gray-color">
          Browse through a list of banks and financial institutions offering
          DeFi and traditional services.
        </span>
        <div className="grid grid-cols-1 gap-8 ">
          {bankItems?.map((item, index) => {
            return <BanksItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Banks;
