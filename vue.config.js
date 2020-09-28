module.exports = {
  publicPath: '/web',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://47.115.23.182/',
        changeOrigin: true
      }
    }
  }
}