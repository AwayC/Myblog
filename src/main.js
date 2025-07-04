import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保您的 router 导出是 default 导出

// 导入 Bootstrap (如果您需要)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // 选择您喜欢的高亮主题样式

// 配置 Marked.js 来使用 Highlight.js 进行代码高亮
marked.setOptions({
  // 这个前缀与 Highlight.js 期望的类名匹配
  langPrefix: 'hljs language-', 
  highlight: function(code, lang) {
    // 检查 Highlight.js 是否支持当前语言，如果不支持则使用纯文本
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    try {
      // 执行代码高亮
      return hljs.highlight(code, { language }).value;
    } catch (error) {
      // 捕获高亮过程中的任何错误
      console.error('Highlight.js error during highlight:', error);
      // 如果出错，返回原始代码
      return code;
    }
  }
});

createApp(App).use(router).mount('#app');
