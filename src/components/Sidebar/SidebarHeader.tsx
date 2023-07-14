import React from "react";
import logo from "../../assets/./Sidebar/logo.svg";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  collapsed,
  ...rest
}) => {
  console.log();
  return (
    <div className="flex items-center gap-2 my-8 mx-auto">
      <img className="w-12" src={logo} />
      {!collapsed && (
        <div className="flex flex-col mt-4">
          <p translate="no" className="font-logo text-lg font-semibold text-royal-blue">The</p>
          <p translate="no" className="font-logo text-lg font-semibold text-royal-blue -mt-2">
            JanitorCart
          </p>
        </div>
      )}
    </div>
  );
};
