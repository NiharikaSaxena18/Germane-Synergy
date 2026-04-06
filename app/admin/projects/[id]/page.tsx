'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProjectForm from '../../../../Components/admin/ProjectForm';

interface Project {
  id: string;
  name: string;
  client: string;
  description: string;
  deadline: string;
  status: string;
}

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [projectNotFound, setProjectNotFound] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${params.id}`);
        if (res.ok) {
          setProjectData(await res.json());
        } else {
          setProjectNotFound(true);
        }
      } catch (error) {
        console.error('Failed to load project', error);
        setProjectNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectData) return;

    try {
      setSaving(true);
      const response = await fetch(`/api/projects/${projectData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });
      if (response.ok) {
        alert('Project updated successfully!');
        router.push('/admin/projects');
      } else {
        alert('Unable to update project');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Unable to update project');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (!projectData) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Project</h1>
      <ProjectForm
        projectData={projectData}
        setProjectData={setProjectData}
        onSubmit={handleSubmit}
        submitButtonText={saving ? 'Saving...' : 'Update Project'}
      />
    </div>
  );
}