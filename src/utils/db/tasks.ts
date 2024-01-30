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

export async function updateTask(
  id: string,
  data: { text?: string; is_done?: boolean }
): Promise<Task[]> {
  const tasks = await db.task.update({
    where: {
      id,
    },
    data,
  });

  return tasks;
}

export async function deleteTask(id: string) {
  await db.task.delete({ where: { id } });
}
