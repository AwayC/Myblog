import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 导入 Bootstrap (如果您需要)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

// 导入 markdown-it 及其插件
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // 选择您喜欢的高亮主题样式

// --- 配置 MarkdownIt ---
const md = new MarkdownIt({
  html: true,        // 启用 HTML 标签解析
  linkify: true,     // 自动将 URL 转换为链接
  typographer: true, // 启用一些排版替换，如破折号、省略号等
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {
        console.error('Highlight.js error during highlight:', __);
      }
    }
    // 如果没有指定语言或高亮失败，返回原始代码
    return ''; // 返回空字符串，让 highlight.js 的 CSS 决定默认样式
  }
})
.use(MarkdownItAnchor, {
  // 配置标题锚点生成
  permalink: MarkdownItAnchor.permalink.ariaHidden({
    placement: 'before',
    symbol: '#',
  }),
  // slugify 函数与 VitePress 兼容，确保生成的 ID 一致性
  slugify: s => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-')),
});
// 你可以根据需要添加更多自定义容器，或配置渲染规则

// --- 自定义渲染规则：图片懒加载 ---
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  token.attrSet('loading', 'lazy'); // 添加 loading="lazy"
  return self.renderToken(tokens, idx, options);
};

const app = createApp(App);

// 将 markdown-it 实例作为全局属性挂载到 Vue 应用上
// 这样在任何组件中都可以通过 this.$markdown 访问它
app.config.globalProperties.$markdown = md;

app.use(router).mount('#app');