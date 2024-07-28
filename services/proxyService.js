const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware({
  target: 'http://universities.hipolabs.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/universities': '',
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  }
});

module.exports = { apiProxy };
