import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './api/routes/products';

dotenv.config();

const PORT = process.env.PORT || 2900;
const app: Express = express();
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api', productRouter);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
