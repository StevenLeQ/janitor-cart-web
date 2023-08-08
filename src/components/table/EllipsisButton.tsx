import React, { useState, useEffect, useRef, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Alert from '../common/Alert';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

interface AlertData {
  title: string;
  subtitle: string;
  button_text: string;
}

interface EllipsisData {
  title: string;
  link?: string;
  alert_data?: AlertData;
}

interface EllipsisProps {
  ellipsis_data?: EllipsisData[];
  isNearEnd?: Boolean;
}

const EllipsisButton: React.FC<EllipsisProps> = ({
  ellipsis_data,
  isNearEnd
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef: RefObject<HTMLDivElement> = useRef(null);
  const [showAlert, setShowAlert] = React.useState(false);

  const closeAlert = () => setShowAlert(false);
  const openAlert = () => setShowAlert(true);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    }
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleMenuToggle}
        className="flex items-center text-gray-400 hover:text-indigo-500 focus:outline-none"
      >
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute right-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isNearEnd && 'bottom-6'
          }`}
        >
          {ellipsis_data?.map((item, index) => {
            console.log(item);
            if (item.link) {
              return (
                <Link
                  key={item.link}
                  to={item.link ?? ''}
                  className="text-s block px-4 py-2 text-font-gray hover:bg-indigo-100 hover:text-blue-700"
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
              );
            } else if (item.alert_data) {
              return (
                <React.Fragment key={index}>
                  <AnimatePresence initial={false}>
                    {showAlert && (
                      <Alert
                        open={showAlert}
                        close_alert={closeAlert}
                        leave_link={'#'}
                        alert_data={item.alert_data}
                      />
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => {
                      openAlert();
                    }}
                    className="block w-full px-4 py-2 text-right text-font-gray hover:bg-indigo-100 hover:text-blue-700"
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
                  </button>
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </motion.div>
      )}
    </div>
  );
};

export default EllipsisButton;
