import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Button from '{yourpath}/Button';

<div>
  <Button type="primary">Primary</Button>
  <Button type="secondary">Secondary</Button>
  <Button type="reverse">Reverse</Button>
  <Button type="danger">Danger</Button>
</div>
`;

export const ButtonCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
