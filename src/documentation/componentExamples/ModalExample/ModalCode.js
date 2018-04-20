import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Modal from '{yourpath}/Modal';

<Modal />
`;

const ModalCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);

export default ModalCode;
