'use client';

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Services</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Service Content</label>
          <textarea className="w-full p-2 border rounded" rows={10} />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}