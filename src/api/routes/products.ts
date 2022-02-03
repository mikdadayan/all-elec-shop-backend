import { Router } from 'express';
import { getProducts, getProduct } from '../controllers/products';

const router = Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

export default router;
