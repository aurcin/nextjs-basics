import type { Metadata } from 'next';

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
      {children}
    </div>
  );
}
