import React from 'react';

import { CustomHookReturnType } from '@/shared';

export function useCarousel(
  childrenCount: number,
  delay: number
): CustomHookReturnType {
  const intervalRef: {
    current: ReturnType<typeof setInterval>;
  } = React.useRef();
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleNavClick(newIndex: number): void {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    updateIndex(newIndex);
  }

  function updateIndex(newIndex: number): void {
    if (newIndex > childrenCount - 1) {
      newIndex = 0;
    } else if (newIndex === -1) {
      newIndex = childrenCount - 1;
    }
    setActiveIndex(newIndex);
  }

  React.useEffect(() => {
    if (delay && intervalRef.current !== null) {
      intervalRef.current = setInterval(() => {
        updateIndex(activeIndex + 1);
      }, delay);
      return () => {
        clearInterval(intervalRef.current);
      };
    }
  });

  return {
    activeIndex,
    handleNavClick
  };
}
