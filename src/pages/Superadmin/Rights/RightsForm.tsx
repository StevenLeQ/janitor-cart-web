import React from 'react';

import FormAlertWrapper from '../../../components/Form/Container';
import FormContainer from '../../../components/Form/Header';
import FormItem from '../../../components/Form/Item';
import FormDropdown from '../../../components/Form/Dropdown';

import { PhotoIcon, FolderIcon } from '@heroicons/react/24/outline';

interface FormProps {
  hasInfo: boolean;
}

// The Full Create Rights Form layout
const RightsForm: React.FC<FormProps> = ({ hasInfo }) => {
  return (
    // Outer wrapper to set layout grid
    <FormAlertWrapper>
      <FormContainer header="File Information">
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
      </FormContainer>

      {/* File Upload form */}
      <FormContainer pageLink="/superadmin/rights" header="File Upload" isSecond={true}>
        <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50 px-6 py-10">
          <div className="text-center">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-blue-50 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Click to upload</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PDF, SVG, PNG, JPG, or GIF</p>
            <p className="text-xs leading-5 text-gray-600">(max, 800 X 800px, 10MB)</p>
          </div>
        </div>
      </FormContainer>
    </FormAlertWrapper>
  );
};

export default RightsForm;
