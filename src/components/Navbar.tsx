import Link from 'next/link';

interface NavbarProps {
  links: { href: string; label: string }[];
}

export default function Navbar(props: NavbarProps) {
  const { links } = props;

  const renderLinks = links.map(({ href, label }) => {
    return (
      <li key={href}>
        <Link href={href} className='capitalize'>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Next.js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>{renderLinks}</ul>
      </div>
    </nav>
  );
}
