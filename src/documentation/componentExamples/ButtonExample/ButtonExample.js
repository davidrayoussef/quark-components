import React from 'react';
import Button from '../../../components/Button';
import style from './ButtonExample.css';

export const ButtonExample = () => (
  <div className={style.buttonGroup}>
    <Button styleType="primary">Primary</Button>
    <Button styleType="secondary">Secondary</Button>
    <Button styleType="reverse">Reverse</Button>
    <Button styleType="danger">Danger</Button>
  </div>
);
