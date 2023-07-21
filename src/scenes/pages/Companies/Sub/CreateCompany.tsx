// import { faker } from "@faker-js/faker";

import Header from "../../../../components/Header/Header";

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightOnRectangleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const bread = [
  { name: "Companies", link: "/companies", current: true },
  { name: "New Company", link: "/newCompany", current: true },
];

const CreateCompany = () => {
  return (
    <div className="w-full mb-5">
      <div className="sm:m-5 sm:mx-10 m-3 mx-1 flex flex-col items-center gap-5">
        {/* Outside Header and H-rule */}
        <Header
          title="Add New Company"
          subtitle="Create a new company for The Janitor Cart services"
          breadcrumbs={bread}
        />
      </div>

      {/* The whole form layout */}
      <div className="sm:m-5 sm:ml-11 m-3 ml-1 space-y-10 divide-y divide-gray-900/10 text-font-black">
        {/* Set the width depending on screen size */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 2xl:grid-cols-5 md:grid-cols-3">
          <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg md:col-span-2">
            {/* Header of form */}
            <div className="w-full py-5 h-5">
              <span className="m-5 font-medium text-base">
                Company Information
              </span>
              <hr className="h-px mt-3 border-1 border-gray-200" />
            </div>

            <div className="px-3 py-6 sm:p-5 mt-3 mb-2">
              <div className="grid max-w-2xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
                {/* Company Name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 "
                  >
                    Company Name
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <UserIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-0 py-1.5 pl-10  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 "
                  >
                    Phone Number
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <PhoneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="phone"
                      name="phone"
                      id="phone"
                      className="block w-full rounded-md border-0 py-1.5 pl-10  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Email Address
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pl-10  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>

                {/* Username */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="user"
                    className="block text-sm font-medium leading-6 "
                  >
                    Username
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <ArrowRightOnRectangleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="user"
                      name="user"
                      id="user"
                      className="block w-full rounded-md border-0 py-1.5 pl-10  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                    />
                  </div>
                </div>

                {/* Work Rights */}
                <div className="sm:col-span-6">
                  <label
                    htmlFor="rights"
                    className="block text-sm font-medium leading-6 "
                  >
                    Work Rights Category
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <GlobeAltIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <select
                      id="rights"
                      name="rights"
                      className="mt-2 block w-full rounded-md border-0 py-2 pl-10 pr-10  ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none shadow-sm"
                      defaultValue="Canada"
                    >
                      <option>Federal</option>
                      <option>State</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
