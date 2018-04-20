import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';

const DocsCodeBlock = ({ children }) => (
  <section className="editor">
    <SyntaxHighlighter
      language='jsx'
      style={atomDark}
      customStyle={{
        fontSize: '1.1rem',
        padding: '0 30px 30px',
        margin: 0,
        background: 'var(--primary)',
        borderRadius: 0
      }}
    >
      {children}
    </SyntaxHighlighter>
  </section>
);

export default DocsCodeBlock;
