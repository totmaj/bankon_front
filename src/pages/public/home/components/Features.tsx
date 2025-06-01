import React from "react";
import sections from "../../../../assets/home-content";
import Shadow from "../../../../components/ui/Shadow";
import FeatureItem from "./FeatureItem";

const Features: React.FC = () => {
  const features = sections.section3.features;

  return (
    <div className=" w-full flex items-center justify-center overflow-hidden">
      <div className="size-full relative h-[800px] md:h-[400px] flex flex-col items-center justify-center">
         <Shadow
          className="size-[60rem]  opacity-20 -top-[50px]  z-0"
          color="#fff"
        /> 
        <div className="gradient-border h-[2px] w-full absolute top-0 "></div>

          <div className=" flex justify-center absolute flex-col md:flex-row">
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
