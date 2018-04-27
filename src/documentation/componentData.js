import * as Modules from './modules';

const componentData = [
  {
    name: 'Button',
    description: 'A customizable button used to trigger an action.',
    component: Modules.ButtonExample,
    code: Modules.ButtonCode
  },
  {
    name: 'Card',
    description: 'A block containing a short summary, such as a persons profile, usually used as a grid item.',
    component: Modules.CardExample,
    code: Modules.CardCode
  },
  {
    name: 'Fetcher',
    description: 'A container component used to call an API.',
    component: Modules.FetcherExample,
    code: Modules.FetcherCode
  },
  {
    name: 'HeaderBar',
    description: 'A horizontal bar at the top of a page, used to present branding, a search box, and/or a navigation menu.',
    component: Modules.HeaderBarExample,
    code: Modules.HeaderBarCode
  },
  {
    name: 'Icon',
    description: 'An inline svg rendering of one of a set of commonly used icons.',
    component: Modules.IconExample,
    code: Modules.IconCode
  },
  {
    name: 'List',
    description: 'A list of multiple items, presented either vertically or horizontally.',
    component: Modules.ListExample,
    code: Modules.ListCode
  },
  {
    name: 'Loader',
    description: 'An animated spinner used to indicate that content is loading.',
    component: Modules.LoaderExample,
    code: Modules.LoaderCode
  },
  {
    name: 'Modal',
    description: 'A pop-in box used to present information center-screen.',
    component: Modules.ModalExample,
    code: Modules.ModalCode
  },
  {
    name: 'NavMenu',
    description: 'A list of navigation links, presented either vertically or horizontally.',
    component: Modules.NavMenuExample,
    code: Modules.NavMenuCode
  }
];

export { componentData };
