import { notFound } from 'next/navigation';
import OrderDetailClient from './OrderDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = await params;

  const order = { id, customer: 'John Doe', status: 'pending', total: 100, items: [] }; // mock

  if (!order) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>
      <p>Total: ${order.total}</p>

      <OrderDetailClient order={order} />
    </div>
  );
}