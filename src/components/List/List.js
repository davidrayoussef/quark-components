import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './List.css';

const List = ({ listTitle, data }) => {
  return (
    <Fragment>
      <h2>{listTitle}</h2>
      <ul>
        {
          data.map(({name}) => (
            <li key={name}>{name}</li>
          ))
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
