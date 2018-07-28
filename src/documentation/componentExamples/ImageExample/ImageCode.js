import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Image from 'quark-components/Image';

<Image 
  src="http://www.example.com/nonexistent-image-link.jpg"
  alt="Description of image"
  defaultSrc="images/default-image.jpg"
  onError={() => console.error('Original image failed to load.')}
  onLoad={() => console.log('Image loaded.')}
/>
`;

export const ImageCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
