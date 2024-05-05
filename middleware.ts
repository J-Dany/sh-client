import { NextRequest, NextResponse } from 'next/server';
import getIronsServerSession from '@/src/hooks/server/getIronServerSession';
import refreshSessionIfNeeded from './src/hooks/server/refreshSessionIfNeeded';

export async function middleware(request: NextRequest) {
  const session = await getIronsServerSession();

  if (Object.keys(session).length === 0) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  refreshSessionIfNeeded(session);

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon*|login|manifest.webmanifest|manifest.json).*)',
  ],
};
