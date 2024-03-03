import React from "react";
import { IconInterface } from "@/types";

const LoginIcon: React.FC<IconInterface> = ({
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
        <g clipPath="url(#clip0_1222_38050)">
          <path
            d="M5 5.5C6.38071 5.5 7.5 4.38071 7.5 3C7.5 1.61929 6.38071 0.5 5 0.5C3.61929 0.5 2.5 1.61929 2.5 3C2.5 4.38071 3.61929 5.5 5 5.5Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12.5001H0.5V11.958C0.507961 11.1958 0.708977 10.448 1.08427 9.78459C1.45957 9.12113 1.9969 8.56362 2.64607 8.16413C3.29525 7.76463 4.03509 7.5362 4.79648 7.50015C4.86436 7.49694 4.93222 7.49526 5 7.49512C5.06778 7.49526 5.13565 7.49694 5.20353 7.50015C5.96492 7.5362 6.70476 7.76463 7.35394 8.16413C7.72724 8.39385 8.06355 8.67582 8.35334 9.00015"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 8.5L9.5 13.5L7.5 12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1222_38050">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LoginIcon;
