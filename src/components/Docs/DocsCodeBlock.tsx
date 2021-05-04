import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
      codeTagProps={{ style: { fontSize: '16px' } }}
      customStyle={{
        background: 'var(--primary)',
        borderRadius: 0,
        height: '100%',
        margin: 0,
        padding: '0 30px 30px'
      }}
    >
      {children}
    </SyntaxHighlighter>
  </section>
);
