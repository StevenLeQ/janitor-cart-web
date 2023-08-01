import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../shared/assets/logo.svg';

interface SidebarHeaderProps {
  collapsed: boolean;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ collapsed }) => {
  return (
    <div className="ml-auto mr-12 flex items-center gap-2">
      <img className="ml-4 w-12" src={logo} />

      <motion.div
        className="mt-4 flex flex-col"
        initial={collapsed ? 'hidden' : 'visible'}
        animate={collapsed ? 'hidden' : 'visible'}
        variants={headerVariants}
        data-testid="header-collapsed-test"
      >
        <motion.p
          translate="yes"
          className="font-logo text-lg font-semibold text-royal-blue"
        >
          The
        </motion.p>
        <motion.p
          translate="yes"
          className="-mt-2 font-logo text-lg font-semibold text-royal-blue"
        >
          JanitorCart
        </motion.p>
      </motion.div>
    </div>
  );
};
