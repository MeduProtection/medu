import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // Redirect l.meduprotection.com to main domain
  if (hostname.startsWith('l.meduprotection.com')) {
    return NextResponse.redirect(new URL('https://www.meduprotection.com', request.url));
  }

  // Redirect all blog routes to home page (thank you message)
  if (pathname.startsWith('/blog') || pathname.startsWith('/Blog')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
