import { Column, RowData, Table } from '@tanstack/react-table';
import React from 'react';
import DebouncedInput from './DebouncedInput';

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
  const dataListId = column.id + 'list';

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(uniqueValues.keys()).sort(),
    [uniqueValues, firstValue]
  );

  const handleInputChange = (value: string | number) => {
    if (sortedUniqueValues.includes(value)) {
      column.setFilterValue(value);
    }
  };

  return (
    <>
      <datalist id={dataListId}>
        {sortedUniqueValues.map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue as string) ?? ''}
        onChange={(value) => handleInputChange(value)}
        placeholder={`Search... (${uniqueValues.size})`}
        className="w-36 rounded pl-1 font-normal shadow  focus:outline-royal-blue"
        list={dataListId}
      />
    </>
  );
}

export default Filter;
