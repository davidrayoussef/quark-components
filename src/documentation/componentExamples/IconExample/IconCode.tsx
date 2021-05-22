import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Icon, Grid } from 'quark-components';

<Grid cols="repeat(auto-fill, minmax(50px, 1fr))">
  <Icon value="arrowRight" width="20" />
  <Icon value="arrowDown" width="20" />
  <Icon value="close" width="25" />
  <Icon value="email" width="30" />
  <Icon value="facebook" width="30" />
  <Icon value="github" width="30" />
  <Icon value="menu" width="30" />
  <Icon value="reddit" width="30" />
  <Icon value="twitter" width="30" />
  <Icon value="youtube" width="30" />
</Grid>
`;

export const IconCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
