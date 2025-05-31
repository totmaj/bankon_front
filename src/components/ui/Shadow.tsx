import React from "react";

interface param {
  className: string;
  color?: string;
}
const Shadow: React.FC<param> = ({
  className = "size-[20rem]",
  color = "var(--primary-color)",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3242"
        height="3248"
        fill="none"
        viewBox="0 0 3242 3248"
      >
        <g filter="url(#filter0_f_702_6)">
          <ellipse
            cx="622.046"
            cy="622.045"
            fill={color}
            rx="622.046"
            ry="622.045"
            transform="matrix(.99337 .115 -.09292 .99567 1060.81 933)"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter0_f_702_6"
            width="3241.32"
            height="3247.06"
            x="0.271"
            y="0.359"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_702_6"
              stdDeviation="500"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Shadow;
