import React from 'react';

import HeaderBreadcrumbs from './Breadcrumbs';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  breadcrumbs?: Bread[];
}

interface Bread {
  name: string;
  link: string;
  current: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="ml-2 w-full">
      <div className="mb-5 mt-2">
        {breadcrumbs && (
          <div className="mb-5">
            <HeaderBreadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        )}
        <p className="text-2xl font-semibold text-gray-800">{title}</p>
        <p className="text-base font-medium text-slate-500">{subtitle}</p>
      </div>
      <hr className="border-1 mr-8 h-px border-gray-200" />
    </div>
  );
};

export default Header;
