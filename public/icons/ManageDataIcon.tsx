import React from "react";
import { IconInterface } from "@/types";

const ManageDataIcon: React.FC<IconInterface> = ({
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
        <g clipPath="url(#clip0_1222_41204)">
          <path
            d="M6 4.74C9.03757 4.74 11.5 3.79084 11.5 2.62C11.5 1.44916 9.03757 0.5 6 0.5C2.96243 0.5 0.5 1.44916 0.5 2.62C0.5 3.79084 2.96243 4.74 6 4.74Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 6.00012V2.62012"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.5 2.62012V9.38012C0.5 10.4227 2.44092 11.2573 5 11.4564"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8.08C3 8.12 0.5 7.17 0.5 6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3999 11.3685L12.5589 12.0041L11.9232 11.1631"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5124 11.9409C12.6512 11.6742 12.7454 11.3784 12.784 11.0623C12.9564 9.64838 11.9499 8.36233 10.5359 8.18989C10.0884 8.13531 9.6537 8.19882 9.26306 8.35598"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.04492 10.1706L7.88592 9.53491L8.52158 10.3759"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.93225 9.59863C7.7934 9.86538 7.6992 10.1611 7.66065 10.4772C7.48821 11.8912 8.49468 13.1772 9.90867 13.3497C10.3562 13.4043 10.7909 13.3407 11.1815 13.1836"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1222_41204">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ManageDataIcon;
