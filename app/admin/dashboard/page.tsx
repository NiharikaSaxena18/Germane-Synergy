'use client';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">123</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Active Projects</h2>
          <p className="text-2xl">45</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl">$12,345</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <ul className="bg-white p-4 rounded shadow">
          <li>Order #1 - Pending</li>
          <li>Order #2 - Completed</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add Project</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Add Order</button>
      </div>
    </div>
  );
}