import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/styles/hljs';

const DocsCodeBlock = ({ children }) => (
  <section className="editor">
    <SyntaxHighlighter
      style={tomorrowNight}
      customStyle={{
        padding: '5px 20px 25px',
        margin: 0,
        fontSize: '1.35em',
        background: '#282938'
      }}
    >
      {children}
    </SyntaxHighlighter>
  </section>
);

export default DocsCodeBlock;
