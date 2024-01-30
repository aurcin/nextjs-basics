import { getAllTasks } from '@/utils/db/tasks';

export default async function PrismaExamplePage() {
  const tasks = await getAllTasks();

  if (!tasks) {
    return (
      <main>
        <h1 className='text-7xl'>The task list is empty!</h1>
      </main>
    );
  }

  const renderTasks = tasks.map(item => {
    const { id, task } = item;
    return (
      <li key={id}>
        <h2 className='text-lg py-2'>{task}</h2>
      </li>
    );
  });

  return (
    <main>
      <h1 className='text-7xl'>Prisma Example</h1>
      <ul>{renderTasks}</ul>
    </main>
  );
}
