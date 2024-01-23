'use client';

import { useState } from 'react';

export default function ClientPage() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => (prev += 1));
  }

  function decrease() {
    setCount(prev => (prev -= 1));
  }

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>
      <button className='btn btn-primary' onClick={increase}>
        increase
      </button>
      <button className='btn btn-secondary ml-1' onClick={decrease}>
        decrease
      </button>
    </div>
  );
}
