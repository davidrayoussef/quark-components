import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import HeaderBar from 'quark-components/HeaderBar';

<HeaderBar title="HeaderBar Title" />
`;

export const HeaderBarCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
