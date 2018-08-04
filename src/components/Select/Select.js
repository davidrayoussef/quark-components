import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import style from './Select.css';

const Select = ({ name, label, options, value, placeholder, onChange }) => {
  return (
    <div>
      { label && <label htmlFor={name}>{label}</label> }
      <div className={style.select}>
        <select
          name={name}
          value={value} 
          onChange={onChange}
        >
          <option value="" disabled>{placeholder}</option>
          { 
            options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))
          }
        </select>
        <Icon
          value="arrowDown"
          color="#BBB"
          width="15"
        />
      </div>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Select;
