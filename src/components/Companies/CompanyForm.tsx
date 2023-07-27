import { Link } from 'react-router-dom';

import Toggle from '../layout/Toggle';

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface CompanyFormProps {
  hasInfo: boolean;
}

interface FormItemProps {
  name: string;
  title: string;
  icon: React.ReactNode;
}

interface InfoItemProps {
  title: string;
  data: string;
  dataStyle?: string;
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

const CompanyFormDropdown = () => {
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

const InfoItem: React.FC<InfoItemProps> = ({ title, data, dataStyle }) => {
  return (
    <div className="grid-span-1">
      <span className="text-sm font-bold text-font-gray-200">
        {title + ' '}
      </span>
      <span className={dataStyle ?? 'font-base text-sm text-font-gray-200'}>
        {data}
      </span>
    </div>
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

// The Full Create Company Form layout
const CompanyForm: React.FC<CompanyFormProps> = ({ hasInfo }) => {
  return (
    <div className="grid max-w-[150rem] grid-cols-1 grid-rows-4 gap-x-4 gap-y-8 text-font-black sm:m-5 sm:ml-11 md:grid-cols-3 2xl:grid-cols-4 ">
      {/* Container - white box with 3/7 or so width */}
      <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2 md:row-span-4">
        {/* Header of form */}
        <div className="h-5 w-full py-5">
          <span className="m-5 text-base font-medium">Company Information</span>
          <hr className="border-1 mt-3 h-px border-gray-900/10" />
        </div>

        <div className="mb-2 mt-3 px-3 py-6 sm:p-5">
          <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
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

      {/* Blue info box */}
      {hasInfo && (
        <div className="col-span-1 row-span-full row-start-1 bg-indigo-100/90 shadow-sm ring-1 ring-gray-900/10 sm:rounded-lg md:row-span-3 md:row-start-auto ">
          <div className="h-5 w-full py-5">
            <span className="m-5 text-base font-bold">Devin Jhon</span>
            <hr className="border-1 mt-3 h-px border-gray-900/10" />
          </div>
          <div className="grid-row-1 mt-5 grid gap-y-2 px-3 py-6 sm:p-5">
            <InfoItem title="Last Login:" data="May 13th, 2023" />
            <InfoItem title="Onboarding:" data="May 13th, 2022" />
            <InfoItem title="Total Users:" data="15" />
            <InfoItem title="Total Facilities:" data="10" />
            <InfoItem title="Monthly Billing:" data="$99.00" />
            <InfoItem
              title="Payment Status:"
              data="Late"
              dataStyle="inline-flex items-center ml-1 rounded-full bg-yellow-50 px-4 py-1.5 text-xs font-semibold text-yellow-600 ring-1 ring-inset ring-yellow-400/80"
            />
            <InfoItem
              title="Status:"
              data="Active"
              dataStyle="inline-flex items-center ml-1 rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-600 ring-1 ring-inset ring-green-600/80"
            />
          </div>
        </div>
      )}

      {/* Features form */}
      <div className="row-span-4 row-start-auto md:col-span-2 md:row-start-5">
        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg">
          {/* Header of form */}
          <div className="h-5 w-full py-5">
            <span className="m-5 text-base font-medium">Features</span>
            <hr className="border-1 mt-3 h-px border-gray-900/10" />
          </div>

          <div className="mb-2 mt-3 px-3 py-6 sm:p-5">
            <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-4 pt-2 sm:grid-cols-6">
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

        {/* Buttons */}
        <div className="float-right mr-2 mt-4">
          <Link to={'/companies'}>
            <button
              type="button"
              className="mr-3 rounded-md border-2 px-5 py-2 text-center text-sm font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue hover:bg-indigo-100"
            >
              Cancel
            </button>
          </Link>

          <Link to={'/companies'}>
            <button
              type="button"
              className="rounded-md bg-royal-blue px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
