import { IronSession } from 'iron-session';
import constructOidcTokenUrl from '@/src/hooks/server/constructOidcTokenUrl';

export default async function refreshSessionIfNeeded(
  session: IronSession<Shell.Session.Data>,
) {
  const acessTokenExpiresAt = session.expiresAt;

  if (Date.now() < acessTokenExpiresAt) {
    return;
  }

  // Refresh token
  const endpoint = constructOidcTokenUrl();

  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', session.refreshToken);
  params.append('client_id', process.env.OIDC_CLIENT_ID);

  const data = await (
    await fetch(endpoint, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  ).json();

  session.expiresAt = Date.now() + data.expires_in * 1000;
  session.accessToken = data.access_token;
  session.refreshToken = data.refresh_token;
  session.refreshExpiresAt = Date.now() + data.refresh_expires_in * 1000;

  await session.save();
}
