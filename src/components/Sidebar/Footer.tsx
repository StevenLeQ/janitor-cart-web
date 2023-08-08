import React from 'react';
import { motion } from 'framer-motion';

import { UserIcon } from '@heroicons/react/24/solid';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed: boolean;
}

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const Footer: React.FC<FooterProps> = ({ collapsed }) => {
  return (
    <div className="mb-8 ml-auto mr-10 flex items-center gap-2">
      <UserIcon
        role="img"
        className="ml-4 h-11 w-11 rounded-full bg-gray-300 fill-black p-1.5"
      />
      <motion.div
        className="flex flex-col"
        initial={collapsed ? 'hidden' : 'visible'}
        animate={collapsed ? 'hidden' : 'visible'}
        variants={footerVariants}
        data-testid="footer-collapsed-test"
      >
        <motion.p className="text-base font-semibold ">Admin</motion.p>
        <motion.p className="-mt-1 text-sm">admin@admin.com</motion.p>
      </motion.div>
    </div>
  );
};
