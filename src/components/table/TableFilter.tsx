import { Column, RowData, Table } from '@tanstack/react-table';
import React from 'react';

type BooleanFilterProps = {
  columnId: string;
  columnFilterValue: string;
  columnSize: number;
  setFilterValue: (updater: any) => void;
  sortedUniqueValues: any[];
};

const BooleanFilter: React.FC<BooleanFilterProps> = ({
  columnId,
  columnFilterValue,
  columnSize,
  setFilterValue,
  sortedUniqueValues
}) => {
  const handleRotateFilter = () => {
    if (columnFilterValue === 'true') {
      setFilterValue('false');
    } else if (columnFilterValue === 'false') {
      setFilterValue('');
    } else {
      setFilterValue('true');
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleRotateFilter} className="ml-2 rounded border px-2">
        {columnFilterValue === 'true'
          ? 'true'
          : columnFilterValue === 'false'
          ? 'false'
          : '-'}
      </button>
    </React.Fragment>
  );
};

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

  return (
    <BooleanFilter
      columnId={column.id}
      columnFilterValue={columnFilterValue as string}
      columnSize={uniqueValues.size}
      setFilterValue={column.setFilterValue}
      sortedUniqueValues={sortedUniqueValues}
    />
  );
}

export default Filter;
