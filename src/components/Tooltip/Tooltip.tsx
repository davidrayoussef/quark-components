import React from 'react';

import { TooltipProps } from '@/shared';

import styles from './Tooltip.scss';

export const Tooltip: React.VFC<TooltipProps> = ({ message }: TooltipProps) => {
  return <span className={styles.tooltipContainer}>{message}</span>;
};
