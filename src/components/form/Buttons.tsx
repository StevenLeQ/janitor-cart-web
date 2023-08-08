import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../common/Alert';

interface ButtonProps {
  saveLink: string;
}

const Buttons: React.FC<ButtonProps> = ({ saveLink }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  const closeAlert = () => setShowAlert(false);
  const openAlert = () => setShowAlert(true);

  return (
    <div className="float-right mr-2 mt-3">
      {/* Display Alert if showAlert is on*/}
      <AnimatePresence initial={false}>
        {showAlert && (
          <Alert
            open={showAlert}
            close_alert={closeAlert}
            leave_link={saveLink}
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          openAlert();
        }}
        type="button"
        className="mr-3 rounded-md border-2 px-5 py-2 text-center text-sm font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue hover:bg-indigo-100"
      >
        Cancel
      </button>

      <Link
        to={saveLink}
        type="button"
        className="rounded-md bg-royal-blue px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </Link>
    </div>
  );
};

export default Buttons;
