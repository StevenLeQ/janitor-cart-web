import React from "react";
import { IconProps } from "../types";

export const ArrowDownIcon: React.FC<IconProps> = ({ size = 22 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >

<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
    </svg>
  );
};
