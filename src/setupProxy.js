const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Adjust this path according to needs
    createProxyMiddleware({
      target: 'http://localhost:3500', //  backend server URL
      changeOrigin: true,
    })
  );
};
