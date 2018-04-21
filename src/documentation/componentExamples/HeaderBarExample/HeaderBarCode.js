import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import HeaderBar from '{yourpath}/HeaderBar';

<HeaderBar title="HeaderBar Title" />
`;

export const HeaderBarCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
