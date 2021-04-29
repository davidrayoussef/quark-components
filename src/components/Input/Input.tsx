import React from 'react';

import { InputProps } from '../../shared';

import style from './Input.css';

export const Input: React.VFC<InputProps> = ({
  name,
  label,
  value,
  errorMessage,
  isValid = true,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={style.inputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...rest}
        autoComplete="off"
        name={name}
        value={value}
        onChange={onChange}
        className={!isValid ? style.error : ''}
      />
      {errorMessage && (
        <p className={style.errorText}>{!isValid ? errorMessage : ''}</p>
      )}
    </div>
  );
};
