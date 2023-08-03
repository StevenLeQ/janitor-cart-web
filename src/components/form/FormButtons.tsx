import React from 'react';
import { Link } from 'react-router-dom';

interface FormButtonProps {
  setShowAlert: any;
  saveLink: string;
}

const FormButtons: React.FC<FormButtonProps> = ({ setShowAlert, saveLink }) => {
  return (
    <div className="float-right mr-2 mt-3">
      {/* <Link to={cancelLink}> */}
      <button
        onClick={() => {
          setShowAlert(true); // Invoke the showAlert function
          console.log('SHOW');
        }}
        type="button"
        className="mr-3 rounded-md border-2 px-5 py-2 text-center text-sm font-semibold text-royal-blue ring-1 ring-inset ring-royal-blue hover:bg-indigo-100"
      >
        Cancel
      </button>
      {/* </Link> */}

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

export default FormButtons;
