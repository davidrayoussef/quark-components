import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from './List.css';

const List = ({ listTitle, data }) => {
  return (
    <Fragment>
      <h3 className={style.listTitle}>{listTitle}</h3>
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

List.propTypes = {
  listTitle: PropTypes.string,
  data: PropTypes.array.isRequired
};

export default List;
