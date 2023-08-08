import React from 'react';
import { motion } from 'framer-motion';

import logo from '../../shared/assets/logo.svg';

interface HeaderProps {
  collapsed: boolean;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const Header: React.FC<HeaderProps> = ({ collapsed }) => {
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
      </motion.div>
    </div>
  );
};
