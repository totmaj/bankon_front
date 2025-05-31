import React from "react";
import sections from "../../../../assets/home-content";
import FeatureItem2 from "./FeatureItem2";

const Features2: React.FC = () => {
  const features = sections.section5;

  console.log(features);

  return (
    <div className="absolute top-[55rem] w-full flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full mt-[8rem] py-[10rem] flex flex-col items-center justify-center gap-[12rem] bg-[var(--secondary-dark-color)]">
        {features.map((feature, index) => (
          <FeatureItem2
            key={index}
            index={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features2;
