import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret';

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
    if (typeof decoded === 'string' || !decoded) return false;
    return (decoded as JwtPayload).role === 'admin';
  } catch (error) {
    return false;
  }
}