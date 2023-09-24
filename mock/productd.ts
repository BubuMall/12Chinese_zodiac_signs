import { defineMock } from 'umi';

type Product = {
  id: string;
  name: string;
};

let products: Product[] = [
  {
    id: '选项1',
    name: '黄金糕'
  }, {
    id: '选项2',
    name: '双皮奶'
  }, {
    id: '选项3',
    name: '蚵仔煎'
  }, {
    id: '选项4',
    name: '龙须面'
  }, {
    id: '选项5',
    name: '北京烤鸭'
  }
];

export default defineMock({
  'GET /api/products': (_, res) => {
    res.send({
      status: 'ok',
      data: products,
    });
  },
  'DELETE /api/products/:id': (req, res) => {
    products = products.filter((item) => item.id !== req.params.id);
    res.send({ status: 'ok' });
  },
});
