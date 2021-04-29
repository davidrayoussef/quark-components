import React from 'react';

import { Button } from '../../../components/Button';

import { ButtonType } from '../../../shared';

import style from './ButtonExample.css';

export const ButtonExample = (): React.ReactElement => (
  <div className={style.buttonGroup}>
    <Button styleType={ButtonType.Primary}>Primary</Button>
    <Button styleType={ButtonType.Secondary}>Secondary</Button>
    <Button styleType={ButtonType.Reverse}>Reverse</Button>
    <Button styleType={ButtonType.Danger}>Danger</Button>
  </div>
);
