import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Card from '{yourpath}/Card';

<Card
  name="React"
  avatar_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
  description="A JavaScript library for building user interfaces."
  linkSrc="https://reactjs.org/"
/>
`;

const CardCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default CardCode;
