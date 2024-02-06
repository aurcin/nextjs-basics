import { createTaskAction } from '@/actions/task';

import Button from '@/components/forms/SubbmitButton';

export default async function TaskForm() {
  return (
    <form action={createTaskAction}>
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
