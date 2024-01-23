import Link from 'next/link';

export default function InfoPage() {
  return (
    <main>
      <h1 className='text-7xl'>Info Page</h1>
      <Link href='/' className='text-2xl'>
        Home Page
      </Link>
    </main>
  );
}
