export default function constructOidcLoginUrl() {
  switch (process.env.OIDC_TYPE) {
    case 'keycloak':
      return `${process.env.OIDC_ISSUER}/protocol/openid-connect/auth?client_id=${process.env.OIDC_CLIENT_ID}&redirect_uri=${process.env.OIDC_REDIRECT_URI}&response_type=code&scope=${process.env.OIDC_SCOPES}`;
    default:
      throw new Error('OIDC_TYPE not supported');
  }
}
