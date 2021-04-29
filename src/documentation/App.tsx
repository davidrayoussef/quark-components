import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Docs } from '../components/Docs';

import { componentData } from './componentData';

export const App = (): React.ReactElement => {
  const rootPath =
    process.env.NODE_ENV === 'production' ? 'quark-components' : '';
  return (
    <Router basename={rootPath}>
      <Docs
        data={componentData}
        headerTitle="Quark Components"
        menuTitle="Components"
        linkType="routerLink"
      />
    </Router>
  );
};
