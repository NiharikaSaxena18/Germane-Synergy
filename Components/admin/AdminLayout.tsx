'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname?.startsWith('/admin/login')) {
      setLoading(false);
      return;
    }

    checkAuth();
  }, [pathname]);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check');
      const data = await res.json();
      if (data.isAdmin) {
        setIsAuthorized(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  if (pathname?.startsWith('/admin/login')) {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAuthorized) {
    return null;
  }

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
          <Link href="/admin/media" className="block p-4 hover:bg-gray-700">Media</Link>
          <Link href="/admin/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
          <button onClick={handleLogout} className="block w-full text-left p-4 hover:bg-gray-700">Logout</button>
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