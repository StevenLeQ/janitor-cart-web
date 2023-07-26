import React from 'react';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Custom Icons
import { ArrowUpIcon } from '../../shared/assets/ArrowUpIcon.tsx';
import { ArrowDownIcon } from '../../shared/assets/ArrowDownIcon.tsx';

interface HeaderProps {
  title?: number;
  salesBool?: boolean;
  subtitle?: string;
  link?: string;
  percent?: number;
  icon?: React.ReactNode;
}

const DashboardItem: React.FC<HeaderProps> = ({
  title,
  salesBool,
  subtitle,
  link,
  percent,
  icon
}) => {
  return (
    <div className="col-span-12 flex h-full w-full items-center justify-evenly rounded-lg border bg-white p-1 sm:col-span-6 lg:col-span-3">
      <div className="flex h-4/5 w-full flex-col">
        {/* Royal Blue Icons w/ light blue bg */}
        <div className="mx-5 my-1 flex flex-col">
          <div className="flex justify-between">
            <div className="flex h-[3.25rem] w-[3.25rem] items-center rounded-lg bg-grayish-blue p-3 text-royal-blue">
              {/* <DollarIcon size={50} /> */}
              {icon}
            </div>
            {/* Link to some other page if there is a link*/}
            {link && (
              <div className="text-royal-blue">
                <a href={link} data-testid="link-icon">
                  <ArrowTopRightOnSquareIcon className="h-7 w-7" />
                </a>
              </div>
            )}
          </div>
          {/* Big Number */}
          {salesBool ? (
            // Special case for the dollar sign
            <p className="mt-4 text-2xl font-bold text-font-black">
              {'$'}
              {title?.toLocaleString()}
            </p>
          ) : (
            <p className="mt-4 text-2xl font-bold text-font-black">
              {title?.toLocaleString()}
            </p>
          )}
          <div className="mb-7 flex justify-between">
            {/* Subtitle */}
            <p className="text-sm font-medium text-font-gray">{subtitle}</p>
            {/* Percent */}
            {percent && percent > 0 ? (
              <div
                className="flex text-emerald-400"
                data-testid="arrow-up-icon"
              >
                <span className="text-sm font-medium">{percent}%</span>
                <ArrowUpIcon size={18} data-testid="arrow-up-icon" />
              </div>
            ) : (
              <div className="flex text-red-400" data-testid="arrow-down-icon">
                <span className="text-sm font-medium">{percent}%</span>
                <ArrowDownIcon size={18} data-testid="arrow-down-icon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
