'use client';

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorPageProps) {
  const { error } = props;

  return <div>{error.message}</div>;
}
