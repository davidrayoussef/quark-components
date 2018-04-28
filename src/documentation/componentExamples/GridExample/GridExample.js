import React from 'react';
import Grid from '../../../components/Grid/Grid';

export const GridExample = () => (
  <Grid cols={'repeat(auto-fit, minmax(150px, 1fr))'}>
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
);
