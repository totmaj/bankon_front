import React from "react";
import sections from "../../../../assets/home-content";
import Shadow from "../../../../components/ui/Shadow";
import FeatureItem from "./FeatureItem";

const Features: React.FC = () => {
  const features = sections.section3.features;

  return (
      <div className="absolute top-[22rem] w-full flex flex-col items-center justify-center overflow-x-hidden">
        <Shadow
          className="size-[40rem] opacity-20 mb-[-25rem] z-0"
          color="#fff"
        />
        <div className="gradient-border h-[2px] w-full z-50"></div>

        <div className="w-full h-[30rem] relative">
          <div className="features-content size-full !z-[0] absolute"></div>

          <div className="z-50 relative flex justify-center mt-[8rem]">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                index={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
  
  );
};

export default Features;
