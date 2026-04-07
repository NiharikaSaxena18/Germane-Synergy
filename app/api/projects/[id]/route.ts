import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '../../../../lib/db';

type Params = Promise<{ id: string }>;

export async function GET(
  request: NextRequest,
  context: { params: Params }
) {
  const { id } = await context.params;

  try {
    const projects = readData<any>('projects');
    const project = projects.find((item) => item.id === id);

    if (!project)
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    return NextResponse.json(project);
  } catch {
    return NextResponse.json({ error: 'Failed to read project' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: Params }
) {
  const { id } = await context.params;

  try {
    const body = await request.json();
    const projects = readData<any>('projects');
    const index = projects.findIndex((item) => item.id === id);

    if (index === -1)
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });

    const updatedProject = { ...projects[index], ...body };
    projects[index] = updatedProject;

    writeData('projects', projects);

    return NextResponse.json(updatedProject);
  } catch {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Params }
) {
  const { id } = await context.params;

  try {
    const projects = readData<any>('projects');
    const updatedProjects = projects.filter((item) => item.id !== id);

    writeData('projects', updatedProjects);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}