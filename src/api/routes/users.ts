import { Router } from 'express';
import { authUser } from '../controllers/users';

const router = Router();

router.post('/users/login', authUser);

export default router;
