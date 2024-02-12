'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { createTask, deleteTask, updateTask } from '@/utils/db/tasks';

const createTaskSchema = z.object({
  content: z.string().min(3, 'Minimum 3 letters'),
});

interface CreateTaskFormState {
  message: string;
  success: boolean;
}

export async function createTaskAction(
  _formState: CreateTaskFormState,
  formData: FormData
): Promise<CreateTaskFormState> {
  const content = formData.get('content');
  if (typeof content !== 'string' || !content?.length) {
    return { success: false, message: 'Bad content input' };
  }

  const result = createTaskSchema.safeParse({ content });
  if (!result.success) {
    return {
      success: false,
      message: result.error.flatten().fieldErrors.content?.join(', ') || '',
    };
  }

  try {
    await createTask(content);
  } catch (error: any) {
    return { success: false, message: 'error' };
  }

  revalidatePath('/tasks');
  return { success: true, message: 'success' };
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
