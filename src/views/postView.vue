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
          isScrolling: 0, // 滚动锁，防止点击目录时触发滚动监听导致的高亮跳动
          prevPost: null,
          nextPost: null,
          scrollTimer: null, // 用于节流（可选，目前未启用，预留位置）
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
        router.push({ name: 'post', params: {id: postId} });
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
            
            // 初始化点击事件
            this.setupAnchorClickHandler();
            // 初始化一次高亮，防止页面刚加载时没有高亮
            this.handleScroll();
          }
        });
      },

      // *** 核心修改：处理滚动事件 ***
      handleScroll() {
        // 如果正在进行点击跳转的平滑滚动，则不执行自动检测
        if (this.isScrolling > 0) return;

        // "视觉基准线"：标题滚动到距离顶部 120px 处，算作“当前正在阅读”
        // 你可以根据你的 Header 高度调整这个值 (例如 100 - 200 之间)
        const scrollY = window.scrollY + 120; 

        let currentId = null;

        // 倒序遍历：找到最后一个 offsetTop 小于当前 scrollY 的标题
        for (let i = this.headings.length - 1; i >= 0; i--) {
            const heading = this.headings[i];
            const element = document.getElementById(heading.id);
            
            if (element && element.offsetTop <= scrollY) {
                currentId = heading.id;
                break; // 找到后立即停止
            }
        }

        // 边界处理：如果滚动到底部，强制高亮最后一个
        const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
        if (isBottom && this.headings.length > 0) {
            currentId = this.headings[this.headings.length - 1].id;
        }

        if (currentId) {
            this.activeHeadingId = currentId;
        } else if (this.headings.length > 0 && window.scrollY < 100) {
            // 如果在页面最顶部，高亮第一个
            this.activeHeadingId = this.headings[0].id;
        }
      },
      
      scrollToHeading(id) {
        const element = document.getElementById(id);
        if (element) {
          // 用户的原始偏移量，保持不变
          let offset = 385; 
          
          this.isScrolling += 1; // 加锁
          this.activeHeadingId = id; // 立即设置高亮，提供即时反馈

          window.scrollTo({
            top: element.offsetTop + offset,
            behavior: 'smooth',
          });
          
          // 滚动动画结束后解锁
          setTimeout(() => {
            this.isScrolling -= 1; 
          }, 600); 

        } else {
          console.warn('Element with ID not found:', id);
        }
      },
      
      setupAnchorClickHandler() {
        const contentContainer = this.$el.querySelector('.markdown-body');
        if (contentContainer) {
          if (this._anchorClickHandler) { 
              contentContainer.removeEventListener('click', this._anchorClickHandler);
          }

          this._anchorClickHandler = (event) => {
            const target = event.target;
            if (target.tagName === 'A' && target.getAttribute('href') && target.getAttribute('href').startsWith('#')) {
              event.preventDefault(); 
              const id = target.getAttribute('href').substring(1); 
              this.scrollToHeading(id); 
            }
          };
          contentContainer.addEventListener('click', this._anchorClickHandler);
        }
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

          const post = this.posts.find(p => p.id === Number(postId)); 
          
          if (post && post.pagePath) {
            console.log('Loading markdown for:', post.pagePath); 
            const markdownResponse = await fetch(`/posts/${post.pagePath}.md`); 
            if (!markdownResponse.ok) {
              throw new Error(`HTTP error! status: ${markdownResponse.status}`);
            }
            this.post = post; 
            this.postContent = await markdownResponse.text();

            const currentPostIndex = this.posts.findIndex(p => p.id === post.id);
            this.prevPost = currentPostIndex > 0 ? this.posts[currentPostIndex - 1] : null;
            this.nextPost = currentPostIndex < this.posts.length - 1 ? this.posts[currentPostIndex + 1] : null;

            this.$nextTick(() => {
              this.extractHeadings(); 
              this.processMarkdownEnhancements();
            });

          } else {
            router.push({name: "404"}); 
          }
        } catch (error) {
          console.error("加载文章或标签数据失败:", error);
          router.push({name: "404"}); 
        }
      },
      processMarkdownEnhancements() {
        const contentContainer = this.$el.querySelector('.markdown-body');
        if (!contentContainer) return;

        // Add Copy Buttons
        contentContainer.querySelectorAll('pre').forEach(pre => {
            if (pre.querySelector('.copy-btn')) return;
            
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
            
            btn.addEventListener('click', () => {
                const code = pre.querySelector('code');
                const text = code ? code.innerText : pre.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    btn.classList.add('copied');
                    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    setTimeout(() => {
                        btn.classList.remove('copied');
                        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
                    }, 2000);
                });
            });
            pre.appendChild(btn);
        });

        // Render GitHub Alerts
        contentContainer.querySelectorAll('blockquote').forEach(bq => {
            const firstP = bq.querySelector('p');
            if (!firstP) return;
            
            const text = firstP.textContent;
            const match = text.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
            
            if (match) {
                const type = match[1].toLowerCase();
                bq.classList.add('markdown-alert', `markdown-alert-${type}`);
                
                // Remove the marker
                firstP.innerHTML = firstP.innerHTML.replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s?/i, '');
                
                // Add title
                const titleDiv = document.createElement('div');
                titleDiv.className = 'markdown-alert-title';
                titleDiv.textContent = type.charAt(0).toUpperCase() + type.slice(1);
                bq.insertBefore(titleDiv, firstP);
            }
        });
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
    // *** 生命周期：挂载时添加滚动监听 ***
    async mounted() {
      console.log('PostView mounted for ID:', this.$route.params.id);
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    },
    // *** 生命周期：卸载前移除监听器 ***
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      
      const contentContainer = this.$el.querySelector('.markdown-body');
      if (contentContainer && this._anchorClickHandler) {
          contentContainer.removeEventListener('click', this._anchorClickHandler);
      }
    }, 
}
</script>

<style scoped>

.page-link {
  height: 100px; 
  display: flex; 
  /* gap: 30px;  可以保留，也可以去掉，因为我们下面会用宽度控制 */
  margin: 0 auto;
  width: 90%; 
  max-width: 1200px; 
  justify-content: space-between; /* 保持两端对齐 */
}

.pre-page {
  height: 100%; 
  padding: 0; 
  display: flex;
  width: 48%; /* 强制占用接近一半的宽度 */
  margin-right: auto; /* 确保它靠左（虽然通常默认就是靠左） */
}

.next-page {  
  height: 100%; 
  padding: 0; 
  display: flex; 
  width: 48%; /* 强制占用接近一半的宽度 */
  margin-left: auto; /* 【核心修改】：这一行会强制将它推到容器的最右边，即使没有上一篇 */
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
    text-align: right; 
}

.next-page .page-title {
    text-align: right; 
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

.main-content-layout {
  display: flex; 
  justify-content: center; 
  gap: 30px; 
  margin: 0 auto;
  width: 90%; 
  max-width: 1200px; 
  padding-bottom: 50px; 
}

.content-wrapper {
  flex-grow: 1; 
  min-width: 0; 
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
  color: #9cc5e2; 
  margin-top: 1.5em; 
  margin-bottom: 1em; 
  line-height: 1.3;
  font-weight: 600; 
  padding-bottom: 0.3em; 
  border-bottom: 1px solid rgba(156, 197, 226, 0.2); 
}
.markdown-body ::v-deep h1 { font-size: 2.2em; }
.markdown-body ::v-deep h2 { font-size: 1.8em; }
.markdown-body ::v-deep h3 { font-size: 1.5em; }
.markdown-body ::v-deep h4 { font-size: 1.2em; }

.markdown-body ::v-deep p {
  margin-bottom: 1em; 
}

.markdown-body ::v-deep ul, .markdown-body ::v-deep ol {
  margin-bottom: 1em;
  padding-left: 2em; 
}

.markdown-body ::v-deep li {
  margin-bottom: 0.5em;
}

.markdown-body ::v-deep a {
  color: #007bff; 
  text-decoration: none;
}

.markdown-body ::v-deep a:hover {
  text-decoration: underline;
}

.markdown-body ::v-deep pre {
  background-color: rgb(13, 13, 13); 
  border-radius: 6px;
  padding: 1em;
  overflow-x: auto; 
  margin-bottom: 1.5em;
  position: relative;
}

.markdown-body ::v-deep code {
  background-color: rgba(116, 143, 166, 0.2); 
  padding: 0.1em 0.2em;
  border-radius: 4px;
  font-family: 'Fira Code', 'Cascadia Code', monospace; 
  font-size: 0.9em;
  color: #e0e0e0;
}

.markdown-body ::v-deep pre code {
    background-color: transparent; 
    padding: 0;
    border-radius: 0;
    font-size: 1em;
}

.markdown-body ::v-deep .copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: #e0e0e0;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  opacity: 0;
}

.markdown-body ::v-deep pre:hover .copy-btn {
  opacity: 1;
}

.markdown-body ::v-deep .copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.markdown-body ::v-deep hr {
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: rgba(156, 197, 226, 0.2);
  border: 0;
}

/* GitHub Alerts */
.markdown-body ::v-deep .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-left: 0.25em solid;
  background-color: rgba(24, 28, 39, 0.5);
  border-radius: 6px;
}

.markdown-body ::v-deep .markdown-alert-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 14px;
}

.markdown-body ::v-deep .markdown-alert-note { border-color: #1f6feb; }
.markdown-body ::v-deep .markdown-alert-note .markdown-alert-title { color: #58a6ff; }
.markdown-body ::v-deep .markdown-alert-tip { border-color: #238636; }
.markdown-body ::v-deep .markdown-alert-tip .markdown-alert-title { color: #3fb950; }
.markdown-body ::v-deep .markdown-alert-important { border-color: #8957e5; }
.markdown-body ::v-deep .markdown-alert-important .markdown-alert-title { color: #a371f7; }
.markdown-body ::v-deep .markdown-alert-warning { border-color: #9e6a03; }
.markdown-body ::v-deep .markdown-alert-warning .markdown-alert-title { color: #d29922; }
.markdown-body ::v-deep .markdown-alert-caution { border-color: #da3633; }
.markdown-body ::v-deep .markdown-alert-caution .markdown-alert-title { color: #f85149; }

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

.markdown-body ::v-deep h1:hover .header-anchor, 
.markdown-body ::v-deep h2:hover .header-anchor, 
.markdown-body ::v-deep h3:hover .header-anchor, 
.markdown-body ::v-deep h4:hover .header-anchor, 
.markdown-body ::v-deep h5:hover .header-anchor, 
.markdown-body ::v-deep h6:hover .header-anchor {
  opacity: 1; 
}

.toc-sidebar {
  width: 250px; 
  flex-shrink: 0; 
  position: sticky; 
  top: 80px; 
  height: auto; 
  max-height: calc(100vh - 80px - 20px); 
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

.toc-sidebar li.active a {
  color: #83adda; 
  background-color: rgba(0, 123, 255, 0.25); 
  border-left: 4px solid #6a6ce1; 
}

.toc-sidebar li.level-3 {
  padding-left: 15px;
}
.toc-sidebar li.level-4 {
  padding-left: 30px;
}

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