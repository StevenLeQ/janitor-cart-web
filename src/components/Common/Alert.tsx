import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface AlertData {
  title: string;
  subtitle: string;
  button_text: string;
}

interface AlertProps {
  open: boolean;
  close_alert: () => void;
  leave_link: string;
  alert_data?: AlertData;
}

// Alert modal for form cancels and table item deletions
const Alert: React.FC<AlertProps> = ({ close_alert, leave_link, alert_data }) => {
  const cancelButtonRef = useRef(null);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="fixed inset-0 z-10"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
        className="fixed inset-0 z-10 bg-gray-500"
      />
      <div className="fixed inset-0 z-10 flex min-h-full items-end justify-center overflow-y-auto p-4 text-center sm:items-center sm:p-0">
        <motion.div initial="hidden" animate="visible" exit="exit" variants={panelVariants}>
          <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl  sm:w-full sm:max-w-lg sm:p-8">
            <div>
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full  ${
                  alert_data ? 'bg-red-50' : 'bg-yellow-50'
                }`}
              >
                <ExclamationTriangleIcon
                  className={`+ h-6 w-6 ${alert_data ? 'text-red-500' : 'text-yellow-500'}`}
                  aria-hidden="true"
                />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <div className="text-base font-semibold leading-6 text-gray-900">
                  {alert_data ? alert_data.title : 'Unsaved Changes'}
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {alert_data
                      ? alert_data.subtitle
                      : 'If you navigate away from this page without saving your data, the changes will be lost.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <Link
                id="alert-submit"
                to={leave_link}
                type="button"
                className={`inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2 ${
                  alert_data
                    ? 'bg-red-500 hover:bg-red-400 focus-visible:outline-red-600'
                    : 'bg-yellow-500 hover:bg-yellow-400 focus-visible:outline-yellow-600'
                }`}
                onClick={() => close_alert()}
              >
                {alert_data ? alert_data.button_text : 'Discard Changes'}
              </Link>
              <button
                id="alert-cancel"
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={() => close_alert()}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
