'use client';

import { useState } from 'react';

interface Order {
  id: string;
  customer: string;
  date: string;
  status: string;
  total: number;
  items: any[];
  notes?: string;
  quote?: number;
}

interface Props {
  order: Order;
}

export default function OrderDetailClient({ order }: Props) {
  const [status, setStatus] = useState(order.status);
  const [notes, setNotes] = useState(order.notes || '');
  const [quote, setQuote] = useState(order.quote || 0);

  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/orders', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: order.id, status, notes, quote, total: order.total, customer: order.customer, date: order.date, items: order.items }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

      setMessage('Order updated successfully.');
    } catch (error) {
      setMessage('Unable to update order.');
      console.error('Error updating order:', error);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Update Order</h2>
      <div className="mb-4">
        <label className="block mb-2">Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="p-2 border rounded">
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Quote</label>
        <input type="number" value={quote} onChange={(e) => setQuote(Number(e.target.value))} className="p-2 border rounded" />
      </div>
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}