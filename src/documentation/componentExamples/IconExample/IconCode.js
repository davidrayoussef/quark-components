import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Icon from '{yourpath}/Icon';

<Icon value="Icon Title" color="" />
`;

export const IconCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
