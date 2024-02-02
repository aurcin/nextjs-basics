import TaskItem from '@/components/task/Item';
import { getAllTasks } from '@/utils/db/tasks';

export default async function TaskList() {
  const tasks = await getAllTasks();

  if (!tasks?.length || !tasks) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
  }

  const renderTasks = tasks.map(task => {
    return (
      <li
        key={task.id}
        className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'>
        <TaskItem task={task} />
      </li>
    );
  });

  return <ul className='mt-8'>{renderTasks}</ul>;
}
