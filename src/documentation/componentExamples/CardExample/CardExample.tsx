import React from 'react';

import { Card } from '../../../components/Card';

export const CardExample = (): React.ReactElement => (
  <Card
    title="React"
    avatarSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    description="A JavaScript library for building user interfaces."
  />
);
