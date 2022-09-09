import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { Icon, Grid } from 'quark-components';

<Grid cols="repeat(auto-fill, minmax(50px, 1fr))">
  <Icon value="arrowRight" width="20" />
  <Icon value="arrowDown" width="20" />
  <Icon value="close" width="25" />
  <Icon value="email" />
  <Icon value="facebook" />
  <Icon value="github" />
  <Icon value="menu" />
  <Icon value="reddit" />
  <Icon value="twitter" />
  <Icon value="youtube" />
</Grid>
`;

export const IconCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
