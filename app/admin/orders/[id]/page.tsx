import { notFound } from 'next/navigation';
import OrderDetailClient from './OrderDetailClient';
import { readData } from '@/lib/db';

interface PageProps {
  params: { id: string };
}

export default async function OrderDetailPage({ params }: PageProps) {
  const { id } = params;
  const orders = readData<any>('orders');
  const order = orders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order #{order.id}</h1>
      <p className="mb-1">Customer: {order.customer}</p>
      <p className="mb-1">Status: {order.status}</p>
      <p className="mb-1">Date: {order.date}</p>
      <p className="mb-6">Total: NGN {order.total}</p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Items</h2>
        {order.items?.length ? (
          <ul className="space-y-3">
            {order.items.map((item: any) => (
              <li key={item.id} className="p-4 border border-gray-200 rounded-lg">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-600">Price: NGN {item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No items available for this order.</p>
        )}
      </div>

      <OrderDetailClient order={order} />
    </div>
  );
}