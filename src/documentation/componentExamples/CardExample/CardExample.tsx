import React from 'react';

import { Card } from '@/components/Card';

export const CardExample = (): React.ReactElement => (
  <Card>
    <h3 style={{ margin: 0 }}>React</h3>
    <img
      style={{ padding: '0.5rem' }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      alt="React Icon"
    />
    <div>A JavaScript library for building user interfaces.</div>
  </Card>
);
