import { getIronSession, IronSession } from 'iron-session';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import type { NextRequest, NextResponse } from 'next/server';

const options = {
  password: process.env.IRON_PASSWORD,
  cookieName: process.env.IRON_COOKIE_NAME,
  cookieOptions: {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  },
};

/**
 * @param request next request
 * @param res next response
 * @returns writable iron session
 */
export async function getIronSessionFromRequestResponse(
  request: NextRequest,
  res: NextResponse,
): Promise<IronSession<Shell.Session.Data>> {
  return await getIronSession(request, res, options);
}

/**
 * @param cookieStore `cookies()` from next/headers
 * @returns readonly iron session
 */
export async function getIronSessionFromCookiesStore(
  cookieStore: ReadonlyRequestCookies,
): Promise<IronSession<Shell.Session.Data>> {
  return await getIronSession(cookieStore, options);
}
