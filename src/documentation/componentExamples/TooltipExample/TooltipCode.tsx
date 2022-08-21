import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { Tooltip } from 'quark-components';

<Tooltip message="message">
  <span>Hover</span>
</Tooltip>
`;

export const TooltipCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
