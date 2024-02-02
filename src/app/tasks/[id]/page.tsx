import { notFound } from 'next/navigation';
import Link from 'next/link';

import EditTaskForm from '@/components/forms/EditTask';
import { getTask } from '@/utils/db/tasks';

interface TaskEditPageProps {
  params: {
    id: string;
  };
}

export default async function TaskEditPage(props: TaskEditPageProps) {
  const { id } = props.params;

  const task = await getTask(id);

  if (!task) {
    return notFound();
  }

  return (
    <div className='mb-16'>
      <Link href='/tasks' className='btn btn-accent mb-4'>
        Back to tasks
      </Link>
      <EditTaskForm task={task} />
    </div>
  );
}
