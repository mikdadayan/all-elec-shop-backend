import { Router } from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/users';
import { protect } from '../../middlewares/authMiddlware';

const router = Router();

router.post('/users/login', authUser);

router.get('/users/profile', protect, getUserProfile);

router.post('/users/signup', registerUser);

export default router;
