import { RequestHandler, Request } from 'express';
import Product from '../../models/Product';

interface ProductType {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts: RequestHandler = async (_req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    let err = error as Error;
    console.log(`Error: ${err.message}`.red);
    next(err);
    // throw new Error(`Something went wrong`);
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    return res.status(200).json(product);
  } catch (error) {
    let err = error as Error;
    console.log(`Error: ${err.message}`.red);
    next(err);
    // throw new Error(`Something went wrong`);
  }
};
