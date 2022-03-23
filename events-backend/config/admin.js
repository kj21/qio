module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5366321abd8f0147b8c3e141870f2bf3'),
  },
});
