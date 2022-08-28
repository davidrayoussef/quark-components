import React from 'react';

import { Tooltip } from '@/components/Tooltip';
import { TooltipPosition } from '@/shared';

import style from './TooltipExample.scss';

export const TooltipExample = (): React.ReactElement => (
  <div className={style.container}>
    <Tooltip message="message">
      <span className={style.content}>Hover</span>
    </Tooltip>
    <Tooltip message="message" position={TooltipPosition.Top}>
      <span className={style.content}>Hover</span>
    </Tooltip>
    <Tooltip message="message" position={TooltipPosition.Bottom}>
      <span className={style.content}>Hover</span>
    </Tooltip>
    <Tooltip message="message" position={TooltipPosition.Left}>
      <span className={style.content}>Hover</span>
    </Tooltip>
  </div>
);
