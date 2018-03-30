import React from 'react';
import Docs from '../components/Docs/Docs';
import { componentList, routes } from './data.js';

const App = () => {
  return (
    <Docs
      data={componentList}
      headerTitle="React Simple UI Components"
      menuTitle="Components"
    >
      { routes }
    </Docs>
  );
};

export default App;
