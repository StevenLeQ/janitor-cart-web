import React from "react";
import { DollarIcon } from "../../assets/DollarIcon.tsx";
import { DashboardLinkIcon } from "../../assets/DashboardLinkIcon.tsx";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  link?: string;
  // frac?: number;
  // fracBool?: boolean;
  // icon?: string;
}

const DashboardItem: React.FC<HeaderProps> = ({
  title,
  subtitle,
  link,
  // frac,
  // fracBool,
  // icon,
}) => {
  return (
    <div className="flex col-span-3 justify-evenly items-center bg-white rounded-lg w-full h-full p-1 border">
      <div className="flex flex-col h-4/5 w-full">
        {/* Royal Blue Dollar Symbol */}
        <div className="flex flex-col mx-5 my-1">
          <div className="flex justify-between">
            <div className="flex items-center stroke-royal-blue bg-grayish-blue w-14 h-14 p-3 rounded-lg">
              <DollarIcon size={50} />
            </div>
            {/* Link to some other page if there is a link*/}
            {link && (
              <div className="stroke-royal-blue">
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
            <p className="text-regular font-normal text-font-gray">
              {subtitle}
            </p>
            {/* Percent */}
            <p className="text-regular font-medium text-emerald-400">0.43%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
