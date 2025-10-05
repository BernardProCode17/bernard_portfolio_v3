import { NextResponse } from 'next/server';
import { fetchFunction, fetchProjectQuery } from '@/functions/fetchFunctions';

export async function GET() {
  try {
    const projects = await fetchFunction(fetchProjectQuery);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}