import React from 'react';
import PropTypes from 'prop-types';
import style from './Form.css';

const Form = ({ children, onSubmit, ...rest }) => {
  return (
    <form
      {...rest}
      className={style.form}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func
};

export default Form;