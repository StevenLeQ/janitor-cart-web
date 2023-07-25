import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarHeaderProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  return (
    <div
      className={`flex items-center gap-2 ${
        collapsed ? 'mx-auto' : 'mx-8'
      } mb-8`}
    >
      <UserIcon
        role="img"
        className="h-11 w-11 rounded-full bg-gray-300 fill-black p-1.5"
      />
      {!collapsed && (
        <div className="flex flex-col">
          <p className="text-base font-semibold ">Admin</p>
          <p className="-mt-1 text-sm">admin@admin.com</p>
        </div>
      )}
    </div>
  );
};
