import React from 'react';
import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender
} from '@tanstack/react-table';
import {
  RankingInfo,
  rankItem,
  compareItems
} from '@tanstack/match-sorter-utils';
import { Link } from 'react-router-dom';

import DebouncedInput from './DebouncedInput';
import GeneratePaginationButtons from './Pagination';
import TableEllipsisButton from './TableEllipsisButton';
import Filter from './TableFilter';

import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon
} from '@heroicons/react/24/solid';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    const itemRankA = rowA.columnFiltersMeta[columnId]?.itemRank;
    const itemRankB = rowB.columnFiltersMeta[columnId]?.itemRank;

    if (itemRankA !== undefined && itemRankB !== undefined) {
      dir = compareItems(itemRankA, itemRankB);
    }
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

interface GenericData {
  [key: string]: string | boolean | number;
}

interface LinkData {
  title: string;
  link: string;
}

interface ColumnData {
  key: string;
  type: number;
}

interface TableProps {
  dataArray: GenericData[];
  button: LinkData;
  custom_column?: ColumnData;
  ellipsis_data?: LinkData[];
  name_icon?: React.ReactNode;
}

const Table: React.FC<TableProps> = ({
  dataArray,
  button,
  custom_column = { key: '', type: 0 },
  ellipsis_data,
  name_icon
}) => {
  const [data] = React.useState(() => [...dataArray]);

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState('');

  // Generate the columns based on the keys of the first data item
  const columns = React.useMemo<ColumnDef<GenericData, any>[]>(() => {
    if (dataArray.length > 0) {
      const keys = Object.keys(dataArray[0]);
      return keys.map((key, index) => ({
        accessorKey: key,
        cell: (info) => {
          const value = info.getValue();
          // Check if the value is a boolean and handle it accordingly
          if (typeof value === 'boolean') {
            // Render different content for true and false values
            return (
              <span
                className={`-my-2 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${
                  value
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {value ? 'Active' : 'Inactive'}
              </span>
            );
          }
          // For non-boolean values, render the value as-is
          return index === 0 ? (
            <div className="flex gap-2">
              {name_icon} {value}
            </div>
          ) : (
            value
          );
        },
        header: () => <span>{key.replace(/_/g, ' ').toUpperCase()}</span>,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort
      }));
    }
    return [];
  }, [dataArray]);

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      columnFilters,
      globalFilter
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  return (
    <div className="mt-5 flow-root">
      <div className="justify-end sm:flex sm:items-center">
        <div className="my-5 mr-4 gap-4 sm:ml-16 sm:mt-0 sm:flex sm:flex-none">
          {/* Top side of table, Filter Search and New Company */}
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            className="font-lg border-block w-72 rounded border p-2 shadow focus:outline-royal-blue"
            placeholder="Search or Filter columns..."
            icon={true}
          />
          <Link to={button.link}>
            <button
              type="button"
              className="mt-1 rounded-md bg-royal-blue px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {button.title}
            </button>
          </Link>
        </div>
      </div>

      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 bg-white">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      // Logic for handling boolean columns, rotate between true, false, and empty
                      const columnFilterValue = header.column.getFilterValue();
                      const handleRotateFilter = () => {
                        const columnFilterValue =
                          header.column.getFilterValue();
                        if (columnFilterValue === 'true') {
                          header.column.setFilterValue('false');
                        } else if (columnFilterValue === 'false') {
                          header.column.setFilterValue('');
                        } else {
                          header.column.setFilterValue('true');
                        }
                      };
                      return (
                        <th
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {/* Column isn't boolean column */}
                          {header.isPlaceholder ? null : header.column.id !==
                            custom_column.key ? (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? 'flex gap-1 cursor-pointer select-none'
                                  : '',
                                onClick: header.column.getToggleSortingHandler()
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: <ChevronUpIcon className="h-5 w-5" />,
                                desc: <ChevronDownIcon className="h-5 w-5" />
                              }[header.column.getIsSorted() as string] ?? (
                                <ChevronUpDownIcon className="h-5 w-5" />
                              )}
                            </div>
                          ) : custom_column.type === 0 ? (
                            // Is boolean column
                            // probably a better way to do this man
                            <div
                              className="flex cursor-pointer select-none gap-1"
                              onClick={handleRotateFilter}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column.getCanFilter() ? (
                                <div className="px-2">
                                  {columnFilterValue === 'true' ? (
                                    <span className="rounded-lg bg-green-100 px-2 pb-1">
                                      +
                                    </span>
                                  ) : columnFilterValue === 'false' ? (
                                    <span className="rounded-lg bg-red-100 px-2 pb-1">
                                      -
                                    </span>
                                  ) : (
                                    <span className="rounded-lg bg-gray-100 px-2 pb-1">
                                      ~
                                    </span>
                                  )}
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            // Is a specific filter column
                            // probably a better way to do this man
                            <div className="flex cursor-pointer select-none gap-1">
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column.getCanFilter() ? (
                                <div className="px-2">
                                  <Filter
                                    column={header.column}
                                    table={table}
                                  />
                                </div>
                              ) : null}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {table.getRowModel().rows.map((row, index) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <td className="relative whitespace-nowrap text-right text-sm font-medium">
                      <a href="#">
                        <TableEllipsisButton
                          ellipsis_data={ellipsis_data}
                          isNearEnd={
                            table.getState().pagination.pageSize - index < 3
                          }
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              {/* Bottom left helper text for table */}
              <div className="flex text-sm">
                <p className="text-sm text-gray-700">
                  {'Showing '}
                  <span className="font-medium">
                    {Math.min(
                      table.getState().pagination.pageSize *
                        table.getState().pagination.pageIndex +
                        1,
                      table.getPrePaginationRowModel().rows.length
                    )}
                  </span>
                  {' to '}
                  <span className="font-medium">
                    {/* Bind showing to min and max of table row lengths */}
                    {Math.min(
                      table.getPrePaginationRowModel().rows.length,
                      table.getState().pagination.pageSize *
                        (table.getState().pagination.pageIndex + 1)
                    )}
                  </span>
                  {' of '}
                  <span className="font-medium">
                    {table.getPrePaginationRowModel().rows.length}
                  </span>
                  {' results'}
                </p>
                <span className="ml-2 flex gap-2">
                  | Go to page:
                  <input
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      // Constrains the go to page to bounds of table row
                      page < table.getPageCount()
                        ? table.setPageIndex(page)
                        : table.getPageCount();
                    }}
                    className="h-5 w-16 rounded border p-1 outline-royal-blue"
                  />
                </span>
                <select
                  value={table.getState().pagination.pageSize}
                  className="ml-3 h-5 rounded border-0 text-gray-900 outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-royal-blue sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pagination */}
              <div className="mt-1 bg-white">
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  {/* Table back button */}
                  <button
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-font-gray ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:enabled:bg-indigo-200 hover:enabled:text-blue-700 disabled:bg-gray-200"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {/* Generates all the number buttons */}
                  {GeneratePaginationButtons(table, 5)}

                  {/* Table forward button */}
                  <button
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-font-gray ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:enabled:bg-indigo-200 hover:enabled:text-blue-700 disabled:bg-gray-200"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
