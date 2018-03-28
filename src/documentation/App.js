import React from 'react';
import Docs from '../components/Docs/Docs';
import { componentList, routes } from './data.js';

const App = () => {
  return (
    <Docs
      headerTitle="React Simple UI Components"
      listTitle="Components"
      data={componentList}
    >
      <main>
        <section className="examples">
          { routes() }
        </section>
        <section className="editor">

        </section>
      </main>
    </Docs>
  );
};

export default App;
