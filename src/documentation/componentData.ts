import * as Modules from './modules';
import { PropType } from '@/shared';

export const componentData = [
  {
    name: 'Accordion',
    description:
      'A panel that a allows user to show and hide sections of related content.',
    component: Modules.AccordionExample,
    code: Modules.AccordionCode,
    propDetails: [
      {
        // propName: 'suggestions',
        // propType: PropType.Array,
        // propDefault: undefined,
        // propDescription: 'A list of items to use as suggestions.'
      }
    ]
  },
  {
    name: 'AutoComplete',
    description:
      'An input that displays suggestions based on a passed in array of values.',
    component: Modules.AutoCompleteExample,
    code: Modules.AutoCompleteCode,
    propDetails: [
      {
        propName: 'suggestions',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription: 'A list of items to use as suggestions.'
      },
      {
        propName: 'name',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          'The name attribute for the input, used to reference form data on submission.'
      },
      {
        propName: 'label',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The text label above the input.'
      },
      {
        propName: 'placeholder',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          'The help text that appears in the field when no value is input.'
      }
    ]
  },
  {
    name: 'Button',
    description: 'A customizable button used to trigger an action.',
    component: Modules.ButtonExample,
    code: Modules.ButtonCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The content inside the button.'
      },
      {
        propName: 'styleType',
        propType: PropType.String,
        propDefault: 'primary',
        propDescription:
          'The type of button (primary, secondary, reverse or danger).'
      },
      {
        propName: 'size',
        propType: PropType.String,
        propDefault: 'normal',
        propDescription: 'The size of the button (small, normal, large).'
      },
      {
        propName: 'component',
        propType: PropType.String,
        propDefault: 'button',
        propDescription:
          'The HTML element of the button, for example, if an anchor tag is needed rather than a button tag.'
      }
    ]
  },
  {
    name: 'Card',
    description:
      "A block containing a few short pieces of info, such as a person's profile.",
    component: Modules.CardExample,
    code: Modules.CardCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The content of the card.'
      },
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'An optional header/title for the card.'
      }
    ]
  },
  {
    name: 'Carousel',
    description:
      'A carousel/slider used to view images one at a time that slide horizontally into view.',
    component: Modules.CarouselExample,
    code: Modules.CarouselCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The carousel elements to slide.'
      },
      {
        propName: 'showArrows',
        propType: PropType.Boolean,
        propDefault: 'true',
        propDescription: 'Use to show left and right navigation arrows.'
      },
      {
        propName: 'showDots',
        propType: PropType.Boolean,
        propDefault: 'false',
        propDescription: 'Use to show navigation dots.'
      },
      {
        propName: 'useSwiper',
        propType: PropType.Boolean,
        propDefault: 'true',
        propDescription: 'Use to add swipe functionality on mobile devices.'
      },
      {
        propName: 'delay',
        propType: PropType.Number,
        propDefault: undefined,
        propDescription:
          'Optional amount in milliseconds for elements to auto-slide.'
      }
    ]
  },
  {
    name: 'Dropdown',
    description:
      'A hidden menu that appears on a button click, used for profile menus, additional settings, etc.',
    component: Modules.DropdownExample,
    code: Modules.DropdownCode,
    propDetails: [
      {
        propName: 'data',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription:
          'An array of objects with a label and value property for the menu items.'
      },
      {
        propName: 'defaultLabel',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          'The text label for the dropdown button before an item is selected.'
      },
      {
        propName: 'width',
        propType: PropType.String,
        propDefault: '200px',
        propDescription: 'Width of the dropdown container.'
      },
      {
        propName: 'onMenuItemClick',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription:
          'An optional callback executed when a menu item is clicked.'
      }
    ]
  },
  {
    name: 'Fetcher',
    description: 'A container component used to call an API.',
    component: Modules.FetcherExample,
    code: Modules.FetcherCode,
    propDetails: [
      {
        propName: 'loader',
        propType: PropType.Component,
        propDefault: undefined,
        propDescription: 'An optional Spinner/Loader component.'
      },
      {
        propName: 'url',
        propType: PropType.String,
        propDefault: 'normal',
        propDescription: 'The url to fetch.'
      },
      {
        propName: 'options',
        propType: PropType.Object,
        propDefault: undefined,
        propDescription:
          'Optional object containing custom settings for request.'
      }
    ]
  },
  {
    name: 'Form',
    description: 'A wrapper for form elements that accept user input.',
    component: Modules.FormExample,
    code: Modules.FormCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The form elements to render.'
      },
      {
        propName: 'onSubmit',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'The function to call on form submission.'
      }
    ]
  },
  // {
  //   name: 'Grid',
  //   description:
  //     'A wrapper component that lays out its children using CSS Grid.',
  //   component: Modules.GridExample,
  //   code: Modules.GridCode,
  //   propDetails: [
  //     {
  //       propName: 'children',
  //       propType: PropType.Node,
  //       propDefault: undefined,
  //       propDescription: 'The grid items to be rendered.'
  //     },
  //     {
  //       propName: 'cols',
  //       propType: PropType.String,
  //       propDefault: 'repeat(auto-fit, minmax(200px, 1fr))',
  //       propDescription: 'The value for the grid-template-columns property.'
  //     },
  //     {
  //       propName: 'rows',
  //       propType: PropType.String,
  //       propDefault: undefined,
  //       propDescription: 'The value for the grid-template-rows property.'
  //     }
  //   ]
  // },
  {
    name: 'HeaderBar',
    description:
      'A horizontal bar at the top of a page, used to present branding, a search box, and/or a navigation menu.',
    component: Modules.HeaderBarExample,
    code: Modules.HeaderBarCode,
    propDetails: [
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The title text of the header.'
      },
      {
        propName: 'navLinks',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription:
          'An optional array of anchor tags or React Router Links for a navigation bar.'
      },
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'Optional right-aligned content.'
      }
    ]
  },
  {
    name: 'Icon',
    description:
      'An inline svg rendering of one of a set of commonly used icons.',
    component: Modules.IconExample,
    code: Modules.IconCode,
    propDetails: [
      {
        propName: 'value',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          'A lowercase string of the icon type (email, facebook, twitter).'
      },
      {
        propName: 'color',
        propType: PropType.String,
        propDefault: '#bfbfbf (gray)',
        propDescription:
          'A hex value, rgb value, or name for the fill color of the icon.'
      },
      {
        propName: 'width',
        propType: PropType.String,
        propDefault: '20',
        propDescription: 'The width of the icon in pixels.'
      }
    ]
  },
  {
    name: 'Image',
    description:
      'A replacement for the img tag, used to fallback to a default image to handle broken images.',
    component: Modules.ImageExample,
    code: Modules.ImageCode,
    propDetails: [
      {
        propName: 'src',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The source url for the image.'
      },
      {
        propName: 'defaultSrc',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          "The source url for a default image to use in the event that the original image doesn't load."
      },
      {
        propName: 'alt',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The alternative text description for the image.'
      },
      {
        propName: 'onLoad',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'A callback to run after an image loads.'
      },
      {
        propName: 'onError',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription:
          'A callback to run when an error occurs loading the image.'
      }
    ]
  },
  {
    name: 'Input',
    description: 'A text field that accepts user data.',
    component: Modules.InputExample,
    code: Modules.InputCode,
    propDetails: [
      {
        propName: 'name',
        propType: PropType.String,
        propDefault: undefined,
        propDescription:
          'The name attribute for the input, used to reference form data on submission.'
      },
      {
        propName: 'label',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The text label above the input.'
      },
      {
        propName: 'value',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The initial value for the input field.'
      },
      {
        propName: 'errorMessage',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'An error message to display when input is invalid.'
      },
      {
        propName: 'isValid',
        propType: PropType.Boolean,
        propDefault: 'true',
        propDescription:
          'A boolean to indicate whether input entered is valid or not.'
      },
      {
        propName: 'onChange',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'The function to run when the user enters text.'
      }
    ]
  },
  {
    name: 'InputTable',
    description:
      'A table for inputting, copy & pasting CSV data, or dragging and dropping a CSV file, with validation.',
    component: Modules.InputTableExample,
    code: Modules.InputTableCode,
    propDetails: [
      {
        propName: 'columnDefs',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription: 'An array of objects used to define the column fields.'
      },
      {
        propName: 'rowCount',
        propType: PropType.Number,
        propDefault: undefined,
        propDescription: 'The number of rows to add.'
      },
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The header title of the table.'
      },
      {
        propName: 'onSubmit',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'Callback function called on successful submission.'
      }
    ]
  },
  {
    name: 'LazyLoad',
    description:
      'A wrapper for loading images efficiently as they scroll into view.',
    component: Modules.LazyLoadExample,
    code: Modules.LazyLoadCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The images to lazy load.'
      }
    ]
  },
  {
    name: 'List',
    description: 'A vertical list of multiple items.',
    component: Modules.ListExample,
    code: Modules.ListCode,
    propDetails: [
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The title of the list.'
      },
      {
        propName: 'data',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription: 'An array of the list items to render.'
      }
    ]
  },
  {
    name: 'Loader',
    description:
      'An animated spinner used to indicate that content is loading.',
    component: Modules.LoaderExample,
    code: Modules.LoaderCode,
    propDetails: []
  },
  {
    name: 'Menu',
    description: 'An accordion menu used for navigation.',
    component: Modules.MenuExample,
    code: Modules.MenuCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription:
          'The contents of the Menu, consisting of several Menu.Item components and an optional Menu.SubMenu.'
      },
      {
        propName: 'onMenuItemClick',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'Callback function called when a menu item is clicked.'
      },
      {
        propName: 'menuItem',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'ID and label for top-level menu item.'
      }
    ]
  },
  {
    name: 'Modal',
    description: 'A pop-in box used to present information center-screen.',
    component: Modules.ModalExample,
    code: Modules.ModalCode,
    propDetails: [
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The title of the modal content.'
      },
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The content of the modal.'
      },
      {
        propName: 'isOpen',
        propType: PropType.Boolean,
        propDefault: undefined,
        propDescription: 'A boolean to open or close the modal.'
      },
      {
        propName: 'handleClose',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'Callback function to close the modal.'
      }
    ]
  },
  {
    name: 'Share',
    description: 'A social sharing widget.',
    component: Modules.ShareExample,
    code: Modules.ShareCode,
    propDetails: [
      {
        propName: 'shares',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription: 'An array of social network names.'
      },
      {
        propName: 'url',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The url to share.'
      },
      {
        propName: 'title',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The subject for email shares.'
      },
      {
        propName: 'text',
        propType: PropType.String,
        propDefault: undefined,
        propDescription: 'The text of the share.'
      }
    ]
  },
  {
    name: 'Swiper',
    description:
      'A wrapper for adding swipe functionality to images on mobile devices.',
    component: Modules.SwiperExample,
    code: Modules.SwiperCode,
    propDetails: [
      {
        propName: 'children',
        propType: PropType.Node,
        propDefault: undefined,
        propDescription: 'The images to make swipable.'
      },
      {
        propName: 'threshold',
        propType: PropType.Number,
        propDefault: '15',
        propDescription:
          'The amount in pixels needed to register a swipe action.'
      },
      {
        propName: 'onSwipeLeft',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'A callback to run after a left swipe.'
      },
      {
        propName: 'onSwipeRight',
        propType: PropType.Function,
        propDefault: undefined,
        propDescription: 'A callback to run after a right swipe.'
      }
    ]
  },
  {
    name: 'Table',
    description:
      'A responsive table that displays vertically on small screens.',
    component: Modules.TableExample,
    code: Modules.TableCode,
    propDetails: [
      {
        propName: 'tableHeads',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription: 'An array of table column headings.'
      },
      {
        propName: 'tableData',
        propType: PropType.Array,
        propDefault: undefined,
        propDescription:
          'An array of objects, with each object representing a row containing cell data.'
      }
    ]
  }
];
