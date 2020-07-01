'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt, } = app;
  router.get('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.register);

  router.get('/api/article/', jwt, controller.user.register);
};
