import React from 'react';

interface FormItemProps {
  name: string;
  title: string;
  icon?: React.ReactNode;
}

const FormItem: React.FC<FormItemProps> = ({ name, title, icon }) => {
  return (
    <>
      {/* Top label */}
      <label htmlFor={name} className="block text-sm font-medium leading-6 ">
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {/* Icon stuff to left */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          aria-hidden="true"
        >
          <div className="h-5 w-5 text-gray-400">{icon}</div>
        </div>
        {/* Input */}
        <input
          type={name}
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-10  outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default FormItem;
