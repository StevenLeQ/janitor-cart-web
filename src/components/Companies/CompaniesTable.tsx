import React from 'react';
import {
  Column,
  Table,
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
  flexRender,
  FilterFns
} from '@tanstack/react-table';
import {
  RankingInfo,
  rankItem,
  compareItems
} from '@tanstack/match-sorter-utils';
import { Link } from 'react-router-dom';

import DebouncedInput from './DebouncedInput';
import GeneratePaginationButtons from './CompaniesPagination';
import TableEllipsisButton from './TableEllipsisButton';

import {
  EllipsisVerticalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
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

interface Person {
  name: string;
  active: boolean;
  email: string;
}

interface ChildComponentProps {
  people: Person[];
}

const CompaniesTable: React.FC<ChildComponentProps> = ({ people }) => {
  const [data, setData] = React.useState(() => [...people]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState('');

  const columns = React.useMemo<ColumnDef<Person, any>[]>(
    () => [
      {
        accessorKey: 'name',
        cell: (info) => info.getValue(),
        header: () => <span>COMPANY</span>,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort
      },
      {
        accessorFn: (row) => row.email,
        id: 'email',
        cell: (info) => info.getValue(),
        header: () => <span>EMAIL</span>,
        filterFn: 'fuzzy',
        sortingFn: fuzzySort
      },
      {
        // Active boolean is really a isDisabled boolean, false means active here
        accessorFn: (row) => row.active,
        id: 'active',
        header: 'ACTIVE',
        cell: (info) => {
          return (
            <>
              {info.getValue() ? (
                <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600">
                  Inactive
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-600">
                  Active
                </span>
              )}
            </>
          );
        }
      }
    ],
    []
  );

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
    debugColumns: false
  });

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'name') {
      if (table.getState().sorting[0]?.id !== 'name') {
        table.setSorting([{ id: 'name', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="mt-5 flow-root">
      <div className="justify-end sm:flex sm:items-center">
        <div className="my-5 mr-4 flex gap-4 sm:ml-16 sm:mt-0 sm:flex-none">
          {/* Top side of table, Filter Search and New Company */}
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            className="font-lg border-block w-72 rounded border p-2 shadow focus:outline-royal-blue"
            placeholder="Search all columns..."
          />
          <Link to={'/newCompany'}>
            <button
              type="button"
              className="mt-1 rounded-md bg-royal-blue px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              New Company
            </button>
          </Link>
        </div>
      </div>

      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {header.isPlaceholder ? null : (
                            <div>
                              <div
                                {...{
                                  className: header.column.getCanSort()
                                    ? 'flex gap-1 cursor-pointer select-none'
                                    : '',
                                  onClick:
                                    header.column.getToggleSortingHandler()
                                }}
                              >
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {{
                                  asc: <ChevronUpIcon className="h-5 w-5" />,
                                  desc: <ChevronDownIcon className="h-5 w-5" />
                                }[header.column.getIsSorted() as string] ??
                                  null}
                              </div>
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {table.getRowModel().rows.map((row) => (
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
                        <TableEllipsisButton />
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
                  className="ml-3 h-5 rounded border-0 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-royal-blue sm:text-sm sm:leading-6"
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
              <></>
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

export default CompaniesTable;
