import React from 'react';

const DocsExampleBlock = ({ name, children }) => (
  <section className="examples">
    <h1>{ name }</h1>
    { children }
    <h2>Props</h2>
  </section>
);

export default DocsExampleBlock;
