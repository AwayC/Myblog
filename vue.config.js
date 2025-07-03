const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // === 添加 publicPath 配置 ===
  // 生产环境部署到 GitHub Pages 时，使用仓库名作为基础路径
  // 比如你的仓库名叫 'my-vue-blog'，那就写 '/my-vue-blog/'
  // 注意，这里需要替换成你的实际仓库名，前后都要有斜杠
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MyBlog/' // <-- 将 'your-repository-name' 替换为你的 GitHub 仓库名称
    : './', // <-- 本地开发或直接打开dist/index.html时使用相对路径，方便预览

  // === 将 chainWebpack 放到同一个 defineConfig 对象中 ===
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  }
});