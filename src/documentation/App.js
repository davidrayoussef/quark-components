import React from 'react';
import Docs from '../components/Docs/Docs';
import { componentData } from './componentData.js';
import { routes } from './routes.js';

const App = () => {
  return (
    <Docs
      data={componentData}
      headerTitle="React Simple UI Components"
      menuTitle="Components"
      linkColor="rgb(52, 88, 226)"
      linkType="routerLink" 
    >
      { routes }
    </Docs>
  );
};

export default App;
