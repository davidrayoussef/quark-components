import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { LazyLoad } from 'quark-components';

<LazyLoad>
  <img src='images/lazyload-1.jpg' alt="Image 1" />
  <img src='images/lazyload-2.jpg' alt="Image 2" />
  <img src='images/lazyload-3.jpg' alt="Image 3" />
  <img src='images/lazyload-4.jpg' alt="Image 4" />
  <img src='images/lazyload-5.jpg' alt="Image 5" />
  <img src='images/lazyload-6.jpg' alt="Image 6" />
  <img src='images/lazyload-7.jpg' alt="Image 7" />
  <img src='images/lazyload-8.jpg' alt="Image 8" />
</LazyLoad>
`;

export const LazyLoadCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
