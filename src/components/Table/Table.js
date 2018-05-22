import React from 'react';
import PropTypes from 'prop-types';
import style from './Table.css';

const Table = ({ tableHeads, tableData }) => {
  const heads = tableHeads && tableHeads.map(tableHead => (
    <th key={tableHead}>{tableHead}</th>
  ));
// HANDLE RESIZE
  const data = tableData.map(tableRow => (
    <tr key={JSON.stringify(tableRow)}>
      {
        Object.keys(tableRow).map((key, i) => {
          const cell = tableRow[key];

          return (
            <td
              key={cell}
              data-title={tableHeads[i]}
            >
              {cell !== null ? cell : <span>&nbsp;</span>}
            </td>
          );
        })
      }
    </tr>
  ));

  return (
    <table className={style.table}>
      <thead>
        <tr>
          {heads}
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableHeads: PropTypes.array,
  tableData: PropTypes.array.isRequired
};

export default Table;
