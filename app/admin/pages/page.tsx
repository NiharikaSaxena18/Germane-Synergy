'use client';

import { useState } from 'react';
import AdminLayout from '../../../Components/admin/AdminLayout';

export default function PagesPage() {
  const [heroText, setHeroText] = useState('Welcome to Synergy');
  const [aboutText, setAboutText] = useState('We are a leading company...');
  const [serviceText, setServiceText] = useState('Our services include...');

  const handleSave = () => {
    // TODO: Save to db
    console.log('Save content:', { heroText, aboutText, serviceText });
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Content Management</h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
            <textarea
              value={heroText}
              onChange={(e) => setHeroText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">About Section</h2>
            <textarea
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Services Section</h2>
            <textarea
              value={serviceText}
              onChange={(e) => setServiceText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}