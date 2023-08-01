import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const FormDropdown: React.FC = () => {
  return (
    <>
      <label htmlFor="rights" className="block text-sm font-medium leading-6">
        Work Rights Category
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <GlobeAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <select
          id="rights"
          name="rights"
          className="mt-2 block w-full rounded-md border-0 py-2 pl-10 pr-10 shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>Federal</option>
          <option>State</option>
        </select>
      </div>
    </>
  );
};

export default FormDropdown;
