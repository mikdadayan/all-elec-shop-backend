import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
}

interface JWTDecode {
  id: string;
  iat: number;
  exp: number;
}

export const protect: RequestHandler = async (req, res, next) => {
  let token;
  let authorization = req.headers.authorization;
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      token = authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_TOKEN!
      ) as unknown as JWTDecode;
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      next(new Error('Not authorized, token failed'));
    }
  }
  if (!token) {
    res.status(401);
    next(new Error('Not authorized, invalid token'));
    throw new Error('Not authorized, invalid token');
  }
};
