import { NextResponse } from 'next/server';
import { readData } from '../../../lib/db';

export async function GET() {
  try {
    const projects = readData<any>('projects');
    const orders = readData<any>('orders');

    const totalOrders = orders.length;
    const pendingOrders = orders.filter((o) => o.status === 'pending').length;
    const completedOrders = orders.filter((o) => o.status === 'completed').length;
    const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const totalProjects = projects.length;
    const activeProjects = projects.filter((p) => p.status === 'active').length;
    const completedProjects = projects.filter((p) => p.status === 'completed').length;

    return NextResponse.json({
      totalOrders,
      pendingOrders,
      completedOrders,
      revenue,
      totalProjects,
      activeProjects,
      completedProjects,
      recentOrders: orders.slice(-5).reverse(),
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read dashboard data' }, { status: 500 });
  }
}
