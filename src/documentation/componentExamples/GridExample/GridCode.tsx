import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { Grid } from 'quark-components';

<Grid fluid>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
  <div>Grid Item 4</div>
  <div>Grid Item 5</div>
  <div>Grid Item 6</div>
  <div>Grid Item 7</div>
  <div>Grid Item 8</div>
  <div>Grid Item 9</div>
</Grid>
`;

export const GridCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
