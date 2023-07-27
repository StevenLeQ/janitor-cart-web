// This component is the ellipsis used in each table row

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function TableEllipsisButton() {
  return (
    <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button className="flex items-center text-gray-400 hover:text-indigo-500 focus:outline-none">
          <span className="sr-only">Open options</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-5 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="editCompany"
                  className={classNames(
                    active ? 'bg-indigo-100 text-blue-700' : 'text-font-gray',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit Company...
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-indigo-100 text-blue-700' : 'text-font-gray',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Deactivate Company...
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-indigo-100 text-blue-700' : 'text-font-gray',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Login As This Company...
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-indigo-100 text-blue-700' : 'text-font-gray',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    THIS TEXT IS UNSET
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
