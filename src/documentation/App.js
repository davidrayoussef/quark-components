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
      <main>
        <section className="examples">
          { routes }
        </section>
        <section className="editor">

        </section>
      </main>
    </Docs>
  );
};

export default App;
