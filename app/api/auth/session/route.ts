import getIronServerSession from '@/src/hooks/server/getIronServerSession';

export async function GET() {
  if (!process.env.SESSION_DEBUG_ROUTE) {
    return new Response('Not Found', { status: 404 });
  }

  const session = await getIronServerSession();
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
