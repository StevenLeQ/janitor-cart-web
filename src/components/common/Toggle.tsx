import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <label
      className={`+ relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
        enabled ? 'bg-royal-blue' : 'bg-gray-300'
      }`}
    >
      <input
        type="checkbox"
        className="absolute h-0 w-0 opacity-0"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {enabled && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
          </motion.span>
        )}
      </span>
    </label>
  );
}

export default Toggle;
