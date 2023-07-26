import { Link } from 'react-router-dom';

import Toggle from '../layout/Toggle';

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface FormItemProps {
  name: string;
  title: string;
  icon: React.ReactNode;
}

interface FormToggleProps {
  name: string;
}

const FormItem: React.FC<FormItemProps> = ({ name, title, icon }) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm font-medium leading-6 ">
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
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

const CompanyFormDropdown = ({}) => {
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
          className="mt-2 block w-full rounded-md border-0 py-2 pl-10 pr-10  shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Canada"
        >
          <option>Federal</option>
          <option>State</option>
        </select>
      </div>
    </>
  );
};

const FormToggle: React.FC<FormToggleProps> = ({ name }) => {
  return (
    <div className="sm:col-span-6">
      <div className="flex justify-between">
        <span className="block text-base font-medium leading-6">{name}</span>
        <Toggle />
      </div>
    </div>
  );
};

// The Company form layout
export default function CompanyForm() {
  return (
    <>
      {/* Company form */}
      {/* Containter - white box with 3/7 or so width */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-font-black sm:m-5 sm:ml-11 md:grid-cols-3 2xl:grid-cols-5">
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2">
          {/* Header of form */}
          <div className="h-5 w-full py-5">
            <span className="m-5 text-base font-medium">
              Company Information
            </span>
            <hr className="border-1 mt-3 h-px border-gray-200" />
          </div>

          <div className="mb-2 mt-3 px-3 py-6 sm:p-5">
            <div className="grid max-w-2xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
              {/* Company Name */}
              <div className="sm:col-span-3">
                <FormItem
                  name="name"
                  title="Company Name"
                  icon={
                    <UserIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>
              {/* Phone */}
              <div className="sm:col-span-3">
                <FormItem
                  name="phone"
                  title="Phone"
                  icon={
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-6">
                <FormItem
                  name="email"
                  title="Email Address"
                  icon={
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>

              {/* Username */}
              <div className="sm:col-span-6">
                <FormItem
                  name="user"
                  title="Username"
                  icon={
                    <ArrowRightOnRectangleIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>

              {/* Work Rights */}

              <div className="sm:col-span-6">
                <CompanyFormDropdown />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Features box */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-font-black sm:m-5 sm:ml-11 md:grid-cols-3 2xl:grid-cols-5">
        {/* Set the width depending on screen size */}
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2">
          {/* Header of form */}
          <div className="h-5 w-full py-5">
            <span className="m-5 text-base font-medium">Features</span>
            <hr className="border-1 mt-3 h-px border-gray-200" />
          </div>

          <div className="mb-2 mt-3 px-3 py-6 sm:p-5">
            <div className="grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 pt-2 sm:grid-cols-6">
              <FormToggle name="Announcements" />
              <FormToggle name="Employee Handbook" />
              <FormToggle name="Payroll" />
              <FormToggle name="Procedures" />
              <FormToggle name="SDS" />
              <FormToggle name="Time Clock" />
              <FormToggle name="Work Orders" />
            </div>
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="m-3 ml-1 grid grid-cols-1 gap-x-8 gap-y-8 sm:m-5 sm:ml-11 md:grid-cols-4 2xl:grid-cols-5">
        <div className="col-span-2 ml-auto">
          <Link to={'/newCompany'}>
            <button
              type="button"
              className="mr-3 rounded-md border-2 px-5 py-2 text-center text-sm font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue hover:bg-indigo-100"
            >
              Cancel
            </button>
          </Link>

          <Link to={'/newCompany'}>
            <button
              type="button"
              className="rounded-md bg-royal-blue px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
