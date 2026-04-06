"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in as admin
    const checkAdminStatus = async () => {
      try {
        const response = await fetch('/api/auth/check', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        setIsAdmin(data.isAdmin || false);
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdminStatus();
  }, []);

  return (
    <nav className="bg-gray-200 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto">

        {/* Top Bar */}
        <div className="h-20 flex justify-between px-5 items-center">

          {/* Logo */}
          <div className="relative w-32 h-12">
            <Image
              src="/images/logo.png"
              alt="Germane Synergy Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex px-3 space-x-7 text-black">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/envsafety" className="hover:text-blue-600">Environment & Safety</Link>
            <Link href="/careers" className="hover:text-blue-600">Careers</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Login/Admin Button */}
          <div className="flex items-center space-x-4">
            {isAdmin ? (
              <Link
                href="/admin/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
              >
                Admin Dashboard
              </Link>
            ) : (
              <Link
                href="/admin/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
              >
                Login
              </Link>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden px-5 py-2 focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu INSIDE Navbar */}
        {menuOpen && (
          <div className="md:hidden fixed top-20 right-0 w-1/2 text-right p-6 space-y-4 bg-white/40 backdrop-blur-sm text-black shadow-lg">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/about" className="block hover:text-blue-600">About</Link>
            <Link href="/services" className="block hover:text-blue-600">Services</Link>
            <Link href="/projects" className="block hover:text-blue-600">Projects</Link>
            <Link href="/envsafety" className="block hover:text-blue-600">Environment & Safety</Link>
            <Link href="/careers" className="block hover:text-blue-600">Careers</Link>
            <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
            <div className="border-t pt-4">
              {isAdmin ? (
                <Link href="/admin/dashboard" className="block text-blue-600 hover:text-blue-800 font-medium">Admin Dashboard</Link>
              ) : (
                <Link href="/admin/login" className="block text-blue-600 hover:text-blue-800 font-medium">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}