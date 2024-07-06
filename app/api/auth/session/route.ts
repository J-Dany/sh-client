import { getIronSessionFromCookiesStore } from '@/src/hooks/server/getIronServerSession';
import { cookies } from 'next/headers';

export async function GET() {
  if (!process.env.SESSION_DEBUG_ROUTE) {
    return new Response('', { status: 404 });
  }

  const session = await getIronSessionFromCookiesStore(cookies());
  return new Response(
    JSON.stringify({
      ...session,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
