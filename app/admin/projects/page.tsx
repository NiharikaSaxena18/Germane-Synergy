'use client';

export default function ProjectsPage() {
  const projects = [ // mock
    { id: 1, name: 'Project 1', status: 'active' },
    { id: 2, name: 'Project 2', status: 'completed' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p>Status: {project.status}</p>
            <a href={`/admin/projects/${project.id}`} className="text-blue-500">Edit</a>
          </div>
        ))}
      </div>
      <a href="/admin/projects/new" className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded">Add Project</a>
    </div>
  );
}