import getIronServerSession from '@/src/hooks/server/getIronServerSession';
import refreshSessionIfNeeded from '@/src/hooks/server/refreshSessionIfNeeded';

export async function GET() {
  const session = await getIronServerSession();

  refreshSessionIfNeeded(session);

  return new Response(
    JSON.stringify({
      accessToken: session.accessToken,
      expiresAt: session.expiresAt,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
