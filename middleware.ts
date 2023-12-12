import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import data from '@/public/data/user.json';

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  console.log('Token:', token);

  const currentUrl = new URL(request.url);
  const user = data.find((userData: any) => userData.token === token?.value);
  console.log('User Token:', user?.token);

  // Define an array of paths where redirection is not needed
  const allowedPaths = ['/', '/manga', '/manga/chapter', '/manga/chapter/reader'];
  const loginPaths = ['/auth/login', '/auth/sign-up']
  const userToken = token?.value || 'string';
  console.log("token", userToken)
  if (user && userToken) {
    if (user?.token === userToken && loginPaths.includes(currentUrl.pathname)) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
    if (user?.token !== userToken && allowedPaths.includes(currentUrl.pathname)) {
      return NextResponse.rewrite(new URL('/auth/login' || 'auth/sign-up', request.url))
    }
  } 
}

export const config = {
  matcher: ['/auth/login', '/', '/manga', '/manga/chapter', '/manga/chapter/reader', '/auth/sign-up'],
};
