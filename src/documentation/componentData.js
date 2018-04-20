import ButtonExample from './componentExamples/ButtonExample/ButtonExample';
import ButtonCode from './componentExamples/ButtonExample/ButtonCode';
import CardExample from './componentExamples/CardExample/CardExample';
import CardCode from './componentExamples/CardExample/CardCode';
import FetcherExample from './componentExamples/FetcherExample/FetcherExample';
import FetcherCode from './componentExamples/FetcherExample/FetcherCode';
import HeaderBarExample from './componentExamples/HeaderBarExample/HeaderBarExample';
import HeaderBarCode from './componentExamples/HeaderBarExample/HeaderBarCode';
import ListExample from './componentExamples/ListExample/ListExample';
import ListCode from './componentExamples/ListExample/ListCode';
import LoaderExample from './componentExamples/LoaderExample/LoaderExample';
import LoaderCode from './componentExamples/LoaderExample/LoaderCode';
import ModalExample from './componentExamples/ModalExample/ModalExample';
import ModalCode from './componentExamples/ModalExample/ModalCode';
import NavMenuExample from './componentExamples/NavMenuExample/NavMenuExample';
import NavMenuCode from './componentExamples/NavMenuExample/NavMenuCode';

const componentData = [
  {
    name: 'Button',
    description: 'A customizable button used to trigger an action.',
    component: ButtonExample,
    code: ButtonCode
  },
  {
    name: 'Card',
    description: 'A block containing a short summary, such as a persons profile, usually used as a grid item.',
    component: CardExample,
    code: CardCode
  },
  {
    name: 'Fetcher',
    description: 'A container component used to call an API.',
    component: FetcherExample,
    code: FetcherCode
  },
  {
    name: 'HeaderBar',
    description: 'A horizontal bar at the top of a page, used to present branding, a search box, and/or a navigation menu.',
    component: HeaderBarExample,
    code: HeaderBarCode
  },
  {
    name: 'List',
    description: 'A list of multiple items, presented either vertically or horizontally.',
    component: ListExample,
    code: ListCode
  },
  {
    name: 'Loader',
    description: 'An animated spinner used to indicate that content is loading.',
    component: LoaderExample,
    code: LoaderCode
  },
  {
    name: 'Modal',
    description: 'A pop-in box used to present information center-screen.',
    component: ModalExample,
    code: ModalCode
  },
  {
    name: 'NavMenu',
    description: 'A list of navigation links, presented either vertically or horizontally.',
    component: NavMenuExample,
    code: NavMenuCode
  }
];

export { componentData };
