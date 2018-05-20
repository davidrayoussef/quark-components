import React from 'react';
import Docs from '../components/Docs/Docs';
import { componentData } from './componentData.js';
import { routes } from './routes.js';

const rootPath = process.env.NODE_ENV === 'production' ? '/react-simple-ui-components/' : '/';

const App = () => {
  return (
    <Docs
      data={componentData}
      headerTitle="React Simple UI Components"
      menuTitle="Components"
      linkType="routerLink"
      path={rootPath}
    >
      { routes }
    </Docs>
  );
};

export default App;
