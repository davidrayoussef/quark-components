import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './List.style.css';

const List = ({ title, data }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <ul>
        {
          data.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </Fragment>
  );
};

List.proptypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default List;
