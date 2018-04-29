import React from 'react';
import PropTypes from 'prop-types';
import style from './DocsPropTable.css';

const DocsPropTable = () => (
  <table className={style.propTable}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>prop name</td>
        <td>prop type</td>
        <td>prop default</td>
        <td>prop description</td>
      </tr>
    </tbody>
  </table>
);

DocsPropTable.propTypes = {
};

export default DocsPropTable;
