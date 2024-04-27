import { NextResponse } from 'next/server';
import constructOidcLoginUrl from '@/src/hooks/server/constructOidcLoginUrl';
import getIronsServerSession from '@/src/hooks/server/getIronServerSession';
import refreshSessionIfNeeded from './src/hooks/server/refreshSessionIfNeeded';

export async function middleware() {
  const session = await getIronsServerSession();

  if (Object.keys(session).length === 0) {
    return NextResponse.redirect(constructOidcLoginUrl());
  }

  refreshSessionIfNeeded(session);

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
