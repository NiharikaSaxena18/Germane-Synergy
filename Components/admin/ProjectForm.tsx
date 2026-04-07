'use client';
//Niharika
import { useState } from 'react';

export interface ProjectData {
  name: string;
  client: string;
  description: string;
  deadline: string;
  status: string;
}

interface ProjectFormProps {
  projectData: ProjectData;
  setProjectData: (data: ProjectData) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitButtonText: string;
}

export default function ProjectForm({ projectData, setProjectData, onSubmit, submitButtonText }: ProjectFormProps) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
          <input
            type="text"
            value={projectData.name}
            onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
          <input
            type="text"
            value={projectData.client}
            onChange={(e) => setProjectData({ ...projectData, client: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={projectData.description}
          onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
          <input
            type="date"
            value={projectData.deadline}
            onChange={(e) => setProjectData({ ...projectData, deadline: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select
            value={projectData.status}
            onChange={(e) => setProjectData({ ...projectData, status: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold"
        >
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}