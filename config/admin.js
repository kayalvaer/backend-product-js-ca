module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fdab248ec04829f2d98319832e34de1a'),
  },
});
