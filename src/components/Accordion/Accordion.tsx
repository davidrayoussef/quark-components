import React from 'react';

import { AccordionItem } from './AccordionItem';

import style from './Accordion.scss';

interface AccordionProps {
  data: { heading: string; body: string }[];
  defaultExpanded?: number;
  width?: number;
}

export const Accordion: React.FC<AccordionProps> = ({
  data,
  width,
  defaultExpanded = 0
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultExpanded);

  function handleClick(index: number) {
    if (index === activeIndex) {
      setActiveIndex(undefined);
    }
    setActiveIndex(index);
  }

  return (
    <dl style={{ width }} className={style.accordion}>
      {data.map(({ heading, body }, index) => {
        return (
          <AccordionItem
            key={heading}
            heading={heading}
            body={body}
            active={activeIndex === index}
            onClick={handleClick.bind(undefined, index)}
          />
        );
      })}
    </dl>
  );
};
