import * as Modules from './modules';

export const componentData = [
  {
    name: 'Button',
    component: Modules.ButtonExample,
    description: 'A customizable button used to trigger an action.',
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The content inside the button.'
      },
      {
        propName: 'type',
        propType: 'string',
        propDefault: 'primary',
        propDescription: 'The type button (primary, secondary, reverse or danger).'
      },
      {
        propName: 'size',
        propType: 'string',
        propDefault: 'normal',
        propDescription: 'The size of the button (small, normal, large).'
      }
    ],
    code: Modules.ButtonCode
  },
  {
    name: 'Card',
    component: Modules.CardExample,
    description: 'A block containing a short summary, such as a person\'s profile, usually used as a grid item.',
    propDescriptions: [
      {
        propName: 'avatarSrc',
        propType: 'string',
        propDefault: null,
        propDescription: 'The source of the image.'
      },
      {
        propName: 'name',
        propType: 'string',
        propDefault: null,
        propDescription: 'The name or title of the card.'
      },
      {
        propName: 'description',
        propType: 'string',
        propDefault: null,
        propDescription: 'The description/summary of the card.'
      },
      {
        propName: 'linkSrc',
        propType: 'string',
        propDefault: null,
        propDescription: 'The url for a link on the card.'
      }
    ],
    code: Modules.CardCode
  },
  {
    name: 'Fetcher',
    component: Modules.FetcherExample,
    description: 'A container component used to call an API.',
    propDescriptions: [
      {
        propName: 'render',
        propType: 'func',
        propDefault: null,
        propDescription: 'The render function.'
      },
      {
        propName: 'loader',
        propType: 'component',
        propDefault: null,
        propDescription: 'An optional Spinner/Loader component.'
      },
      {
        propName: 'url',
        propType: 'string',
        propDefault: 'normal',
        propDescription: 'The url to fetch.'
      }
    ],
    code: Modules.FetcherCode
  },
  {
    name: 'Grid',
    component: Modules.GridExample,
    description: 'A wrapper component that lays out its children using CSS Grid.',
    propDescriptions: [
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The grid items to be rendered.'
      },
      {
        propName: 'cols',
        propType: 'string',
        propDefault: 'repeat(auto-fit, minmax(200px, 1fr))',
        propDescription: 'The value for the grid-template-columns property.'
      },
      {
        propName: 'rows',
        propType: 'string',
        propDefault: null,
        propDescription: 'The value for the grid-template-rows property.'
      }
    ],
    code: Modules.GridCode
  },
  {
    name: 'HeaderBar',
    component: Modules.HeaderBarExample,
    description: 'A horizontal bar at the top of a page, used to present branding, a search box, and/or a navigation menu.',
    propDescriptions: [
      {
        propName: 'title',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title text of the header.'
      }
    ],
    code: Modules.HeaderBarCode
  },
  {
    name: 'Icon',
    component: Modules.IconExample,
    description: 'An inline svg rendering of one of a set of commonly used icons.',
    propDescriptions: [
      {
        propName: 'value',
        propType: 'string',
        propDefault: null,
        propDescription: 'A lowercase string of the icon type (email, facebook, twitter).'
      },
      {
        propName: 'color',
        propType: 'string',
        propDefault: 'gray',
        propDescription: 'A hex value, rgb value, or name for the fill color of the icon.'
      }
    ],
    code: Modules.IconCode
  },
  {
    name: 'List',
    component: Modules.ListExample,
    description: 'A list of multiple items, presented either vertically or horizontally.',
    propDescriptions: [
      {
        propName: 'listTitle',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title of the list.'
      },
      {
        propName: 'data',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of the list items to render.'
      }
    ],
    code: Modules.ListCode
  },
  {
    name: 'Loader',
    component: Modules.LoaderExample,
    description: 'An animated spinner used to indicate that content is loading.',
    propDescriptions: [],
    code: Modules.LoaderCode
  },
  {
    name: 'Modal',
    component: Modules.ModalExample,
    description: 'A pop-in box used to present information center-screen.',
    propDescriptions: [
      {
        propName: 'title',
        propType: 'string',
        propDefault: null,
        propDescription: 'The title of the modal.'
      },
      {
        propName: 'children',
        propType: 'node',
        propDefault: null,
        propDescription: 'The content of the modal.'
      }
    ],
    code: Modules.ModalCode
  },
  {
    name: 'NavMenu',
    component: Modules.NavMenuExample,
    description: 'A list of navigation links, presented either vertically or horizontally.',
    propDescriptions: [
      {
        propName: 'menuTitle',
        propType: 'title',
        propDefault: null,
        propDescription: 'The title of the navigation menu.'
      },
      {
        propName: 'linkColor',
        propType: 'string',
        propDefault: 'rgb(33, 150, 243)',
        propDescription: 'The type button (primary, secondary, reverse or danger).'
      },
      {
        propName: 'linkType',
        propType: 'string',
        propDefault: 'anchorLink',
        propDescription: 'A standard anchor link or a React Router link.'
      },
      {
        propName: 'linkDisabled',
        propType: 'boolean',
        propDefault: 'false',
        propDescription: 'A boolean that specifies whether the links should be disabled with preventDefault().'
      },
      {
        propName: 'data',
        propType: 'array',
        propDefault: null,
        propDescription: 'An array of menu items to render.'
      }
    ],
    code: Modules.NavMenuCode
  }
];
