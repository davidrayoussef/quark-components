import React from 'react';
import Image from '../../../components/Image';

export const ImageExample = () => (
  <Image
    style={{ maxWidth: '100%' }}
    src="http://www.example.com/nonexistent-image-link.jpg"
    alt="Description of image"
    defaultSrc="images/default-image.jpg"
    onError={() => console.error('Original image failed to load.')}
    onLoad={() => console.log('Image loaded.')}
  />
);
