import Mock from 'mockjs';
import data from './data';

Mock.mock("/goods", {
  errno: 0,
  data: data.goods
})
Mock.mock("/ratings", {
  errno: 0,
  data: data.ratings
})
Mock.mock("/seller", {
  errno: 0,
  data: data.seller
})