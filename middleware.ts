import { NextRequest, NextResponse } from 'next/server';
import { getIronSessionFromRequestResponse } from '@/src/hooks/server/getIronServerSession';
import refreshSessionIfNeeded from './src/hooks/server/refreshSessionIfNeeded';

export async function middleware(request: NextRequest) {
  let res = NextResponse.next();
  const session = await getIronSessionFromRequestResponse(request, res);

  if (Object.keys(session).length === 0) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  refreshSessionIfNeeded(session);
  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon*|login|manifest.webmanifest|manifest.json).*)',
  ],
};
