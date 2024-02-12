'use client';
import { useFormStatus } from 'react-dom';

import { deleteTaskAction } from '@/actions/task';

interface DeleteTaskProps {
  id: string;
}

export default function DeleteTask(props: DeleteTaskProps) {
  const { id } = props;
  const { pending } = useFormStatus();

  return (
    <form action={deleteTaskAction}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-xs btn-error' disabled={pending}>
        {pending ? 'Deleting..' : 'Delete'}
      </button>
    </form>
  );
}
