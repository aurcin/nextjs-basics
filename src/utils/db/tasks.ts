import db from '@/utils/db/db';
import { Task } from '@/utils/types';

export async function createTask(text: string) {
  await db.task.create({
    data: {
      task: text,
    },
  });
}

export async function getAllTasks(): Promise<Task[]> {
  const tasks = await db.task.findMany({
    orderBy: {
      created_at: 'desc',
    },
  });

  return tasks;
}

export async function getTask(id: string) {
  return await db.task.findUnique({ where: { id } });
}

export async function updateTask(
  id: string,
  data: { task?: string; is_done?: boolean }
): Promise<Task[]> {
  const task = await db.task.update({
    where: {
      id,
    },
    data,
  });

  return task;
}

export async function deleteTask(id: string) {
  await db.task.delete({ where: { id } });
}
