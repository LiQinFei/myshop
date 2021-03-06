'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_lqf';

  // add your config here
  config.middleware = [];

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        },
        // 白名单
        domainWhiteList: [ 'http://localhost:8088' ]
    };
    config.cors = {
         origin: '*',
         allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    config.multipart = {
        fileSize: '50mb',
    };
  config.view = {
      mapping: {
          '.ejs': 'ejs',
      }
  };

    config.mysql = {
            // 单数据库信息配置
            client: {
                // host
                host: '127.0.0.1',
                // 端口号
                port: '3306',
                // 用户名
                user: 'root',
                // 密码
                password: 'root',
                // 数据库名
                database: 'shop',
            },
            // 是否加载到 app 上，默认开启
            app: true,
            // 是否加载到 agent 上，默认关闭
            agent: false,
        };

  return config;
};
