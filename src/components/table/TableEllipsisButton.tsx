// This component is the ellipsis used in each table row
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface LinkWrapper {
  title: string;
  link: string;
}

interface EllipsisProps {
  ellipsis_data?: LinkWrapper[];
  isNearEnd?: Boolean;
}

const TableEllipsisButton: React.FC<EllipsisProps> = ({
  ellipsis_data,
  isNearEnd
}) => {
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
        <Menu.Items
          className={`absolute right-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isNearEnd && 'bottom-6'
          }`}
        >
          {ellipsis_data?.map((item, index) => (
            <Menu.Item key={item.link}>
              {({ active }) => (
                <Link
                  to={item.link}
                  className={classNames(
                    active ? 'bg-indigo-100 text-blue-700' : 'text-font-gray',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <motion.p
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.1 * index
                    }}
                  >
                    {item.title}
                  </motion.p>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default TableEllipsisButton;
