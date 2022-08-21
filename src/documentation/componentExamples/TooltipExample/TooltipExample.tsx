import React from 'react';

import { Tooltip } from '@/components/Tooltip';

export const TooltipExample = (): React.ReactElement => (
  <Tooltip message="message">
    <span
      style={{
        background: 'rgba(0,0,0,.075)',
        padding: '0.5rem',
        fontSize: '.9rem'
      }}
    >
      Hover
    </span>
  </Tooltip>
);
