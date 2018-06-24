import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Share from 'quark-components/Share';

<Share 
  shares={['twitter', 'facebook', 'email']} 
  url={window.location}
  title={document.title}
  text={\`${document.title}: A library of React UI components.\`}
/>
`;

export const ShareCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
