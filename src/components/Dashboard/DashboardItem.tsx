import React from "react";

import { ArrowUpIcon } from "../../assets/Dashboard/ArrowUpIcon.tsx";
// import { ArrowDownIcon } from "../../assets/ArrowDownIcon.tsx";
import { DashboardLinkIcon } from "../../assets/Dashboard/DashboardLinkIcon.tsx";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  link?: string;
  percent?: number;
  // fracBool?: boolean;
  icon?: React.ReactNode;
}

const DashboardItem: React.FC<HeaderProps> = ({
  title,
  subtitle,
  link,
  percent,
  // fracBool,
  icon,
}) => {
  return (
    <div className="flex col-span-3 justify-evenly items-center bg-white rounded-lg w-full h-full p-1 border">
      <div className="flex flex-col h-4/5 w-full">
        {/* Royal Blue Icons w/ light blue bg */}
        <div className="flex flex-col mx-5 my-1">
          <div className="flex justify-between">
            <div className="flex items-center text-royal-blue bg-grayish-blue w-[3.25rem] h-[3.25rem] p-3 rounded-lg">
              {/* <DollarIcon size={50} /> */}
              {icon}
            </div>
            {/* Link to some other page if there is a link*/}
            {link && (
              <div className="text-royal-blue">
                <a href={link}>
                  <DashboardLinkIcon size={28} />
                </a>
              </div>
            )}
          </div>
          {/* Big Number */}
          <p className="text-2xl font-bold mt-4 text-font-black">{title}</p>
          <div className="flex justify-between mb-7">
            {/* Subtitle */}
            <p className="text-sm font-medium text-font-gray">
              {subtitle}
            </p>
            {/* Percent */}
            <div className="flex text-emerald-400">
            <p className="text-sm font-medium">{percent}%</p>
              <ArrowUpIcon size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
