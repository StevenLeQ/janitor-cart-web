import React from "react";
import { UserIcon} from '@heroicons/react/24/solid'

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed: boolean;
}

export const SidebarFooter: React.FC<SidebarHeaderProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  console.log();
  return (
    <div className={`flex items-center gap-2 ${collapsed ? "mx-auto" : "mx-8"} mb-8`}>
      <UserIcon className="w-11 h-11 fill-black bg-gray-300 p-1.5 rounded-full"/>
      {!collapsed && (
        <div className="flex flex-col">
          <p className="text-base font-semibold ">Admin</p>
          <p className="text-sm -mt-1">
            admin@admin.com
          </p>
        </div>
      )}
    </div>
  );
};
