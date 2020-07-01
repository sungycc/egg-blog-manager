/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588595356064_3360';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'yongzi.511',
      database: 'blog',
    },
    app: true,
    agent: false,
  };

  config.jwt = {
    secret: 'sungy-blog',
  };

  config.security = {
    csrf: {
      enable: false,
      // ignoreJSON: true,
    },
    // domainWhiteList: '*',
  };

  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET',
  };

  config.static = {
    prefix: '/static',
    dir: path.join(appInfo.baseDir, 'app/public'),
    // dynamic: true,
    // preload: false,
    // maxAge: 31536000,
    // buffer: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
