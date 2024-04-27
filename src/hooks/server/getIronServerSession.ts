import { getIronSession, IronSession } from 'iron-session';
import { cookies } from 'next/headers';

export default async function getIronServerSession(
  ttl = 0,
): Promise<IronSession<Shell.Session.Data>> {
  return await getIronSession(cookies(), {
    password: process.env.IRON_PASSWORD,
    cookieName: process.env.IRON_COOKIE_NAME,
    cookieOptions: {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      ttl,
    },
  });
}
