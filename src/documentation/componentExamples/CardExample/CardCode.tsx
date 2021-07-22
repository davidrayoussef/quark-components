import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { Card } from 'quark-components';

<Card>
  <h3>React</h3>
  <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React Icon"
  />
  <div>A JavaScript library for building user interfaces.</div>
</Card>
`;

export const CardCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
