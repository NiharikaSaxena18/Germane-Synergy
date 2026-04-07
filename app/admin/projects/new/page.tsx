'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectForm, { ProjectData } from '../../../../Components/admin/ProjectForm';

interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  deadline: string;
  status: string;
}

export default function NewProjectPage() {
  const router = useRouter();
  const [projectData, setProjectData] = useState<Project>({
    id: '',
    name: '',
    client: '',
    description: '',
    deadline: '',
    status: 'active'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });
      if (response.ok) {
        router.push('/admin/projects');
      } else {
        alert('Unable to create project');
      }
    } catch (error) {
      console.error('Create project error:', error);
      alert('Unable to create project');
    }
  };

  // Strip id before passing to form
  const { id, ...formData } = projectData;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Project</h1>
      <ProjectForm
        projectData={formData}
        setProjectData={(updated: ProjectData) => setProjectData({ ...updated, id })}
        onSubmit={handleSubmit}
        submitButtonText="Create Project"
      />
    </div>
  );
}