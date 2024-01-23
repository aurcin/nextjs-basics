import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <h1 className='text-7xl'>About Page</h1>
      <Link href='/' className='text-2xl'>
        Home Page
      </Link>
    </main>
  );
}
