import { RequestHandler } from 'express';
import products from '../../data/products';

export const getProducts: RequestHandler = (_req, res, _next) => {
  res.status(200).json(products);
};

export const getProduct: RequestHandler = (req, res, _next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
};
