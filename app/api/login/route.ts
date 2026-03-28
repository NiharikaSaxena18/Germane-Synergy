import { NextRequest, NextResponse } from 'next/server';
import { generateToken } from '@/lib/auth';

const DEFAULT_EMAIL = 'admin@germane.com';
const DEFAULT_PASSWORD = 'admin123';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Check default admin credentials
  if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
    const token = generateToken({ email, role: 'admin' });
    const response = NextResponse.json({ success: true });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 day
    });
    return response;
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}