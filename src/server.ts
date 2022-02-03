import express, { Express, Request, Response } from 'express';
import products from './data/products';

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
