
import React from "react";

interface param {
  title: string;
  description: string;
  index: number;
} 
const FeatureItem2 : React.FC<param>= ({ title, description, index }) => {
  return (
    <div
      className={`text-white   ${
        index % 2 === 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col-reverse"
      } flex items-center justify-between`}
    >
      <div
        className=""
         data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      >
        <p className="font-bold text-[2rem] mb-[2rem]">{title}</p>
        <p className="text-[1.25rem]">{description}</p>
      </div>

      <div
        className="opacity-90"
         data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}
      >
        {index === 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="220"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.9"
              d="m12.37 2.15 9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0M22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1z"
            ></path>
            <path
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.9"
              d="M4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7"
            ></path>
            <path
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.9"
              d="M1 22h22"
            ></path>
            <path
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.9"
              d="M12 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="210"
            height="210"
            fill="none"
            viewBox="0 0 24 24"
          >
            <g
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="0.9"
            >
              <path d="M10.11 11.15H7.46c-.63 0-1.14.51-1.14 1.14v5.12h3.79z"></path>
              <path d="M12.762 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14M16.55 12.85H13.9v4.55h3.79v-3.41c-.01-.63-.52-1.14-1.14-1.14"></path>
            </g>
            <path
              stroke="var(--secondary-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.9"
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default FeatureItem2;
