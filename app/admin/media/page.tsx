'use client';

import { useState } from 'react';
import AdminLayout from '../../../Components/admin/AdminLayout';

export default function MediaPage() {
  const [uploadedImages, setUploadedImages] = useState([
    { id: '1', name: 'image1.jpg', url: '/images/image1.jpg', size: '2.5MB' },
  ]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: Upload to server and add to list
      console.log('Upload file:', file.name);
    }
  };

  const handleDelete = (id: string) => {
    setUploadedImages(uploadedImages.filter(img => img.id !== id));
    // TODO: Delete from server
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Media Manager</h1>
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedImages.map((image) => (
            <div key={image.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={image.url} alt={image.name} className="w-full h-32 object-cover rounded mb-2" />
              <p className="text-sm font-medium">{image.name}</p>
              <p className="text-xs text-gray-500">{image.size}</p>
              <div className="mt-2 flex justify-between">
                <button className="text-blue-600 hover:text-blue-900 text-sm">Copy URL</button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="text-red-600 hover:text-red-900 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}