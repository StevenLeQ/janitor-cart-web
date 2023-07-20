// Component to generate the paginated buttons at the bottom right of companies
const GeneratePaginationButtons = (table:any, totalButtons: number) => {
  const buttons = [];
  const halfButtons = Math.floor(totalButtons / 2);

  const current = table.getState().pagination.pageIndex;
  const max = table.getPageCount() - 1;

  let start = Math.max(current - halfButtons, 0);
  const end = Math.min(start + totalButtons - 1, max);

  if (end - start < totalButtons - 1) {
    start = Math.max(end - totalButtons + 1, 0);
  }

  if (current > halfButtons) {
    buttons.push(
      <button
        key={0}
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:text-blue-700 hover:bg-indigo-200 focus:z-20 focus:outline-offset-0 text-font-gray "
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        1
      </button>
    );
    buttons.push(
      <span
        key="ell1"
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0 select-none"
      >
        ...
      </span>
    );
  }

  for (let i = start; i <= end; i++) {
    buttons.push(
      <button
        key={i}
        className={`relative inline-flex items-center ${
          table.getState().pagination.pageIndex === i
            ? "bg-royal-blue text-white"
            : "text-font-gray hover:text-blue-700 hover:bg-indigo-200"
        } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
        onClick={() => table.setPageIndex(i)}
      >
        {i + 1}
      </button>
    );
  }

  if (current < max - halfButtons) {
    buttons.push(
      <span
        key="ell2"
        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:outline-offset-0 select-none"
      >
        ...
      </span>
    );
    buttons.push(
      <button
        key={max}
        className={`relative inline-flex items-center ${
          current === max ? "bg-royal-blue text-white" : "text-font-gray "
        } px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:text-blue-700 hover:bg-indigo-200 focus:z-20 focus:outline-offset-0`}
        onClick={() => {
          table.setPageIndex(max);
        }}
      >
        {max + 1}
      </button>
    );
  }

  return buttons;
};

export default GeneratePaginationButtons;