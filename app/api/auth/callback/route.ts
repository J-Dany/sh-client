import constructOidcTokenUrl from '@/src/hooks/server/constructOidcTokenUrl';
import { getIronSessionFromCookiesStore } from '@/src/hooks/server/getIronServerSession';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const oidcParams = new URLSearchParams(request.url.split('?')[1]);
  const code = oidcParams.get('code');
  const sessionState = oidcParams.get('session_state');

  const endpoint = constructOidcTokenUrl();
  const body = new URLSearchParams();
  body.append('grant_type', 'authorization_code');
  body.append('code', code!);
  body.append('client_id', process.env.OIDC_CLIENT_ID);
  body.append('client_secret', process.env.OIDC_CLIENT_SECRET);
  body.append('redirect_uri', process.env.OIDC_REDIRECT_URI ?? '');
  body.append('scope', process.env.OIDC_SCOPES ?? '');

  const data: any = await (
    await fetch(endpoint, {
      method: 'POST',
      body: body,
      headers: {
        Authorization: `Basic ${sessionState}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  ).json();

  console.log("data", data);

  const session = await getIronSessionFromCookiesStore(cookies());

  session.expiresAt = Date.now() + data.expires_in * 1000;
  session.accessToken = data.access_token;
  session.refreshToken = data.refresh_token;
  session.refreshExpiresAt = Date.now() + data.refresh_expires_in * 1000;

  await session.save();

  redirect('/');
}
