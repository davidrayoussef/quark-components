import React from 'react';

import { Image } from '@/components/Image';

export const ImageExample = (): React.ReactElement => (
  <Image
    style={{ maxWidth: '100%' }}
    src="http://www.example.com/nonexistent-image-link.jpg"
    defaultSrc="images/default-image.jpg"
    alt="Description of image"
    onError={() => alert('Original image failed to load.')}
    onLoad={() => alert('Image loaded.')}
  />
);
