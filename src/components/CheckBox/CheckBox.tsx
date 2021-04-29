import React from 'react';

import { CheckBoxProps } from '../../shared';

import style from './CheckBox.css';

export const CheckBox: React.VFC<CheckBoxProps> = ({
  name,
  label,
  options,
  checkedOptions,
  onChange,
  ...rest
}: CheckBoxProps) => {
  return (
    <div {...rest}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={style.checkbox}>
        {options.map(option => (
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
        ))}
      </div>
    </div>
  );
};
