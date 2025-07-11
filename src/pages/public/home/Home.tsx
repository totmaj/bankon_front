import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Features2 from "./components/Features2";

const Home: React.FC = () => {
  return (
    <div
      className="
    flow-x-hidden flex flex-col items-center justify-center"
    >
      <Hero />
      <Features />
      <Features2 />
    </div>
  );
};

export default Home;
