import React from "react";
import { UserIcon } from "../../assets/UserIcon";
import userIcon from "../../assets/userIcon.svg"
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
      <img className="w-11" src={userIcon} />
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
