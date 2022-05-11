import React from 'react';

import { Icon } from '../Icon';

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
    setHeight(active ? accordionItemBodyElement.current.scrollHeight + 10 : 0);
  }, [active]);
  return (
    <div className={style.accordionItem}>
      <dt onClick={onClick}>
        {heading}
        <Icon
          value={active ? 'minus' : 'plus'}
          color="rgb(150, 203, 254)"
          width="15"
        />
      </dt>
      <dd ref={accordionItemBodyElement} style={{ height }}>
        {body}
      </dd>
    </div>
  );
};
