// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/' 
    : './',

  outputDir: 'docs', 

  chainWebpack: config => {
    // 移除对 markdown 文件的 raw-loader 配置
    // config.module
    //   .rule('markdown')
    //   .test(/\.md$/)
    //   .use('raw-loader')
    //   .loader('raw-loader')
    //   .end();
  }
});