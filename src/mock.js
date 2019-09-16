var Mock = require('mockjs');
import datas from './assets/data';
 Mock.mock({
    seller: datas.seller,
    goods: datas.goods,
    ratings: datas.ratings
})
// 输出结果
console.log(JSON.stringify(data, null, 4))