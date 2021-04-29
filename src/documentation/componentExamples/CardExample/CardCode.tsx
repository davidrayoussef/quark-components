import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Card } from 'quark-components';

<Card
  name="React"
  avatarSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  description="A JavaScript library for building user interfaces."
/>
`;

export const CardCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
