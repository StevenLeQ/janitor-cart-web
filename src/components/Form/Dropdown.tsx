import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { stateOptions } from './us-states-hash';

import { GlobeAltIcon, PhotoIcon } from '@heroicons/react/24/outline';

const Dropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('Federal'); // Default value

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, height: 0, marginTop: 0 },
    visible: { opacity: 1, y: 0, height: 'auto', marginTop: 20 }
  };

  return (
    <>
      <label htmlFor="rights" className="block text-sm font-medium leading-6">
        Work Rights Category
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {selectedValue === 'State' ? (
            <PhotoIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          ) : (
            <GlobeAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </div>
        <select
          id="rightsDropdown"
          name="rightsDropdown"
          className="mt-2 block w-full rounded-md border-0 py-2 pl-10 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Federal"
          value={selectedValue}
          onChange={handleSelectionChange}
        >
          <option value={'Federal'}>Federal</option>
          <option value={'State'}>State</option>
        </select>
      </div>

      {/* Conditional rendering of the second dropdown if value is State */}
      <AnimatePresence initial={false}>
        {selectedValue === 'State' && (
          <motion.div initial="hidden" animate="visible" exit="hidden" variants={dropdownVariants}>
            <label htmlFor="rights" className="block text-sm font-medium leading-6">
              State Selection
            </label>
            <select
              id="stateDropdown"
              name="stateDropdown"
              className="mt-2 block w-full rounded-md border-0 py-2 pl-2 pr-10 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {Object.entries(stateOptions).map(([stateCode, stateName]) => (
                <option key={stateCode} value={stateCode}>
                  {stateName}
                </option>
              ))}
            </select>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dropdown;
