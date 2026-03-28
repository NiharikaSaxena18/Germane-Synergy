'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import AdminLayout from '../../../../Components/admin/AdminLayout';
import ProjectForm from '../../../../Components/admin/ProjectForm';

interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  deadline: string;
  status: string;
}

async function getProject(id: string): Promise<Project | null> {
  // TODO: Fetch from db
  const projects: Project[] = [
    { id: '1', name: 'Project A', client: 'Client X', description: 'Description A', deadline: '2023-12-01', status: 'active' }
  ];
  return projects.find(project => project.id === id) || null;
}

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProject(params.id).then((project) => {
      if (project) {
        setProjectData(project);
      } else {
        notFound();
      }
      setLoading(false);
    });
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Update project in db
    console.log('Update project:', projectData);
  };

  if (loading) return <AdminLayout><div className="p-6">Loading...</div></AdminLayout>;
  if (!projectData) return notFound();

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Project</h1>
        <ProjectForm
          projectData={projectData}
          setProjectData={setProjectData}
          onSubmit={handleSubmit}
          submitButtonText="Update Project"
        />
      </div>
    </AdminLayout>
  );
}