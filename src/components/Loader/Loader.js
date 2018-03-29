import React from 'react';
import style from './Loader.css';

const Loader = () => {
  return (
    <div className={style.loader_container}>
      <div className={style.loader}></div>
    </div>
  );
};

export default Loader;
