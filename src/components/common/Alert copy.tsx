import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface AlertProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  leaveLink: string;
}

const Alert: React.FC<AlertProps> = ({ open, setOpen, leaveLink }) => {
  const cancelButtonRef = useRef(null);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate={open ? 'visible' : 'hidden'}
      exit="hidden"
      variants={backdropVariants}
      className="fixed inset-0 z-10 bg-gray-500"
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="fixed inset-0 z-10 flex min-h-full items-end justify-center overflow-y-auto p-4 text-center sm:items-center sm:p-0">
          <motion.div
            initial="hidden"
            animate={open ? 'visible' : 'hidden'}
            variants={panelVariants}
          >
            <Dialog.Panel className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl  sm:w-full sm:max-w-lg sm:p-8">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
                  <ExclamationTriangleIcon
                    className="h-6 w-6 text-yellow-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Unsaved Changes
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If you navigate away from this page without saving your
                      data, the changes will be lost.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <Link
                  to={leaveLink}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                  onClick={() => setOpen(false)}
                >
                  Discard Changes
                </Link>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </motion.div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default Alert;
