'use server';

import { revalidatePath } from 'next/cache';

import { createTask, deleteTask, updateTask } from '@/utils/db/tasks';
import { redirect } from 'next/navigation';

export async function createTaskAction(formData: FormData) {
  const content = formData.get('content');
  if (typeof content !== 'string' || !content?.length) {
    return;
  }

  const task = await createTask(content);

  revalidatePath('/tasks');
}

export async function editTaskAction(formData: FormData) {
  const content = formData.get('content');
  const isDone = formData.get('done');
  const id = formData.get('id');

  if (typeof content !== 'string' || !content?.length) {
    return;
  }

  if (typeof id !== 'string' || !id?.length) {
    return;
  }

  await updateTask(id, {
    task: content,
    is_done: isDone === 'on',
  });

  revalidatePath('/tasks');
  revalidatePath(`/tasks/${id}`);

  redirect('/tasks');
}

export async function deleteTaskAction(formData: FormData) {
  const id = formData.get('id');
  if (typeof id !== 'string' || !id?.length) {
    return;
  }

  await deleteTask(id);

  revalidatePath('/tasks');
}
