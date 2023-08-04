import { Column, RowData, Table } from '@tanstack/react-table';
import React from 'react';
import DebouncedInput from './TableDebouncedInput';

type Props<T extends RowData> = {
  column: Column<T, unknown>;
  table: Table<T>;
};

export function Filter<T extends RowData>({ column, table }: Props<T>) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();
  const uniqueValues = column.getFacetedUniqueValues();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(uniqueValues.keys()).sort(),
    [uniqueValues]
  );

  const dataListId = column.id + 'list';

  return (
    <>
      <datalist id={dataListId}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue as string) ?? ''}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${uniqueValues.size})`}
        className="w-36 rounded font-normal shadow outline-none focus:outline-royal-blue"
        list={dataListId}
      />
    </>
  );
}

export default Filter;
