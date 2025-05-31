import React from "react";
import sections from "../../../../assets/home-content";
import PrimaryButton from "../../../../components/ui/PrimaryButton";
import Shadow from "../../../../components/ui/Shadow";

const Hero: React.FC = () => {
  const { title, subtitle, highlight, footer, button } = sections.section2;

  return (
    <section className="size-full relative overflow-hidden flex flex-col  items-center justify-center">
      <Shadow className="size-[60rem] opacity-60 mt-[20rem] z-0" />

      <div className="absolute  h-[40rem] top-0 w-full text-center flex flex-col items-center justify-center gap-[4rem]">
        <div
          data-aos="zoom-in"
          className="text-[var(--secondary-color)] text-[3rem] font-bold hero-title mt-0"
        >
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <div className="text-white text-[1.25rem]" data-aos="fade-up">
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
  );
};

export default Hero;
