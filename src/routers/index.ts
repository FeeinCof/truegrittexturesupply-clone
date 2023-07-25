import routesConfig from '~/config/routes';
import { DefaultLayout } from '~/layouts';
import Home from '~/pages/Home';

const publishRoutes = [
  {
    path: routesConfig.home,
    component: Home,
    layout: DefaultLayout,
  },
];
const privateRoutes = [null];

export { publishRoutes, privateRoutes };
