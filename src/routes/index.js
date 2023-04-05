import { LOCATIONS } from 'constant';

import Blog from 'pages/Blog/index';
import HomePage from 'pages/HomePage/index';

const publicRoutes = [
  { path: LOCATIONS.HOME_PAGE, exact: true, component: HomePage },
  { path: LOCATIONS.BLOG, exact: true, component: Blog },
];

export default publicRoutes;
