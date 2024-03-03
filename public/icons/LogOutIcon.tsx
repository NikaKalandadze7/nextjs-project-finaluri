import React from "react";
import { IconInterface } from "@/types";

const LogOutIcon: React.FC<IconInterface> = ({
  color,
  height,
  width,
}: IconInterface) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1222_37496)">
          <path
            d="M6.5 7H0.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 4.5L0.5 7L3 9.5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 0.5H10C9.44772 0.5 9 0.947715 9 1.5V12.5C9 13.0523 9.44772 13.5 10 13.5H12.5C13.0523 13.5 13.5 13.0523 13.5 12.5V1.5C13.5 0.947715 13.0523 0.5 12.5 0.5Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1222_37496">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LogOutIcon;
