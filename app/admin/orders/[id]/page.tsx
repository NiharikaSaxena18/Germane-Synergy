import { notFound } from 'next/navigation';
import OrderDetailClient from './OrderDetailClient';

interface PageProps {
  params: { id: string };
}

export default function OrderDetailPage({ params }: PageProps) {
  const order = { id: params.id, customer: 'John Doe', status: 'pending', total: 100, items: [] }; // mock

  if (!order) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>
      <p>Customer: {order.customer}</p>
      <p>Status: {order.status}</p>
      <p>Total: ${order.total}</p>
      {/* Client component for updates */}
      <OrderDetailClient order={order} />
    </div>
  );
}