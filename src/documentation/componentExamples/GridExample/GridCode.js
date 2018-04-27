import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Grid from '{yourpath}/Grid';

`;

export const GridCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
