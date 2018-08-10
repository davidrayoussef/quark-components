import React from 'react';
import PropTypes from 'prop-types';
import style from './CheckBox.css';

const CheckBox = ({ name, label, options, checkedOptions, onChange, ...rest }) => {
  return (
    <div {...rest}>
      { label && <label htmlFor={name}>{label}</label> }
      <div className={style.checkbox}>
        {
          options.map(option => (
            <label key={option}>
              <input 
                type="checkbox"
                autoComplete="off"
                name={name}
                value={option}
                checked={checkedOptions.includes(option)}
                onChange={onChange}
              />
              {option}
            </label>
          ))
        }
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  checkedOptions: PropTypes.array,
  onChange: PropTypes.func
};

export default CheckBox;