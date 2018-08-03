import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.css';

const Input = ({ name, type, label, placeholder, value, required, onChange, ...rest }) => {
  return (
    <div className={style['input-container']}>
      { label && <label htmlFor={name}>{label}</label> }
      <input 
        {...rest}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

Input.defaultProps = {
  required: false
};

export default Input;