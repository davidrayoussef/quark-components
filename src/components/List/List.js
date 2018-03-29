import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './List.css';

const List = ({ listTitle, data }) => {
  return (
    <Fragment>
      <h2 className={style.listTitle}>{listTitle}</h2>
      <ul className={style.list}>
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
  listTitle: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default List;
