// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // 请再次确认这里的值
  // 生产环境：如果是 user/org page (AwayC.github.io)，这里应该是 '/'
  // 如果是 project page (AwayC.github.io/your-repo)，这里是 '/your-repo/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' 
    : './',

  outputDir: 'docs', 

  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
});