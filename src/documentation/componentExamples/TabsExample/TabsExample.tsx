import React from 'react';

import { Tabs, Tab } from '@/components/Tabs';

export const TabsExample = (): React.ReactElement => (
  <Tabs>
    <Tab label="Tab 1">Content 1</Tab>
    <Tab label="Tab 2">Content 2</Tab>
    <Tab label="Tab 3">Content 3</Tab>
  </Tabs>
);
