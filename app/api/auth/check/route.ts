import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ isAdmin: false });
    }

    const decoded = verifyToken(token);

    if (decoded.role === 'admin') {
      return NextResponse.json({ isAdmin: true, user: decoded });
    } else {
      return NextResponse.json({ isAdmin: false });
    }
  } catch (error) {
    return NextResponse.json({ isAdmin: false });
  }
}