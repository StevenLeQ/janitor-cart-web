import { Table } from '@tanstack/react-table';

interface GenericData {
  [key: string]: string | boolean | number;
}

// Component to generate the paginated buttons at the bottom right of tables
const GeneratePaginationButtons = (
  // using any to for test type objects
  // eslint-disable-next-line
  table: Table<GenericData> | any,
  totalButtons: number
) => {
  const buttons = [];
  const halfButtons = Math.floor(totalButtons / 2);

  const current = table.getState().pagination.pageIndex;
  const max = table.getPageCount() - 1;

  let start = Math.max(current - halfButtons, 0);
  let end = Math.min(start + totalButtons - 1, max);

  if (end - start < totalButtons - 1) {
    start = Math.max(end - totalButtons + 1, 0);
  }

  // Simply make all buttons if there are less/equal 7 pages (0-6)
  if (max < 7) {
    for (let i = start; i <= max; i++) {
      buttons.push(
        <button
          key={i}
          className={`relative inline-flex items-center ${
            table.getState().pagination.pageIndex === i
              ? 'bg-royal-blue text-white'
              : 'text-font-gray hover:bg-indigo-200 hover:text-blue-700'
          } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
          onClick={() => table.setPageIndex(i)}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;

    // More than 7 buttons, use fancier pagination
  } else {
    // For totalButtons 5 - if page index > 3
    if (current > halfButtons) {
      buttons.push(
        <button
          key={0}
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-font-gray ring-1 ring-inset ring-gray-300 hover:bg-indigo-200 hover:text-blue-700 focus:z-20 focus:outline-offset-0 "
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          1
        </button>
      );
      buttons.push(
        <span
          key="ell1"
          className="relative inline-flex select-none items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        >
          ...
        </span>
      );
      start++;
    } else {
      end++;
    }

    // For totalButtons 5 - if page index < 98
    if (current + 1 > max - halfButtons) {
      start--;
    } else {
      end--;
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`relative inline-flex items-center ${
            table.getState().pagination.pageIndex === i
              ? 'bg-royal-blue text-white'
              : 'text-font-gray hover:bg-indigo-200 hover:text-blue-700'
          } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
          onClick={() => table.setPageIndex(i)}
        >
          {i + 1}
        </button>
      );
    }

    // For totalButtons 5 - if page index > 97
    if (current < max - halfButtons) {
      buttons.push(
        <span
          key="ell2"
          className="relative inline-flex select-none items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        >
          ...
        </span>
      );
      buttons.push(
        <button
          key={max}
          className={`relative inline-flex items-center ${
            current === max ? 'bg-royal-blue text-white' : 'text-font-gray'
          } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-indigo-200 hover:text-blue-700 focus:z-20 focus:outline-offset-0`}
          onClick={() => {
            table.setPageIndex(max);
          }}
        >
          {max + 1}
        </button>
      );
    }

    return buttons;
  }
};

export default GeneratePaginationButtons;
