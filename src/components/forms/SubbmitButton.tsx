'use client';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  children: React.ReactNode;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { children } = props;
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}>
      {pending ? 'Sending data' : children}
    </button>
  );
}
