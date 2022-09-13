import React from 'react';

import { ListProps } from '@/shared';

import style from './List.scss';

export const List: React.FC<ListProps> = ({ title, data }: ListProps) => {
  return (
    <div className={style.listContainer}>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {data.map((item: string) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
