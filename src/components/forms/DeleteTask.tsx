import { deleteTaskAction } from '@/actions/task';

interface DeleteTaskProps {
  id: string;
}

export default function DeleteTask(props: DeleteTaskProps) {
  const { id } = props;

  return (
    <form action={deleteTaskAction}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-xs btn-error'>Delete</button>
    </form>
  );
}
