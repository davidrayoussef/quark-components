import React from 'react';

import { VoidFunction } from '@/shared';

import style from './AccordionItem.scss';

interface AccordionItemProps {
  active: boolean;
  body: string;
  heading: string;
  onClick: VoidFunction;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  active,
  body,
  heading,
  onClick
}: AccordionItemProps) => {
  const accordionItemBodyElement: React.RefObject<HTMLDivElement> = React.useRef();
  const [height, setHeight] = React.useState(0);
  React.useLayoutEffect(() => {
    setHeight(active ? accordionItemBodyElement.current.scrollHeight : 0);
  }, [active]);
  return (
    <section className={style.accordionItem}>
      <h3 onClick={onClick}>{heading}</h3>
      <div
        ref={accordionItemBodyElement}
        className={style.accordionItemBody}
        style={{ height }}
      >
        {body}
      </div>
    </section>
  );
};
