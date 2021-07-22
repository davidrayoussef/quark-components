import React from 'react';

import { FormProps } from '@/shared';

import style from './Form.scss';

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit,
  ...rest
}: FormProps) => {
  return (
    <form {...rest} className={style.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
