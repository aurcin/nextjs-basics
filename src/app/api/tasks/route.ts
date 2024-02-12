// only to demonstrate we still can use api and manage tasks using POSTMAN
// we fully handle tasks by using server actions, so this file serves as example
import { NextResponse } from 'next/server';

import { getAllTasks, createTask } from '@/utils/db/tasks';

export async function GET(_request: Request) {
  const tasks = await getAllTasks();

  return Response.json({ data: tasks });
}

export async function POST(request: Request) {
  const data = await request.json();
  const task = await createTask(data.content);

  return NextResponse.json({ data: task }); // more custom than Response, wraps Response inside
}
