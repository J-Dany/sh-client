export default function constructOidcTokenUrl() {
  switch (process.env.OIDC_TYPE) {
    case 'keycloak':
      return `${process.env.OIDC_ISSUER}/protocol/openid-connect/token`;
    default:
      throw new Error('OIDC_TYPE not supported');
  }
}
