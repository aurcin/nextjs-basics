'use client';

import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

import { createTaskAction } from '@/actions/task';
import Button from '@/components/forms/SubbmitButton';

export default function TaskForm() {
  const [formState, action] = useFormState(createTaskAction, {
    success: true,
    message: '',
  });

  useEffect(() => {
    if (formState.message) {
      if (formState.success) {
        toast.success(formState.message);
      } else {
        toast.error(formState.message);
      }
    }
  }, [formState]);

  return (
    <form action={action}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />
        <Button>Create Task</Button>
      </div>
    </form>
  );
}
