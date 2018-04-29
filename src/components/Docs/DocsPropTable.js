import React from 'react';
import PropTypes from 'prop-types';
import style from './DocsPropTable.css';

const DocsPropTable = ({ propDescriptions }) => (
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
      {
        propDescriptions.map(({ propName, propType, propDefault, propDescription }) => {
          return (
            <tr key={propName}>
              <td>{propName}</td>
              <td>{propType}</td>
              <td>{propDefault}</td>
              <td>{propDescription}</td>
            </tr>
          );
        })
      }
    </tbody>
  </table>
);

DocsPropTable.propTypes = {
  propDescriptions: PropTypes.arrayOf(
    PropTypes.shape({
      propName: PropTypes.string.isRequired,
      propType: PropTypes.string.isRequired,
      propDefault: PropTypes.string,
      propDescription: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DocsPropTable;
