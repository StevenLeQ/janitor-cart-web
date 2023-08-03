import React from 'react';

import FormItem from '../../components/form/FormItem';
import FormDropdown from '../../components/form/FormDropdown';
import FormButtons from '../../components/form/FormButtons';
import Alert from '../../components/common/Alert';

import { PhotoIcon, FolderIcon } from '@heroicons/react/24/outline';

interface FormProps {
  hasInfo: boolean;
}

// The Full Create Rights Form layout
const RightsForm: React.FC<FormProps> = ({ hasInfo }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  return (
    // Outer wrapper to set layout grid
    <div className="grid max-w-[150rem] grid-cols-1 gap-x-4 gap-y-8 text-font-black sm:m-5 sm:ml-11  md:grid-cols-3 2xl:grid-cols-4 ">
      {/* Alert if Cancel button is clicked */}
      {showAlert && (
        <Alert open={showAlert} setOpen={setShowAlert} leaveLink="/rights" />
      )}
      {/* Container - white box with 3/7 or so width */}
      <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2 md:row-span-4">
        {/* Header of form */}
        <div className="h-auto w-full pt-4">
          <span className="m-5 text-base font-medium">File Information</span>
          <hr className="border-1 mt-3 h-px border-gray-900/10" />
        </div>

        <div className="mb-2 px-3 py-6 sm:p-5">
          <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            {/* File Name */}
            <div className="sm:col-span-6">
              <FormItem name="name" title="File Name" icon={<FolderIcon />} />
            </div>

            {/* Work Rights */}

            <div className="sm:col-span-6">
              <FormDropdown />
            </div>
          </div>
        </div>
      </form>

      {/* Features form */}
      <div className="row-span-4 row-start-auto md:col-span-2 md:row-start-5">
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
          {/* Header of form */}
          <div className="h-auto w-full pt-4">
            <span className="m-5 text-base font-medium">File Upload</span>
            <hr className="border-1 mt-3 h-px border-gray-900/10" />
          </div>

          <div className="mb-2 px-3 py-6 sm:p-5">
            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-blue-50 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Click to upload</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PDF, SVG, PNG, JPG, or GIF
                </p>
                <p className="text-xs leading-5 text-gray-600">
                  (max, 800 X 800px, 10MB)
                </p>
              </div>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <FormButtons saveLink="/rights" setShowAlert={setShowAlert} />
      </div>
    </div>
  );
};

export default RightsForm;
