<template>
  <div class="post-view" v-if="post">
    <div class="head-margin"></div>
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

    <div class="main-content-layout">
      <div class="content-wrapper card">
        <div class="markdown-body" v-html="safeContent"></div>
        <div class="content-end">
          <hr>
        </div>
      </div>

      <aside class="toc-sidebar" v-if="headings.length > 0">
        <h3>内容导航</h3>
        <ul>
          <li v-for="heading in headings" :key="heading.id" 
              :class="{ 'active': activeHeadingId === heading.id, [`level-${heading.level}`]: true }">
            <a :href="`#${heading.id}`" @click.prevent="scrollToHeading(heading.id)">
              {{ heading.text }}
            </a>
          </li>
        </ul>
      </aside>
    </div>

    <div class="page-link row">
      <div class="col-5 pre-page" v-if="prevPost">
          <div class="card" @click="goToPost(prevPost.id)">
              <span class="arrow">←</span>
              <div class="page-label">上一篇</div>
              <div class="page-title">{{ prevPost.name }}</div>
          </div>
      </div>
      <div class="col-5 next-page" v-if="nextPost">
        <div class="card" @click="goToPost(nextPost.id)">
            <div class="page-label">下一篇</div>
            <div class="page-title">{{ nextPost.name }}</div>
            <span class="arrow">→</span>
        </div>
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
import typeWord from '../components/typeWord.vue';
import tagBase from '@/components/tagBase.vue';
import router from '@/router/index'; 

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
          posts: [], 
          tagColorMap: {}, 
          headings: [], // 存储解析出的标题
          activeHeadingId: null, // 当前激活的标题ID
          observer: null, // Intersection Observer 实例
          isScrolling: 0, 
          prevPost: null,
          nextPost: null,
        }
    },
    computed: {
      safeContent() {
            if (this.$markdown) { 
                return DOMPurify.sanitize(this.$markdown.render(this.postContent || ''));
            }
            return '';
      },
    },
    methods: {
      goToPost(postId) {
        console.log("Navigating to post:", postId);
        router.push({ name: 'post', params: {id: postId} }); // 确保 params 键是 id
      },
      getTagColor(tag) { 
          return this.tagColorMap[tag.name] || this.tagColorMap['default']; 
      },
      extractHeadings() {
        this.headings = [];
        this.$nextTick(() => {
          const contentContainer = this.$el.querySelector('.markdown-body');
          if (contentContainer) {
            contentContainer.querySelectorAll('h1[id], h2[id], h3[id], h4[id]').forEach(h => {
              const clonedH = h.cloneNode(true); 
              const anchor = clonedH.querySelector('.header-anchor');
              if (anchor) {
                anchor.remove(); 
              }
              this.headings.push({
                id: h.id,
                text: clonedH.textContent.trim(), 
                level: parseInt(h.tagName.substring(1)), 
              });
            });
            this.setupIntersectionObserver(); 
          }
        });
      },
      
      scrollToHeading(id) {
        const element = document.getElementById(id);
        if (element) {
          let offset = 385; // 导航栏高度 + 间距，根据您的实际 Navbar 调整
          
          this.isScrolling += 1; 
          window.scrollTo({
            top: element.offsetTop + offset, // 修正：改为减去偏移量
            behavior: 'smooth',
          });
          this.activeHeadingId = id;
          setTimeout(() => {
            this.isScrolling -= 1; 
          }, 550); 

        } else {
          console.warn('Element with ID not found:', id);
        }
      },
      setupIntersectionObserver() {
        if (this.observer) {
          this.observer.disconnect(); 
        }

        this.observer = new IntersectionObserver(

          (entries) => {
            if(this.isScrolling > 0) return; // 如果正在平滑滚动，暂停 Observer 自动更新

            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.activeHeadingId = entry.target.id;
              }
            });
          },
          {
            rootMargin: '-50% 0px -50% 0px', // 修正 rootMargin
            threshold: 0, 
          }
        );

        this.headings.forEach((heading) => {
          const el = document.getElementById(heading.id);
          if (el) {
            this.observer.observe(el);
          }
        });
      },
      
      async loadPostData(postId) {
        try {
          const postsResponse = await fetch('/posts/list.json'); 
          if (!postsResponse.ok) {
            throw new Error(`HTTP error! status: ${postsResponse.status}`);
          }
          this.posts = await postsResponse.json();

          const tagMapResponse = await fetch('/tags/tagmap.json'); 
          if (!tagMapResponse.ok) {
            throw new Error(`HTTP error! status: ${tagMapResponse.status}`);
          }
          this.tagColorMap = await tagMapResponse.json();

          const post = this.posts.find(p => p.id === Number(postId)); // 使用传入的 postId
          
          if (post && post.pagePath) {
            console.log('Loading markdown for:', post.pagePath); 
            const markdownResponse = await fetch(`/posts/${post.pagePath}.md`); 
            if (!markdownResponse.ok) {
              throw new Error(`HTTP error! status: ${markdownResponse.status}`);
            }
            this.post = post; 
            this.postContent = await markdownResponse.text();

            // 设置前后文章
            const currentPostIndex = this.posts.findIndex(p => p.id === post.id);
            this.prevPost = currentPostIndex > 0 ? this.posts[currentPostIndex - 1] : null;
            this.nextPost = currentPostIndex < this.posts.length - 1 ? this.posts[currentPostIndex + 1] : null;

            // 确保 DOM 更新后重新提取标题和设置 Observer
            this.$nextTick(() => {
              this.extractHeadings();
              // 由于页面内容变化，重新初始化 Intersection Observer
              if (this.observer) {
                this.observer.disconnect();
              }
              this.setupIntersectionObserver();
            });

          } else {
            router.push({name: "404"}); 
          }
        } catch (error) {
          console.error("加载文章或标签数据失败:", error);
          router.push({name: "404"}); 
        }
      },
    },
    watch: {
      '$route.params.id': {
        immediate: true, 
        handler(newId) {
          if (newId) {
            this.loadPostData(newId); 
          }
        }
      }
    },
    async mounted() {

      console.log('PostView mounted for ID:', this.$route.params.id);
      this.$nextTick(() => {
      });
    },
    beforeUnmount() {
      if (this.observer) {
        this.observer.disconnect();
      }
    }, 
}
</script>


<style scoped>

.page-link {
  height: 100px; 
  display: flex; 
  gap: 30px; 
  margin: 0 auto;
  width: 90%; 
  max-width: 1200px; 
  justify-content: space-between; 
}

.next-page {  
  height: 100%; 
  padding: 0; 
  display: flex; 
}

.pre-page {
  height: 100%; 
  padding: 0; 
  display: flex;
}

.next-page .card,
.pre-page .card {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #181c27; 
    padding: 20px;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(156, 197, 226, 0.3);
    transition: all 0.3s ease-in-out;
}

.next-page .card:hover,
.pre-page .card:hover {
    border-color: #585877;
    box-shadow: 0px 0px 10px #3c3f6d;
}

.next-page .page-label {
    text-align: right; /* 右对齐标签 */
}

.next-page .page-title {
    text-align: right; /* 右对齐标题 */
}

.page-label {
    color: #9cc5e2;
    font-size: 0.9em;
    margin-bottom: 8px;
}

.page-title {
    color: #e0e0e0;
    font-size: 1.1em;
    line-height: 1.6;
    max-height: 3em;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: hidden;
}

.arrow {
    position: absolute;
    color: #9cc5e2;
    font-size: 1.5em;
    top: 50%;
    transform: translateY(-65%);
    margin-bottom: 10%; 
}

.next-page .arrow {
    right: 20px;
}

.pre-page .arrow {
    left: 20px;
}

@media (max-width: 768px) {
    
    .page-title {
        font-size: 0.8em;
    }
}

.post-view { 
  padding-top: 50px; 
  box-shadow: 4px 4px 20px #101418;
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

/* 主内容区域布局 */
.main-content-layout {
  display: flex; /* 启用 Flexbox */
  justify-content: center; /* 水平居中 */
  gap: 30px; /* 内容区和导航区之间的间距 */
  margin: 0 auto;
  width: 90%; /* 控制整体宽度 */
  max-width: 1200px; /* 最大宽度，防止过宽 */
  padding-bottom: 50px; /* 底部留白 */
}

.content-wrapper {
  flex-grow: 1; /* 内容区占据剩余空间 */
  min-width: 0; /* 允许内容区根据内容缩小 */
  background-color: rgb(37, 45, 56); 
  box-shadow: 4px 4px 20px #101418;
  padding: 40px 60px 40px 60px;
  color: rgb(196, 198, 201);
}

.markdown-body ::v-deep {
  line-height: 1.7; 
  font-size: 16px; 
}

.markdown-body ::v-deep h1, 
.markdown-body ::v-deep h2, 
.markdown-body ::v-deep h3, 
.markdown-body ::v-deep h4, 
.markdown-body ::v-deep h5, 
.markdown-body ::v-deep h6 {
  position: relative; 
  color: #9cc5e2; /* 标题颜色 */
  margin-top: 1.5em; /* 标题顶部间距 */
  margin-bottom: 1em; /* 标题底部间距 */
  line-height: 1.3;
  font-weight: 600; /* 标题加粗 */
  padding-bottom: 0.3em; /* 增加一点内边距，配合下划线 */
  border-bottom: 1px solid rgba(156, 197, 226, 0.2); /* 标题下划线 */
}
.markdown-body ::v-deep h1 { font-size: 2.2em; }
.markdown-body ::v-deep h2 { font-size: 1.8em; }
.markdown-body ::v-deep h3 { font-size: 1.5em; }
.markdown-body ::v-deep h4 { font-size: 1.2em; }

.markdown-body ::v-deep p {
  margin-bottom: 1em; /* 段落底部间距 */
}

.markdown-body ::v-deep ul, .markdown-body ::v-deep ol {
  margin-bottom: 1em;
  padding-left: 2em; /* 列表左侧缩进 */
}

.markdown-body ::v-deep li {
  margin-bottom: 0.5em;
}

.markdown-body ::v-deep a {
  color: #007bff; /* 链接颜色 */
  text-decoration: none;
}

.markdown-body ::v-deep a:hover {
  text-decoration: underline;
}

.markdown-body ::v-deep pre {
  background-color: rgb(13, 13, 13); 
  border-radius: 6px;
  padding: 1em;
  overflow-x: auto; /* 水平滚动 */
  margin-bottom: 1.5em;
}

.markdown-body ::v-deep code {
  background-color: rgba(116, 143, 166, 0.2); /* 行内代码背景 */
  padding: 0.1em 0.2em;
  border-radius: 4px;
  font-family: 'Fira Code', 'Cascadia Code', monospace; /* 程序员字体 */
  font-size: 0.9em;
  color: #e0e0e0;
}

.markdown-body ::v-deep pre code {
    background-color: transparent; 
    padding: 0;
    border-radius: 0;
    font-size: 1em;
}

/* 标题锚点样式 */
.markdown-body ::v-deep .header-anchor {
  opacity: 0; 
  position: absolute; 
  left: -1.4em; 
  top: 10%; 
  padding-left: 0.5em;
  font-size: 0.8em; 
  text-decoration: none; 
  color: #a0a0a0; 
  transition: opacity 0.2s ease-in-out; 
  padding-right: 0.5em; 
}

/* 当鼠标悬停在标题上时，显示锚点 */
.markdown-body ::v-deep h1:hover .header-anchor, 
.markdown-body ::v-deep h2:hover .header-anchor, 
.markdown-body ::v-deep h3:hover .header-anchor, 
.markdown-body ::v-deep h4:hover .header-anchor, 
.markdown-body ::v-deep h5:hover .header-anchor, 
.markdown-body ::v-deep h6:hover .header-anchor {
  opacity: 1; 
}

/* 右侧导航栏样式 (这些不在 v-html 内部，通常不需要 ::v-deep) */
.toc-sidebar {
  width: 250px; 
  flex-shrink: 0; 
  position: sticky; 
  top: 80px; 
  height: auto; /* *** 修正：让高度根据内容自适应 *** */
  max-height: calc(100vh - 80px - 20px); /* *** 新增：最大高度，避免溢出，80px是top，20px是底部额外间距 *** */
  overflow-y: auto; 
  padding: 16px;
  margin-left: 20px; 
  background-color: rgb(37, 45, 56); 
  box-shadow: 4px 4px 20px #101418;
  border-radius: 8px; 
  color: rgb(196, 198, 201);
}

.toc-sidebar h3 {
  color: #9cc5e2;
  margin-top: 0;
  margin-bottom: 1em;
  font-size: 1.2em;
  border-bottom: 1px solid rgba(156, 197, 226, 0.2);
  padding-bottom: 0.5em;
}

.toc-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-sidebar li {
  margin-bottom: 8px;
}

.toc-sidebar a {
  text-decoration: none;
  color: rgb(196, 198, 201);
  display: block;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
}

.toc-sidebar a:hover {
  color: #83adda; 
  background-color: rgba(0, 123, 255, 0.1); 
}

/* 目录激活状态 */
.toc-sidebar li.active a {
  color: #83adda; 
  background-color: rgba(0, 123, 255, 0.25); 
  border-left: 4px solid #6a6ce1; 

}

/* 目录层级缩进 */
.toc-sidebar li.level-3 {
  padding-left: 15px;
}
.toc-sidebar li.level-4 {
  padding-left: 30px;
}

/* 媒体查询：适配小屏幕 */
@media (max-width: 768px) {
  .main-content-layout {
    width: 95%; 
    gap: 20px;
  }

  .content-wrapper {
    width: 100%; 
    padding: 20px; 
  }

  .toc-sidebar {
    display: none;
  }
  
}
</style>