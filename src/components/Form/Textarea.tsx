import React from 'react';

interface TextareaProps {
  name: string;
  title: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, title }) => {
  return (
    <>
      {/* Top label */}
      <label htmlFor={name} className="block text-sm font-medium leading-6 ">
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {/* Input */}
        <textarea
          id={name}
          name={name}
          rows={3}
          className="block w-full rounded-md border-0 py-1.5 pl-2  outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
};

export default Textarea;
