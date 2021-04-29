import React, { Fragment } from 'react';

import { ListProps } from '../../shared';

import style from './List.css';

export const List: React.VFC<ListProps> = ({ title, data }: ListProps) => {
  return (
    <Fragment>
      <h3 className={style.listTitle}>{title}</h3>
      <ul className={style.list}>
        {data.map((item: string | { name: string }) => {
          item = typeof item === 'string' ? item : item.name;
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </Fragment>
  );
};
