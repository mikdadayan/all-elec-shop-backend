import { RequestHandler } from 'express';
import User from '../../models/User';

// @desc    Auth user and get a token
// @route   POST /api/users/login
// @access  Public
const authUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!(user && (await user.matchPassword(password)))) {
      res.status(401);
      throw new Error('Invalid email or password');
    }
    return res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } catch (error) {
    let err = error as Error;
    console.log(`Error: ${err.message}`.red);
    next(err);
    // throw new Error(`Something went wrong`);
  }
};

export { authUser };
