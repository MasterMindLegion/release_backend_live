module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c39906d7fab633f9ad354d2eb5203dee'),
  },
});
