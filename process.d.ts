declare namespace NodeJS {
  interface ProcessEnv {
    OIDC_TYPE: 'keycloak';
    OIDC_ISSUER: string;
    OIDC_CLIENT_ID: string;
    OIDC_CLIENT_SECRET: string;
    OIDC_SCOPES: string;
    OIDC_REDIRECT_URI: string;
    IRON_PASSWORD: string;
    IRON_COOKIE_NAME: string;
    SESSION_DEBUG_ROUTE: boolean;
    [key: string]: string | undefined;
  }
}
