import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Share } from 'quark-components';

<Share 
  shares={['twitter', 'facebook', 'email']} 
  url={window.location}
  title={document.title}
  text={\`${document.title}: A library of React UI components.\`}
/>
`;

export const ShareCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
