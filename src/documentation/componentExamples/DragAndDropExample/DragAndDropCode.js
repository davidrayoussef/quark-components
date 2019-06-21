import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import DragAndDrop from 'quark-components/DragAndDrop';

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

<DragAndDrop data={data} />;
`;

export const DragAndDropCode = () => <DocsCodeBlock>{code}</DocsCodeBlock>;
