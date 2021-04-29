import React from 'react';

import style from './Loader.css';

export const Loader: React.VFC = () => {
  return (
    <div className={style.loader_container}>
      <div className={style.loader}></div>
    </div>
  );
};
