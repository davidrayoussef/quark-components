import React from 'react';

import { Icon } from '../Icon';

import { SelectProps } from '@/shared';

import style from './Select.scss';

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  value,
  placeholder,
  onChange
}: SelectProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={style.select}>
        <select name={name} value={value} onChange={onChange}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon value="arrowDown" color="#BBB" width="15" />
      </div>
    </div>
  );
};
