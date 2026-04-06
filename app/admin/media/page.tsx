'use client';

import { useEffect, useState } from 'react';

interface Service { id: string; title: string; description: string; image?: string; }
interface ContentData { services: { title: string; description: string; services: Service[] }; }

export default function MediaPage() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch('/api/content');
        const data = await res.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to load content', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  const handleImageChange = (index: number, url: string) => {
    if (!content) return;
    const updatedServices = [...content.services.services];
    updatedServices[index] = { ...updatedServices[index], image: url };
    setContent({ ...content, services: { ...content.services, services: updatedServices } });
  };

  const handleSaveImage = async (index: number) => {
    if (!content) return;
    const service = content.services.services[index];
    const imageUrl = service.image || `/images/${service.id}.jpg`;

    setSaving(service.id);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: `services.services.${index}.image`, value: imageUrl })
      });
      if (!res.ok) {
        throw new Error('Failed to save image URL');
      }
      alert(`Image saved for ${service.title}`);
    } catch (error) {
      console.error(error);
      alert('Unable to save image URL');
    } finally {
      setSaving(null);
    }
  };

  if (loading) {
    return <div className="p-6">Loading media...</div>;
  }

  if (!content) {
    return <div className="p-6">No content data found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Media Manager</h1>
      <p className="mb-6 text-gray-600">Edit the image path for each service below. When saved, the public service card will reflect the new image.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.services.services.map((service, index) => {
          const imageUrl = service.image || `/images/${service.id}.jpg`;
          return (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 rounded overflow-hidden bg-gray-100">
                <img src={imageUrl} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-sm text-gray-500 mb-4">Service ID: {service.id}</p>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                disabled={saving === service.id}
                onClick={() => handleSaveImage(index)}
                className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
              >
                {saving === service.id ? 'Saving...' : 'Save Image'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
