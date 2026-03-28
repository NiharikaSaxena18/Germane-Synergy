'use client';

import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="mt-4">
          <Link href="/admin/dashboard" className="block p-4 hover:bg-gray-700">Dashboard</Link>
          <Link href="/admin/orders" className="block p-4 hover:bg-gray-700">Orders</Link>
          <Link href="/admin/projects" className="block p-4 hover:bg-gray-700">Projects</Link>
          <Link href="/admin/careers" className="block p-4 hover:bg-gray-700">Careers</Link>
          <Link href="/admin/pages" className="block p-4 hover:bg-gray-700">Pages</Link>
          <Link href="/admin/services" className="block p-4 hover:bg-gray-700">Services</Link>
          <Link href="/admin/media" className="block p-4 hover:bg-gray-700">Media</Link>
          <Link href="/admin/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1">
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Admin</h1>
        </header>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}