import React from 'react';
import Button from '../../../components/Button';
import style from './ButtonExample.css';

export const ButtonExample = () => (
  <div className={style.buttonGroup}>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="reverse">Reverse</Button>
    <Button type="danger">Danger</Button>
  </div>
);
