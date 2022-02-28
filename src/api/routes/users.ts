import { Router } from 'express';
import { authUser, getUserProfile } from '../controllers/users';
import { protect } from '../../middlewares/authMiddlware';

const router = Router();

router.post('/users/login', authUser);

router.get('/users/profile', protect, getUserProfile);

export default router;
