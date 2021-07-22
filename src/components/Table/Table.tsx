import React from 'react';

import { TableProps } from '@/shared';

import style from './Table.scss';

export const Table: React.VFC<TableProps> = ({
  tableHeads,
  tableData
}: TableProps) => {
  const heads =
    tableHeads &&
    tableHeads.map(tableHead => <th key={tableHead}>{tableHead}</th>);
  //TODO: HANDLE RESIZE
  const data = tableData.map(tableRow => (
    <tr key={JSON.stringify(tableRow)}>
      {Object.keys(tableRow).map((key, index) => {
        return (
          <td key={index} data-title={tableHeads[index]}>
            {tableRow[key] ?? <span>&nbsp;</span>}
          </td>
        );
      })}
    </tr>
  ));
  return (
    <table className={style.table}>
      <thead>
        <tr>{heads}</tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
