<template>
  <div class="post-view" v-if="post">
    
    <div class="header-container">
      <div class="title">
        <typeWord>
          <h1>
            {{ post.name }}
          </h1>
        </typeWord>
      </div>
      <div class="date">
        <span class="calender">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
            <circle cx="18" cy="18" r="4"></circle>
            <path d="M15 3v4"></path>
            <path d="M7 3v4"></path>
            <path d="M3 11h16"></path>
            <path d="M18 16.496v1.504l1 1"></path>
            </svg>
        </span>
        <span class="time">{{ post.time }}</span>
      </div>
      <div class='tags'>
        <tagBase v-for='tag in post.tags' :key="tag.name" :style="{backgroundColor: getTagColor(tag)}">
          {{tag.name}}
        </tagBase>

      </div>
    </div>

    <div class="content-container card">
      <div v-html="safeContent"></div>
      <div class="content-end">
        <hr>
      </div>
    </div>
    <div class="footer" style='height: 100px'>
      <div class="copyright">
        © 2025 powered AWAY
      </div>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';
import { posts, getTagColor } from '../posts/list.js';
import typeWord from '../components/typeWord.vue';
import tagBase from '@/components/tagBase.vue';
import { router } from '@/router/index'; 
import { marked } from 'marked'; 

import hljs from 'highlight.js'; // 导入 highlight.js
import 'highlight.js/styles/github-dark.css'; // 导入高亮样式

export default {
    name: 'postView', 
    components: { 
      typeWord, 
      tagBase,
    },
    data() {
        return {
          postContent: null, 
          post: null, 
          getTagColor, 
        }
    },
    computed: {
      safeContent() {
            // === 关键修改：直接在 parse 时传入 options ===
            marked.setOptions({ // 再次设置，确保万无一失，或者直接在这里定义并传入
                langPrefix: 'hljs language-', // highlight.js 的类名前缀
                highlight: function(code, lang) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                    try {
                        return hljs.highlight(code, { language }).value;
                    } catch (error) {
                        console.error('Highlight.js error:', error);
                        return code;
                    }
                }
            });
            // 或者更直接地传入选项到 parse 方法 (marked v4.0.0+ 支持)
            // return DOMPurify.sanitize(marked.parse(this.postContent || '', {
            //     langPrefix: 'hljs language-',
            //     highlight: function(code, lang) {
            //         const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            //         try {
            //             return hljs.highlight(code, { language }).value;
            //         } catch (error) {
            //             console.error('Highlight.js error:', error);
            //             return code;
            //         }
            //     }
            // }));
            // === 结束修改 ===

            // 使用 marked 将 Markdown 转换为 HTML 后再进行净化
            return DOMPurify.sanitize(marked.parse(this.postContent || ''));
      },
    },
    async mounted() {
        const post = posts.find(p => p.id === Number(this.$route.params.id)); 
        if (post?.pagePath) {
          console.log(post.pagePath); 
          const contentModule = await import(`../posts/${post.pagePath}.md`); 
          this.post = post; 
          console.log(this.post); 
          this.postContent = contentModule.default; 
        } else {
          router.push({name: "404"}); 
        }
    }
}
</script>

<style scoped>
.post-view { 
  padding-top: 50px; 
  background-color: #181c27;
}

.header-container { 
  margin-top: 150px; 
  margin-bottom: 150px; 
  text-align: center;
  color: #e0e0e0; 
}

.title { 
  color: #9cc5e2;
}

.date { 
  margin-top: 10px; 
}

.calender { 
  margin: 10px; 
}

.calender svg { 
  transform: translateY(-2px);
}

.content-container { 
  color: rgb(196, 198, 201); 
  margin: 0 auto; 
  width: 70%; 
  background-color: rgb(37, 45, 56); 
  box-shadow: 4px 4px 20px #101418;
  padding: 40px 60px 40px 60px; 
}

/* --- 代码块和行内代码的基础样式 (保持不变) --- */
.content-container pre {
    background-color: #2b2b2b;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    line-height: 1.5;
}

.content-container code {
    font-family: 'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace; 
    font-size: 0.9em;
}

.content-container p code {
    background-color: rgba(118, 118, 128, 0.24);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    white-space: nowrap;
}
</style>