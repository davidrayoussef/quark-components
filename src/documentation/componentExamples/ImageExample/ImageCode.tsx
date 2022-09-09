import React from 'react';

import { DocsCodeBlock } from '@/components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import { Image } from 'quark-components';

<Image 
  src="http://www.example.com/nonexistent-image-link.jpg"
  defaultSrc="images/default-image.jpg"
  alt="Description of image"
  onError={() => alert('Original image failed to load.')}
  onLoad={() => alert('Image loaded.')}
/>
`;

export const ImageCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
