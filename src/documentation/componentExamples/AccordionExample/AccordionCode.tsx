import React from 'react';

import { DocsCodeBlock } from '@/components/Docs';

const code = `
import React from 'react';
import { Accordion } from 'quark-components';

const data = [
  {
    heading: 'Heading 1',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget tristique turpis, eget consequat leo. Suspendisse scelerisque neque eget tortor dictum, sit amet cursus massa vulputate. Morbi vehicula ultricies odio vel mattis. Fusce viverra, ante quis aliquet pellentesque, turpis augue tincidunt dui, vitae ornare quam ante sed lectus. Sed ullamcorper lectus quis varius vehicula. Ut varius ultricies sapien eu lobortis. Mauris vestibulum, ante a accumsan elementum, nibh mi lacinia risus, ut pharetra nisi ante a augue. Quisque tincidunt metus et urna tincidunt efficitur. Etiam vel lacinia mauris.'
  },
  {
    heading: 'Heading 2',
    body:
      'Pellentesque dignissim feugiat turpis vitae pharetra. Duis viverra tincidunt ipsum, eget feugiat tortor accumsan sed. Mauris bibendum quam et nisi sollicitudin, in posuere lectus vulputate. Praesent tincidunt, elit sit amet interdum mattis, lorem eros placerat libero, non molestie leo massa auctor mauris. Ut vitae urna vel nibh tincidunt vestibulum. Etiam quis nunc porttitor, pharetra nulla at, interdum velit. Proin maximus ante quam, ac facilisis sapien dictum vel.'
  },
  {
    heading: 'Heading 3',
    body:
      'Morbi faucibus faucibus commodo. Etiam at mi tincidunt, maximus nibh ac, ultricies neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu neque et mauris sagittis molestie. Aliquam erat volutpat. Nulla leo metus, venenatis ac interdum at, sagittis at metus. Nullam ac lorem aliquam, pulvinar velit et, cursus diam. Vivamus commodo felis id libero iaculis, non iaculis massa porta. Donec pellentesque urna id lectus convallis, et tincidunt mauris tincidunt. Etiam iaculis sem nisl, faucibus finibus turpis vestibulum in.'
  }
];

<Accordion data={data} />
`;

export const AccordionCode = (): React.ReactElement => (
  <DocsCodeBlock>{code}</DocsCodeBlock>
);
