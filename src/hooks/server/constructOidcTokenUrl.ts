export interface ConstructOidcTokenUrlProps {
  oidcType: string;
  oidcIssuer: string;
}

export default function constructOidcTokenUrl(
  { oidcType, oidcIssuer }: Partial<ConstructOidcTokenUrlProps> = {
    oidcType: process.env.OIDC_TYPE,
    oidcIssuer: process.env.OIDC_ISSUER,
  },
) {
  switch (oidcType) {
    case 'keycloak':
      return `${oidcIssuer}/protocol/openid-connect/token`;
    default:
      throw new Error('OIDC_TYPE not supported');
  }
}
