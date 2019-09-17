import Mock from 'mockjs';
import data from './data';

Mock.mock( "/goods", {
 error: 0,
  data: data.goods
})
Mock.mock( "/ratings", {
  error: 0,
  data: data.ratings
})
Mock.mock( "/seller", {
  error: 0,
  data: data.seller
})