import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Button } from 'quark-components';

<div>
  <Button styleType="primary">Primary</Button>
  <Button styleType="secondary">Secondary</Button>
  <Button styleType="reverse">Reverse</Button>
  <Button styleType="danger">Danger</Button>
</div>
`;

export const ButtonCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
