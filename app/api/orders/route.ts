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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const orders = readData<any>('orders');
    const nextId = String(
      orders.length > 0 ? Math.max(...orders.map((order: any) => Number(order.id || '0'))) + 1 : 1
    );
    const newOrder = {
      ...body,
      id: nextId,
      status: body.status || 'pending',
      date: body.date || new Date().toISOString().slice(0, 10),
    };
    orders.push(newOrder);
    writeData('orders', orders);
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
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
