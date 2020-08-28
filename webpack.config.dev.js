const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})