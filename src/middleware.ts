// export function middleware() {
//   return Response.json({ message: 'hello there' });
// }

// to limit routes where middleware runs only (/about)
// export const config = {
//   matcher: '/about',
// };

import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  return NextResponse.redirect(new URL('/', request.url));
}

// redirects /about and /another-link to home
export const config = {
  matcher: ['/about/:path*', '/another-link/:path*'],
};
