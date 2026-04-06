'use client';

import { useState } from 'react';

interface Order {
  id: string;
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

  const handleUpdate = async () => {
    try {
      // TODO: Update order in db
      console.log('Update order:', { status, notes, quote });
      alert('Order updated successfully!');
    } catch (error) {
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
        <input type="number" value={quote} onChange={(e) => setQuote(e.target.value)} className="p-2 border rounded" />
      </div>
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
    </div>
  );
}