import React from "react";
import { poolItems } from "../../../constants/constansValues";
import PoolItem from "./components/PoolItem";

const Pools: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-dark p-4 text-white lg:m-6 m-2  text-2xl font-bold">
        BTCx
      </div>

      <div className="bg-dark p-8 text-white lg:m-6 m-2  text-center flex  flex-col space-y-8 ">
        <span className="text-3xl font-bold">Staking Pools</span>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 ">
          {poolItems?.map((item, index) => {
            return <PoolItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Pools;
