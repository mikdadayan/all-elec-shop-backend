import express, { Express, Request, Response } from 'express';
import productRouter from './api/routes/products';

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
