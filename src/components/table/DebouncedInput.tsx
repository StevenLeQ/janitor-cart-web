import React from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
  icon?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

export const DebouncedInput: React.FC<Props> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  icon,
  ...props
}) => {
  const [value, setValue] = React.useState<number | string>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="relative">
      <input {...props} value={value} onChange={handleInputChange} />
      {icon && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};

export default DebouncedInput;
