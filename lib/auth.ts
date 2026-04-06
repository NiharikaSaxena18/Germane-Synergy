import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret'; // use env

export function generateToken(payload: any) {
  return jwt.sign(payload, SECRET);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}

export function isAdmin(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const decoded = verifyToken(token);
    return decoded.role === 'admin';
  } catch (error) {
    return false;
  }
}