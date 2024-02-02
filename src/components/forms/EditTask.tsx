import { editTaskAction } from '@/actions/task';
import { Task } from '@/utils/types';

interface EditTaskProps {
  task: Task;
}

export default async function EditTaskForm(props: EditTaskProps) {
  const { task, id, is_done } = props.task;
  return (
    <form
      action={editTaskAction}
      className='max-w-sm p-12 border border-base-300 rounded-lg'>
      <input hidden type='text' name='id' value={id} />
      <input
        defaultValue={task}
        type='text'
        className='input input-bordered w-full'
        placeholder='type here'
        name='content'
        required
      />
      <div className='form-control my-4'>
        <label htmlFor='done' className='label cursor-pointer'>
          <span className='label-text'>completed</span>
          <input
            type='checkbox'
            defaultChecked={is_done}
            id='done'
            name='done'
            className='checkbox checkbox-primary checbox-sm'
          />
        </label>
      </div>

      <button type='submit' className='btn btn-primary btn-sm'>
        Edit
      </button>
    </form>
  );
}
