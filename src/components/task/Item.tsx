import Link from 'next/link';

import DeleteTask from '@/components/forms/DeleteTask';
import { Task } from '@/utils/types';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem(props: TaskItemProps) {
  const { id, task, is_done } = props.task;
  return (
    <>
      <h2 className={`text-lg capitalize ${is_done ? 'line-through' : ''}`}>
        {task}
      </h2>
      <div className='flex gap-6 items-center'>
        <Link href={`/tasks/${id}`} className='btn btn-accent btn-xs'>
          Edit
        </Link>
        <DeleteTask id={id} />
      </div>
    </>
  );
}
