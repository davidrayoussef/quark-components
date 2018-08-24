import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.css';

const Input = ({ name, label, value, errorMessage, isValid, onChange, ...rest }) => {
  return (
    <div className={style['input-container']}>
      { label && <label htmlFor={name}>{label}</label> }
      <input 
        {...rest}
        autoComplete="off"
        name={name}
        value={value}
        onChange={onChange}
        className={isValid ? '' : style.error}
      />
      <p className={style['error-text']}>{isValid ? '' : errorMessage}</p>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  isValid: true
};

export default Input;