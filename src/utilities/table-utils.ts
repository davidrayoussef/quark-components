import {
  ColumnDef,
  Errors,
  Row,
  ValidationPredicateFunction,
  RowToPost
} from '../shared';

export function generateEmptyTableData({
  columnDefs,
  rowCount
}: {
  columnDefs: ColumnDef[];
  rowCount: number;
}): Row[] | Errors[] {
  return Array.from({ length: rowCount }, (_: never, index: number) => {
    return generateEmptyRow({ columnDefs, index });
  });
}

export function generateEmptyRow({
  columnDefs,
  index
}: {
  columnDefs: ColumnDef[];
  index: number;
}): Row | Errors {
  return columnDefs.reduce(
    (obj: Row | Errors, { fieldName }) => {
      obj[fieldName] = undefined;
      return obj;
    },
    { index: String(index) }
  );
}

export function addEmptyRows({
  columnDefs,
  data,
  rowCount
}: {
  columnDefs: ColumnDef[];
  data: Row[];
  rowCount: number;
}): Row[] {
  return [
    ...data,
    ...Array.from({ length: rowCount - data.length }, (_: never, index) => {
      return generateEmptyRow({ columnDefs, index: data.length + index });
    })
  ];
}

export function isNotIndexKey(key: string): boolean {
  return key !== 'index';
}

export function isEmptyRow(row: Row): boolean {
  return Object.keys(row)
    .filter(isNotIndexKey)
    .every(key => row[key] === undefined || row[key] === '');
}

export function isValid({
  validation,
  fieldValue
}: {
  validation: RegExp | ValidationPredicateFunction;
  fieldValue: string | number;
}): boolean {
  return (
    fieldValue !== undefined &&
    (typeof validation === 'function'
      ? validation(String(fieldValue))
      : validation.test(String(fieldValue)))
  );
}

export function hasError(errors: Errors[]): boolean {
  return errors.some(row =>
    Object.keys(row)
      .filter(isNotIndexKey)
      .some(key => row[key]?.length > 0)
  );
}

export function transformData({
  columnDefs,
  data
}: {
  columnDefs: ColumnDef[];
  data: Row[];
}): RowToPost[] {
  return removeEmptyRows(data).map(row => {
    return Object.keys(row)
      .filter(isNotIndexKey)
      .reduce((obj: RowToPost, key, columnIndex) => {
        const { type } = columnDefs[columnIndex];
        const value = row[key];
        obj[key] = type === 'float' ? Number(value) : value;
        return obj;
      }, {});
  });
}

export function removeEmptyRows(data: Row[]): Row[] {
  return data.filter(row => !isEmptyRow(row));
}
