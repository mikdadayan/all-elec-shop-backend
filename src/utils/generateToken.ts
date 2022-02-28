import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN!, { expiresIn: '5m' });
};

export default generateToken;
