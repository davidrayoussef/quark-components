import React from 'react';

import { TooltipProps, TooltipPosition, TooltipTrigger } from '@/shared';

import styles from './Tooltip.scss';

export const Tooltip: React.FC<TooltipProps> = ({
  message,
  position = TooltipPosition.Right,
  trigger = TooltipTrigger.Hover,
  children
}: TooltipProps) => {
  const initialState = trigger === TooltipTrigger.None;
  const [showTooltip, setShowTooltip] = React.useState(initialState);
  const positionStyle = {
    [TooltipPosition.Right]: styles.right,
    [TooltipPosition.Left]: styles.left,
    [TooltipPosition.Bottom]: styles.bottom,
    [TooltipPosition.Top]: styles.top
  }[position];

  function handleHover() {
    if (trigger === TooltipTrigger.Hover) {
      setShowTooltip(showTooltip => !showTooltip);
    }
  }

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children}
      <span
        className={`
          ${styles.tooltip}
          ${positionStyle}
          ${showTooltip ? styles.show : ''}
        `}
      >
        {message}
      </span>
    </div>
  );
};
