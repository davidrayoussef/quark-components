import { ColumnDef, Row } from '@/shared';
import { addEmptyRows } from './table-utils';

export function handleFile({
  file,
  setData,
  columnDefs,
  rowCount
}: {
  file: File;
  setData: (data: Row[]) => void;
  columnDefs: ColumnDef[];
  rowCount: number;
}): void {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = event => {
    const fileData = processData({
      csv: event.target.result as string,
      columnDefs
    });
    setData(addEmptyRows({ columnDefs, data: fileData, rowCount }));
  };
}

export function processData({
  csv,
  columnDefs
}: {
  csv: string;
  columnDefs: ColumnDef[];
}): Row[] {
  return csv.split(/\r\n|\n/).map((row, rowIndex) => {
    return row
      .split(',')
      .slice(0, columnDefs.length)
      .reduce(
        (obj: Row, value: string, columnIndex: number) => {
          const { fieldName } = columnDefs[columnIndex];
          obj[fieldName] = value.trim();
          return obj;
        },
        { index: String(rowIndex) }
      );
  });
}
