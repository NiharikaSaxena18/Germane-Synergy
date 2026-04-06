import { NextRequest, NextResponse } from 'next/server';
import { readData, writeData } from '../../../lib/db';

export async function GET() {
  try {
    const projects = readData<any>('projects');
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const projects = readData<any>('projects');
    const newProject = {
      id: Date.now().toString(),
      ...body,
    };
    projects.push(newProject);
    writeData('projects', projects);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
