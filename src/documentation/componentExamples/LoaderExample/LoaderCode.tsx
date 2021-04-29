import React from 'react';

import { DocsCodeBlock } from '../../../components/Docs';

const code = `
import React from 'react';
import { Loader } from 'quark-components';

<Loader />
`;

export const LoaderCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
