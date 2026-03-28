import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret'; // use env

export function generateToken(payload: any) {
  return jwt.sign(payload, SECRET);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}