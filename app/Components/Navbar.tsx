"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 shadow-md h-20 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
    <img 
      src="/images/logo.png" 
      alt="Germane Synergy Logo" 
      className="h-full w-auto"
    />
  </div>

        <div className="space-x-7 hidden md:flex text-black">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/envsafety" className="hover:text-blue-600">Environment & Safety</Link>
          <Link href="/careers" className="hover:text-blue-600">Careers</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}