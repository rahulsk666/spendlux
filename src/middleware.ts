import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Skip middleware for public assets and images
  if (request.nextUrl.pathname.startsWith('/_next') || 
      request.nextUrl.pathname.startsWith('/images') ||
      request.nextUrl.pathname.endsWith('.png') ||
      request.nextUrl.pathname.endsWith('.svg') ||
      request.nextUrl.pathname.endsWith('.ico')) {
    return NextResponse.next();
  }

  // Get the session token from cookies
  // const session = request.cookies.get('session')?.value;

  // If user is on login page and has a session, redirect to home
  // if (request.nextUrl.pathname === '/login' && session) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // // List of public routes that don't require authentication
  // const publicRoutes = ['/login'];
  
  // // If it's a public route, allow access
  // if (publicRoutes.includes(request.nextUrl.pathname)) {
  //   return NextResponse.next();
  // }

  // If there's no session, redirect to login
  // if (!session) {
  //   const loginUrl = new URL('/login', request.url);
  //   // Add the current URL as a redirect parameter
  //   loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  //   return NextResponse.redirect(loginUrl);
  // }

  // Create a response object
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 

