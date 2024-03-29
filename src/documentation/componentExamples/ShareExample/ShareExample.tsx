import React from 'react';

import { Share } from '@/components/Share';

export const ShareExample = (): React.ReactElement => (
  <Share
    shares={['twitter', 'facebook', 'email']}
    url=""
    title={document.title}
    text="Quark Components: A library of React UI components."
  />
);
