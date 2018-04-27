import React from 'react';
import DocsCodeBlock from '../../../components/Docs/DocsCodeBlock';

const code = `
import React from 'react';
import Grid from '{yourpath}/Grid';

<<<<<<< HEAD
<Grid cols={3} rows={2}>
  <div>Grid Item 1</div>
  <div>Grid Item 2</div>
  <div>Grid Item 3</div>
  <div>Grid Item 4</div>
  <div>Grid Item 5</div>
  <div>Grid Item 6</div>
  <div>Grid Item 7</div>
  <div>Grid Item 8</div>
  <div>Grid Item 9</div>
</Grid>
=======
>>>>>>> f3152ee48375af8f5aab2a007bb4c82d4a88ade5
`;

export const GridCode = () => (
  <DocsCodeBlock>
    {code}
  </DocsCodeBlock>
);
