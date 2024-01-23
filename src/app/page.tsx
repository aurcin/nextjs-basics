import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1 className='text-7xl'>Home Page</h1>
      <Link href='/about' className='text-2xl'>
        About Page
      </Link>
    </main>
  );
}
