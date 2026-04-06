'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  status: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          setProjects(await res.json());
        }
      } catch (error) {
        console.error('Failed to load projects', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full bg-white p-4 rounded shadow">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="col-span-full bg-white p-4 rounded shadow">No projects found.</div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p>Status: {project.status}</p>
              <Link href={`/admin/projects/${project.id}`} className="text-blue-500">Edit</Link>
            </div>
          ))
        )}
      </div>
      <Link href="/admin/projects/new" className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded">Add Project</Link>
    </div>
  );
}