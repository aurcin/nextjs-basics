import { createTaskAction } from '@/actions/task';

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
        <button type='submit' className='btn btn-primary join-item'>
          Create task
        </button>
      </div>
    </form>
  );
}
