import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Button from '{yourpath}/Button';

<Button>Primary</Button>
`;

const ButtonCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default ButtonCode;
