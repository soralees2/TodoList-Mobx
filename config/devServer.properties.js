// ip
const loginServer = 'http://193.123.228.68:31232';
const userServer = 'http://193.123.228.68:31234';
const authServer = 'http://193.123.228.68:31231';
const fcmServer = 'http://193.123.228.68:31236';
const hesServer = 'http://211.110.11.99:18090';
const adminWebServer = 'http://193.123.228.68:31237';

const devServerProperties = {
  proxy: {
    '/api/gnd-hparty-login': {
      pathRewrite: { '^/api/gnd-hparty-login': '/api/gnd-hparty-login' },
      target: loginServer,
    },
    '/api/gnd-hparty-user': {
      pathRewrite: { '^/api/gnd-hparty-user': '/api/gnd-hparty-user' },
      target: userServer,
    },
    '/api/gnd-hparty-auth': {
      pathRewrite: { '^/api/gnd-hparty-auth': '/api/gnd-hparty-auth' },
      target: authServer,
    },
    '/api/gnd-hparty-fcm': {
      pathRewrite: { '^/api/gnd-hparty-fcm': '/api/gnd-hparty-fcm' },
      target: fcmServer,
    },
    '/api/energy-service': {
      pathRewrite: { '^/api/gnd-hparty-auth': '/api/energy-service' },
      target: adminWebServer,
    },
    '/green': {
      pathRewrite: { '^/green': '/green' },
      target: hesServer,
    },
  },
};

module.exports = devServerProperties;
