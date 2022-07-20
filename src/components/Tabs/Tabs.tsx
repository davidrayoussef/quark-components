import React from 'react';

import { TabsProps, TabProps } from '@/shared';

import style from './Tabs.scss';

export const Tab: React.FC<TabProps> = ({ label }: TabProps) => {
  return <span>{label}</span>;
};

export const Tabs: React.FC<TabsProps> = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleTabClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <React.Fragment>
      <nav className={style.tabsContainer}>
        {children.map((tab: React.ReactElement, index: number) => (
          <span
            key={tab.props.label}
            onClick={handleTabClick.bind(undefined, index)}
            className={index === activeIndex ? style.active : ''}
          >
            {tab.props.label}
          </span>
        ))}
      </nav>
      <main className={style.main}>{children[activeIndex].props.children}</main>
    </React.Fragment>
  );
};
