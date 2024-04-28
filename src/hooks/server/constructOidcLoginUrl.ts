export interface ConstructOidcLoginUrlProps {
  oidcType: string;
  oidcIssuer: string;
  oidcClientId: string;
  oidcRedirectUri: string;
  oidcScopes: string;
}

export default function constructOidcLoginUrl(
  {
    oidcClientId,
    oidcIssuer,
    oidcRedirectUri,
    oidcScopes,
    oidcType,
  }: Partial<ConstructOidcLoginUrlProps> = {
    oidcClientId: process.env.OIDC_CLIENT_ID,
    oidcIssuer: process.env.OIDC_ISSUER,
    oidcRedirectUri: process.env.OIDC_REDIRECT_URI,
    oidcScopes: process.env.OIDC_SCOPES,
    oidcType: process.env.OIDC_TYPE,
  },
): string {
  switch (oidcType) {
    case 'keycloak':
      return `${oidcIssuer}/protocol/openid-connect/auth?client_id=${oidcClientId}&redirect_uri=${oidcRedirectUri}&response_type=code&scope=${oidcScopes}`;
    default:
      throw new Error('OIDC_TYPE not supported');
  }
}
