import React from 'react';
import logo from '../../assets/./Sidebar/logo.svg';

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  return (
    <div className="mx-auto my-8 flex items-center gap-2">
      <img className="w-12" src={logo} />
      {!collapsed && (
        <div className="mt-4 flex flex-col">
          <p
            translate="no"
            className="font-logo text-lg font-semibold text-royal-blue"
          >
            The
          </p>
          <p
            translate="no"
            className="-mt-2 font-logo text-lg font-semibold text-royal-blue"
          >
            JanitorCart
          </p>
        </div>
      )}
    </div>
  );
};
