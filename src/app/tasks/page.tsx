import TaskList from '@/components/task/List';
import TaskForm from '@/components/forms/Task';

export default function TasksPage() {
  return (
    <main className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </main>
  );
}
