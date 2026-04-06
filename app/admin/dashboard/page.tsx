'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
  revenue: number;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  recentOrders: Array<{ id: string; customer: string; status: string }>;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    revenue: 0,
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    recentOrders: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval: number;

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to load dashboard stats', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    interval = window.setInterval(fetchStats, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl">{loading ? '...' : stats.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Active Projects</h2>
          <p className="text-2xl">{loading ? '...' : stats.activeProjects}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-2xl">{loading ? '...' : `$${stats.revenue.toLocaleString()}`}</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <ul className="bg-white p-4 rounded shadow space-y-2">
          {loading ? (
            <li>Loading...</li>
          ) : stats.recentOrders.length > 0 ? (
            stats.recentOrders.map((order) => (
              <li key={order.id} className="border border-gray-200 rounded p-3">
                Order #{order.id} - {order.customer} - <span className="font-semibold">{order.status}</span>
              </li>
            ))
          ) : (
            <li>No recent orders</li>
          )}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <Link href="/admin/projects/new" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 inline-block">Add Project</Link>
        <Link href="/admin/orders" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-block">View Orders</Link>
      </div>
    </div>
  );
}