import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '../../../lib/db';

export async function GET() {
  try {
    const orders = readData<any>('orders');
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read orders' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const orders = readData<any>('orders');
    const index = orders.findIndex((item) => item.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    orders[index] = { ...orders[index], ...body };
    writeData('orders', orders);
    return NextResponse.json(orders[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
  }
}
