export const JwtConfig = {
  tokenSecret: process.env.JWT_SECRET || 'token-scret',
  tokenExpiresIn: Number(process.env.JWT_EXPIRATION) || 86400,
};

export const AccessTokenConfig = {
  cookieExpiresIn: Number(process.env.ACCESSTOKEN_EXPIRATION) || 86400,
};

export const clientConfig = {
  clientURL: process.env.CLIENT_URL || 'http://localhost:8080',
};
