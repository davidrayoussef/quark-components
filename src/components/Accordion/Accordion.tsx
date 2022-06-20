import React from 'react';

import { AccordionItem } from './AccordionItem';

import style from './Accordion.scss';

interface AccordionProps {
  data: { heading: string; body: string }[];
  defaultExpanded?: number;
  alwaysExpanded?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  data,
  defaultExpanded = 0,
  alwaysExpanded = false
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState(defaultExpanded);

  function handleClick(index: number) {
    if (alwaysExpanded) {
      setActiveIndex(index);
    } else {
      if (index === activeIndex) {
        setActiveIndex(undefined);
      } else {
        setActiveIndex(index);
      }
    }
  }

  console.log(activeIndex);
  return (
    <dl className={style.accordion}>
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
