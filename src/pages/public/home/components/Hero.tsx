import React from "react";
import sections from "../../../../assets/home-content";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import Shadow from "../../../../components/ui/Shadow";

const Hero: React.FC = () => {
  const { title, subtitle, highlight, footer, button } = sections.section2;

  return (
    <div className=" w-full h-[90vh] flex items-center justify-center overflow-hidden">
      <section className="size-full relative  flex flex-col items-center justify-center">
        <Shadow className="size-[80rem] opacity-60 mt-[20rem] z-0" />

        <div className="absolute h-[50rem] top-0 w-full text-center flex flex-col items-center justify-center gap-[4rem]">
          <div
            data-aos="zoom-in"
            className="text-gold-color text-[2rem] md:text-[3rem] font-bold hero-title mt-0"
          >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>

          <div className="text-white  text-[1rem] md:text-[1.25rem]" data-aos="fade-up">
            <p className="mb-[0.5rem]">{highlight}</p>
            <p>{footer}</p>
          </div>

          <div data-aos="fade-up">
            <PrimaryButton
              aos={true}
              data-aos="fade-up"
              href="/register"
              className="!w-[12rem] m-auto z-10"
            >
              {button}
            </PrimaryButton>
          </div>
        </div>

        {/* <Features /> */}
      </section>
    </div>
  );
};

export default Hero;
