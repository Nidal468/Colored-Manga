import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import data from '@/public/data/user.json';

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  
  const currentUrl = new URL(request.url);
  const user = data.find((userData: any) => userData.token === token?.value);

  // Define an array of paths where redirection is not needed
  const allowedPaths = ['/admin'];
  const loginPaths = ['/auth/login', '/auth/sign-up']
  const userToken = token?.value || 'string';
  if (user && userToken) {
    if (user?.token === userToken && loginPaths.includes(currentUrl.pathname)) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
    if (user?.token !== userToken && allowedPaths.includes(currentUrl.pathname)) {
      return NextResponse.rewrite(new URL('/auth/login' || 'auth/sign-up', request.url))
    }
  } else if (allowedPaths.includes(currentUrl.pathname)) {
    return NextResponse.rewrite(new URL('/auth/login' || 'auth/sign-up', request.url))
  }
}

export const config = {
  matcher: ['/auth/login', '/', '/manga', '/manga/chapter', '/manga/chapter/reader', '/auth/sign-up', '/admin'],
};
