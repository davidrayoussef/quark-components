import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { Tooltip, TooltipPosition } from 'quark-components';

<div>
  <Tooltip message="message">
    <span>Hover</span>
  </Tooltip>
  <Tooltip message="message" position={TooltipPosition.Top}>
    <span>Hover</span>
  </Tooltip>
  <Tooltip message="message" position={TooltipPosition.Bottom}>
    <span>Hover</span>
  </Tooltip>
  <Tooltip message="message" position={TooltipPosition.Left}>
    <span>Hover</span>
  </Tooltip>
</div>
`;

export const TooltipCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
