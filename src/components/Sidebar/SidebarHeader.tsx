import React from 'react';
import logo from '../../assets/logo.svg'

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, rtl, ...rest }) => {
  return (
      <div className="flex items-center gap-2 my-8 mx-auto">
      <img className="w-12" src={logo} />
        <div className='flex flex-col mt-4'>
        <p className='font-logo text-lg font-semibold text-logo-blue'>
          The
        </p>
        <p className='font-logo text-lg font-semibold text-logo-blue -mt-2'>
          JanitorCart
        </p>
        </div>
      </div>
  );
};