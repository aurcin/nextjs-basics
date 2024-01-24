import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-xl'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>Drinks page layout here!</code>
        </pre>
      </div>
      <div className='mt-8 mb-12'>
        <Link href={'/drinks'} className='btn btn-primary'>
          Back to drinks
        </Link>
      </div>
      {children}
    </div>
  );
}
