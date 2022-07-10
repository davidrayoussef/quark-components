import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { Tabs, Tab } from 'quark-components';

<Tabs>
  <Tab label="Tab 1">Content 1</Tab>
  <Tab label="Tab 2">Content 2</Tab>
  <Tab label="Tab 3">Content 3</Tab>
</Tabs>
`;

export const TabsCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
