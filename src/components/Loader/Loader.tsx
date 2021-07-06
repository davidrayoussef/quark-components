import React from 'react';

import style from './Loader.scss';

export const Loader: React.VFC = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
};
