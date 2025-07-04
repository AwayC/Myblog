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
import hljs from 'highlight.js'; // 这里仍然需要导入 hljs，因为你在 watch 和 mounted 中直接调用了 hljs.highlightElement

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
            // Marked.js 的配置应该已经在 main.js 中全局完成
            return DOMPurify.sanitize(marked.parse(this.postContent || ''));
      },
    },
    watch: {
        postContent(newContent) { 
            if (newContent) { 
                this.$nextTick(() => {
                    console.log('postContent updated, attempting to highlight elements via nextTick');
                    document.querySelectorAll('.content-container pre code').forEach((block) => {
                        hljs.highlightElement(block);
                    });
                });
            }
        }
    },
    async mounted() {
        const post = posts.find(p => p.id === Number(this.$route.params.id)); 
        if (post?.pagePath) {
          console.log(post.pagePath); 
          const contentModule = await import(`../posts/${post.pagePath}.md`); 
          this.post = post; 
          this.postContent = contentModule.default; 

          // 初次加载时也需要高亮
          this.$nextTick(() => {
              console.log('Mounted, attempting to highlight elements');
              document.querySelectorAll('.content-container pre code').forEach((block) => {
                  hljs.highlightElement(block);
              });
          });

        } else {
          router.push({name: "404"}); 
        }
    }
}
</script>

<style scoped>
/* 你的样式保持不变 */
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




</style>