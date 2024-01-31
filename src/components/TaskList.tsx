import Link from 'next/link';

import { getAllTasks } from '@/utils/db/tasks';
import DeleteTask from '@/components/forms/DeleteTask';

export default async function TaskList() {
  const tasks = await getAllTasks();

  if (!tasks?.length || !tasks) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
  }

  const renderTasks = tasks.map(item => {
    const { id, task, is_done } = item;
    return (
      <li
        key={id}
        className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
        <h2 className={`text-lg capitalize ${is_done ? 'line-through' : ''}`}>
          {task}
        </h2>
        <div className='flex gap-6 items-center'>
          <Link href={`/tasks/${id}`} className='btn btn-accent btn-xs'>
            Edit
          </Link>
          <DeleteTask id={id} />
        </div>
      </li>
    );
  });

  return <ul className='mt-8'>{renderTasks}</ul>;
}
