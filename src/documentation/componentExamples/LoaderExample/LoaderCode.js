import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Loader from 'quark-components/Loader';

<Loader />
`;

export const LoaderCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
