import React from 'react';
import Share from '../../../components/Share';

export const ShareExample = () => (
  <Share 
    shares={['twitter', 'facebook', 'email']} 
    url={window.location}
    title={document.title}
    text={`${document.title}: A library of React UI components.`}
  />
);
