import React from "react";
import TopRates from "./components/topRates/TopRates";
import RealtimeChart from "./components/realTime/RealtimeChart";
import StrategyChart from "./components/strategy/StrategyChart";
import RealTimeScript from "./components/realTime/RealTimeScript";
import StrategyScript from "./components/strategy/StrategyScript";

const Monitoring: React.FC = () => {
  return (
    <div className="m-8">
      <TopRates />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
        <RealtimeChart />
        <StrategyChart />
        <RealTimeScript />
        <StrategyScript />
      </div>
    </div>
  );
};

export default Monitoring;
