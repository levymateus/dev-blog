module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62e224722b2efb1ce5205041e7843fee'),
  },
});
