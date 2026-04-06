'use client';

import { useState, useEffect } from 'react';

export default function PagesPage() {
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      setContent(data);
    } catch (error) {
      console.error('Failed to fetch content');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (path: string, value: string) => {
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, value }),
      });
      if (res.ok) {
        // Update local state
        const keys = path.split('.');
        const newContent = { ...content };
        let current = newContent;
        for (let i = 0; i < keys.length - 1; i++) {
          current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setContent(newContent);
      }
    } catch (error) {
      console.error('Failed to update');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Content Management</h1>

      {/* Services Page */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Services Page</h2>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <label className="block text-sm font-medium mb-2">Page Title</label>
          <textarea
            value={content.services?.title || ''}
            onChange={(e) => setContent({ ...content, services: { ...content.services, title: e.target.value } })}
            onBlur={(e) => handleUpdate('services.title', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <label className="block text-sm font-medium mb-2">Page Description</label>
          <textarea
            value={content.services?.description || ''}
            onChange={(e) => setContent({ ...content, services: { ...content.services, description: e.target.value } })}
            onBlur={(e) => handleUpdate('services.description', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          {content.services?.services?.map((service: any, index: number) => (
            <div key={service.id} className="mb-4 p-4 border border-gray-200 rounded">
              <div className="mb-2">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => {
                    const newServices = [...content.services.services];
                    newServices[index].title = e.target.value;
                    setContent({ ...content, services: { ...content.services, services: newServices } });
                  }}
                  onBlur={(e) => handleUpdate(`services.services.${index}.title`, service.title)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={service.description}
                  onChange={(e) => {
                    const newServices = [...content.services.services];
                    newServices[index].description = e.target.value;
                    setContent({ ...content, services: { ...content.services, services: newServices } });
                  }}
                  onBlur={(e) => handleUpdate(`services.services.${index}.description`, service.description)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}