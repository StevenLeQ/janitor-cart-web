import React from 'react';

import FormWrapper from '../../../components/Form/Container';
import FormContainer from '../../../components/Form/Header';
import Toggle from '../../../components/Common/Toggle';
import FormItem from '../../../components/Form/Item';
import FormDropdown from '../../../components/Form/Dropdown';

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

interface FormProps {
  hasInfo: boolean;
}

interface InfoItemProps {
  title: string;
  data: string;
  dataStyle?: string;
}

interface FormToggleProps {
  name: string;
}

// For the special blue box from editing company
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

// Currently only form needing toggles, extract once duplicated
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
const CompanyForm: React.FC<FormProps> = ({ hasInfo }) => {
  return (
    // Outer wrapper to set layout grid
    <FormWrapper>
      {/* Features */}
      <FormContainer header="Company Information">
        <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
          {/* Company Name */}
          <div className="sm:col-span-3">
            <FormItem name="name" title="Company Name" icon={<UserIcon />} />
          </div>
          {/* Phone */}
          <div className="sm:col-span-3">
            <FormItem name="phone" title="Phone" icon={<PhoneIcon />} />
          </div>

          {/* Email */}
          <div className="sm:col-span-6">
            <FormItem
              name="email"
              title="Email Address"
              icon={<EnvelopeIcon />}
            />
          </div>

          {/* Username */}
          <div className="sm:col-span-6">
            <FormItem
              name="user"
              title="Username"
              icon={<ArrowRightOnRectangleIcon />}
            />
          </div>

          {/* Work Rights */}

          <div className="sm:col-span-6">
            <FormDropdown />
          </div>
        </div>
      </FormContainer>

      {/* Blue info box */}
      {hasInfo && (
        <div className="col-span-1 row-span-full row-start-1 bg-indigo-100/90 shadow-sm ring-1 ring-gray-900/10 sm:h-[21rem] sm:rounded-lg md:row-span-3 md:row-start-auto lg:h-80">
          <div className="h-5 w-full py-4">
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
      <FormContainer
        pageLink="/superadmin/companies"
        header="Features"
        isSecond={true}
      >
        <div className="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-4 pt-2 sm:grid-cols-6">
          <FormToggle name="Announcements" />
          <FormToggle name="Employee Handbook" />
          <FormToggle name="Payroll" />
          <FormToggle name="Procedures" />
          <FormToggle name="SDS" />
          <FormToggle name="Time Clock" />
          <FormToggle name="Work Orders" />
        </div>
      </FormContainer>
    </FormWrapper>
  );
};

export default CompanyForm;
