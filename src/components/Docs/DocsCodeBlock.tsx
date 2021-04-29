import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { DocsCodeBlockProps } from '../../shared';

import style from './DocsCodeBlock.css';

export const DocsCodeBlock: React.FC<DocsCodeBlockProps> = ({
  children
}: DocsCodeBlockProps) => (
  <section className={style.code}>
    <SyntaxHighlighter
      language="jsx"
      style={atomDark}
      customStyle={{
        fontSize: '1.1rem',
        height: '100%',
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
