import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '../../../lib/db';
import { isAdmin } from '../../../lib/auth';

export async function GET() {
  try {
    const content = readData<any>('content');
    return NextResponse.json(content[0] || {});
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!isAdmin(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { path, value } = body;

    // Read current content
    const contentArray = readData<any>('content');
    let content = contentArray[0] || {};

    // Update the content at the specified path
    const keys = path.split('.');
    let current = content;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;

    // Write back
    writeData('content', [content]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}