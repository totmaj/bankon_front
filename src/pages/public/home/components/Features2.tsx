import React from "react";
import sections from "../../../../assets/home-content";
import FeatureItem2 from "./FeatureItem2";
import Shadow from "../../../../components/ui/Shadow";

const Features2: React.FC = () => {
  const features = sections.section5;



  return (
   <div className=" w-full flex items-center justify-center overflow-hidden">
      <div className="size-full relative md:h-[650px] h-[1000px] flex flex-col items-center justify-center">
         <Shadow
          className="size-[90rem]  opacity-20 -top-[50px]  z-0"
          color="#fff"
        /> 
     
         <div className=" flex justify-between flex-col m-8 p-8 gap-16 absolute">

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
    </div>
  );
};

export default Features2;
