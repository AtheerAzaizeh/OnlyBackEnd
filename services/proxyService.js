const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'http://universities.hipolabs.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', 
  },
});

module.exports = { apiProxy };
