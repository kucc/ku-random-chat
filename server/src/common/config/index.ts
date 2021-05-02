export const JwtConfig = {
  tokenSecret: process.env.JWT_SECRET || 'token-scret',
  tokenExpiresIn: Number(process.env.JWT_EXPIRATION) || 86400,
};
