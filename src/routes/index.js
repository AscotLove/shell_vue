import goods from '@pages/ele-goods';
import ratings from '@pages/ele-ratings';
import seller from '@pages/ele-seller';

export default [
  {
    path: "/goods",
    component: goods
  },
  {
    path: "/ratings",
    component: ratings,
  },
  {
    path: "/seller",
    component: seller
  },
  {
    path: "/",
    redirect: "/goods"
  }
]