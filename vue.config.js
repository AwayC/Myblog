// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  outputDir: 'docs',

  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/posts': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/profile.json': {
        target: 'http://localhost:3000',
        changeOrigin: true
      },
      '/blogroll': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },

  chainWebpack: config => {
  }
});