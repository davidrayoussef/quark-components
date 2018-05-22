import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { atomDark } from 'react-syntax-highlighter/styles/prism';
import style from './DocsCodeBlock.css';

const DocsCodeBlock = ({ children }) => (
  <section className={style.code}>
    <SyntaxHighlighter
      language='jsx'
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

DocsCodeBlock.propTypes = {
  children: PropTypes.node
};

export default DocsCodeBlock;
