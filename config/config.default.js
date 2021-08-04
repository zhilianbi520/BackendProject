/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1628058706577_2735';

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };

  config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.view = {
    mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件
  };


  // add your middleware config here
  config.middleware = [];

  // 连接数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
          // 端口号
          port: '3306',
          // 用户名
          user: 'root',
          // 密码
          password: 'cheng5552621',
          // 数据库名
          database: 'diary',
    },
    // 是否加载到 app 上，默认开启
    app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
  }

  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: '127.0.0.1',
  //   port: 3306,
  //   database: 'egg-sequelize-doc-default',
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
