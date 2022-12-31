import Detail from '../views/pages/detail';
import fav from '../views/pages/fav';
import home from '../views/pages/home';

const routes = {
  '/': home, // default page
  '/home': home,
  '/detail/:id': Detail,
  '/fav': fav,
};

export default routes;
