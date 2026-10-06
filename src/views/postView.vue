<template>
  <div class="post-page">
    <!-- 阅读进度 -->
    <div class="read-progress" aria-hidden="true">
      <i :style="{ transform: `scaleX(${readProgress})` }"></i>
    </div>

    <div class="post-view" v-if="post">
      <!-- ============ HERO ============ -->
      <header class="header-container">
        <div class="post-eyebrow">
          <router-link to="/Postlist" class="back-link roll-host">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            <RollText text="Journal" />
          </router-link>
          <span class="post-eyebrow-line"></span>
          <span class="post-eyebrow-num" v-high="{ key: post.id }">N° {{ String(post.id).padStart(2, '0') }}</span>
        </div>

        <div class="title">
          <h1 v-high="{ key: post.id, delay: 120 }">
            {{ post.name }}
          </h1>
        </div>

        <p v-if="post.summary" class="post-lead" v-high="{ color: 'soft', key: post.id, delay: 300 }">
          <span class="ui-serif">“</span>{{ post.summary }}<span class="ui-serif">”</span>
        </p>

        <!-- 像原站 On Track 页的数据格 -->
        <div class="post-cells">
          <div class="cell">
            <span class="cell-label" v-high="{ key: post.id, delay: 380 }">Published</span>
            <span class="cell-value">{{ post.time }}</span>
          </div>
          <div class="cell">
            <span class="cell-label" v-high="{ key: post.id, delay: 450 }">Reading</span>
            <span class="cell-value">{{ readingMinutes }}<small>min</small></span>
          </div>
          <div class="cell">
            <span class="cell-label" v-high="{ key: post.id, delay: 520 }">Words</span>
            <span class="cell-value">{{ wordCount }}</span>
          </div>
          <div class="cell views">
            <span class="cell-label" v-high="{ key: post.id, delay: 590 }">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="13" height="13" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="2" />
                <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
              </svg>
              Views
            </span>
            <span class="cell-value">{{ views }}</span>
          </div>
          <div class="cell cell-tags">
            <span class="cell-label" v-high="{ key: post.id, delay: 660 }">Tags</span>
            <div class='tags'>
              <tagBase v-for='tag in post.tags' :key="tag.name" :style="{backgroundColor: getTagColor(tag)}">
                {{tag.name}}
              </tagBase>
            </div>
          </div>
        </div>

        <figure v-if="coverSrc" class="post-cover">
          <img :src="coverSrc" :alt="post.name">
          <figcaption>
            <span>Cover</span>
            <span>{{ postYear }}</span>
          </figcaption>
        </figure>
      </header>

      <!-- ============ 正文 ============ -->
      <div class="main-content-layout">
        <aside class="post-rail">
          <div class="rail-mark">
            <span class="rail-num">{{ String(post.id).padStart(2, '0') }}</span>
            <span class="rail-year">{{ postYear }}</span>
          </div>
          <div class="rail-progress">
            <span class="ui-eyebrow" v-high="{ key: post.id }">Progress</span>
            <span class="rail-pct">{{ Math.round(readProgress * 100) }}<small>%</small></span>
          </div>
        </aside>

        <article class="content-wrapper">
          <div class="markdown-body" v-html="safeContent"></div>
          <div class="content-end">
            <span class="end-mark"></span>
            <span class="ui-eyebrow" v-high="{ key: post.id }">End of transmission</span>
            <span class="end-mark"></span>
          </div>
        </article>

        <aside class="toc-sidebar" v-if="headings.length > 0">
          <h3 v-high="{ key: post.id }"><span>内容导航</span><span class="toc-en">Contents</span></h3>
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

      <!-- ============ 结尾 ============ -->
      <section class="post-outro">
        <h2 class="outro-statement" v-high="{ key: post.id }">
          <span class="o-sans">Thanks for</span>
          <span class="o-serif">reading</span><span class="o-sans">.</span>
        </h2>

        <div class="post-nav">
          <div class="pre-page" v-if="prevPost">
            <div class="card" @click="goToPost(prevPost.id)">
              <span class="arrow">←</span>
              <div class="page-label" v-high="{ key: post.id }">上一篇 / Previous</div>
              <div class="page-title">{{ prevPost.name }}</div>
            </div>
          </div>
          <div class="next-page" v-if="nextPost">
            <div class="card" @click="goToPost(nextPost.id)">
              <div class="page-label" v-high="{ key: post.id }">下一篇 / Next</div>
              <div class="page-title">{{ nextPost.name }}</div>
              <span class="arrow">→</span>
            </div>
          </div>
        </div>

        <router-link to="/Postlist" class="outro-back roll-host">
          <RollText text="All posts" />
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17L17 7M9 7h8v8" /></svg>
        </router-link>
      </section>
    </div>

    <div v-else class="post-loading">
      <div class="ui-spinner"></div>
    </div>
  </div>
</template>

<script>
import DOMPurify from 'dompurify';
import tagBase from '@/components/tagBase.vue';
import router from '@/router/index'; 
import { highlight, release } from '@/directives/highlight';

export default {
    name: 'postView', 
    components: { 
      tagBase,
    },
    data() {
        return {
          postContent: null, 
          post: null, 
          posts: [], 
          tagColorMap: {}, 
          headings: [], 
          activeHeadingId: null, 
          isScrolling: 0, 
          prevPost: null,
          nextPost: null,
          scrollTimer: null, 
          views: 0,
          readProgress: 0,
        }
    },
    computed: {
      // ---- 以下只用于页面展示，不改变任何数据 ----
      wordCount() {
        const text = (this.postContent || '').replace(/```[\s\S]*?```/g, ' ').replace(/[#>*`_\-[\]()!|]/g, ' ');
        const cjk = (text.match(/[\u4e00-\u9fff]/g) || []).length;
        const latin = (text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) || []).length;
        return cjk + latin;
      },
      readingMinutes() {
        return Math.max(1, Math.round(this.wordCount / 350));
      },
      coverSrc() {
        if (!this.post || !this.post.has_img || !this.post.img || this.post.has_img === 'False') return '';
        return String(this.post.img).replace(/^@\/posts\//, '/posts/');
      },
      postYear() {
        const m = String((this.post && this.post.time) || '').match(/\d{4}/);
        return m ? m[0] : '';
      },
      safeContent() {
            if (this.$markdown) {
                let html = this.$markdown.render(this.postContent || '');
                // 替换 @/posts/ 路径为 /posts/ 确保图片能显示
                html = html.replace(/(src|href)="@\/posts\//g, '$1="/posts/');
                return DOMPurify.sanitize(html);
            }
            return '';
      },
    },
    methods: {
      onProgressScroll() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.readProgress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      },
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
            
            this.setupAnchorClickHandler();
            this.handleScroll();
          }
        });
      },

      handleScroll() {
        if (this.isScrolling > 0) return;

        const scrollY = window.scrollY + 120; 

        let currentId = null;

        for (let i = this.headings.length - 1; i >= 0; i--) {
            const heading = this.headings[i];
            const element = document.getElementById(heading.id);
            
            if (element && element.getBoundingClientRect().top + window.scrollY <= scrollY) {
                currentId = heading.id;
                break; 
            }
        }

        const isBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
        if (isBottom && this.headings.length > 0) {
            currentId = this.headings[this.headings.length - 1].id;
        }

        if (currentId) {
            this.activeHeadingId = currentId;
        } else if (this.headings.length > 0 && window.scrollY < 100) {
            this.activeHeadingId = this.headings[0].id;
        }
      },
      
      scrollToHeading(id) {
        const element = document.getElementById(id);
        if (element) {
          const offset = 110; // 固定导航的高度
          
          this.isScrolling += 1; 
          this.activeHeadingId = id; 

          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - offset,
            behavior: 'smooth',
          });
          
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
          const baseUrl = process.env.VUE_APP_API_URL || '';
          const apiRoot = baseUrl.endsWith('/api') ? baseUrl : `${baseUrl}/api`;

          // 并行加载文章详情、标签、列表
          const [postResponse, tagMapResponse, postsResponse] = await Promise.all([
            fetch(`${apiRoot}/posts/${postId}`),
            fetch(`${apiRoot}/tags`),
            fetch(`${apiRoot}/posts`),
          ]);

          if (!tagMapResponse.ok) throw new Error(`Tags HTTP error! status: ${tagMapResponse.status}`);
          if (!postsResponse.ok) throw new Error(`Posts HTTP error! status: ${postsResponse.status}`);
          if (!postResponse.ok) {
            router.push({ name: '404' });
            return;
          }

          this.tagColorMap = await tagMapResponse.json();
          this.posts = await postsResponse.json();

          const post = await postResponse.json();

          if (post && post.pagePath) {
            console.log('Loading post:', post.name);

            // 阅读量统计
            const viewUrl = baseUrl.endsWith('/api') ? `${baseUrl}/view/${post.id}` : `${baseUrl}/api/view/${post.id}`;
            fetch(viewUrl, { method: 'POST' })
              .then(res => res.json())
              .then(data => {
                if (data && data.views) {
                  this.views = data.views;
                }
              })
              .catch(err => console.error("Failed to update view count:", err));

            this.post = post;
            this.postContent = post.content || '';

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

        // 正文标题也用原站的色块刷出
        (this._highEls || []).forEach(release);
        this._highEls = [...contentContainer.querySelectorAll('h2, h3')];
        this._highEls.forEach((h) => highlight(h));

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

            // 代码块左上角标出语言
            const code = pre.querySelector('code');
            const lang = code && (code.className.match(/language-([\w+#-]+)/) || [])[1];
            if (lang && !pre.querySelector('.code-lang')) {
                const label = document.createElement('span');
                label.className = 'code-lang';
                label.textContent = lang;
                pre.appendChild(label);
            }
        });

        const alertIcons = {
            note: '<svg class="octicon octicon-info" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>',
            tip: '<svg class="octicon octicon-light-bulb" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>',
            important: '<svg class="octicon octicon-report" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.75.75 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>',
            warning: '<svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>',
            caution: '<svg class="octicon octicon-stop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>'
        };

        contentContainer.querySelectorAll('blockquote').forEach(bq => {
            const firstP = bq.querySelector('p');
            if (!firstP) return;
            
            const text = firstP.textContent;
            const match = text.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
            
            if (match) {
                const type = match[1].toLowerCase();
                bq.classList.add('markdown-alert', `markdown-alert-${type}`);
                
                firstP.innerHTML = firstP.innerHTML.replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s?/i, '');
                
                const titleDiv = document.createElement('div');
                titleDiv.className = 'markdown-alert-title';
                if (alertIcons[type]) {
                    titleDiv.innerHTML = alertIcons[type];
                }
                titleDiv.innerHTML += type.charAt(0).toUpperCase() + type.slice(1);
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
    async mounted() {
      console.log('PostView mounted for ID:', this.$route.params.id);
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      window.addEventListener('scroll', this.onProgressScroll, { passive: true });
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.onProgressScroll);
      (this._highEls || []).forEach(release);
      
      const contentContainer = this.$el.querySelector('.markdown-body');
      if (contentContainer && this._anchorClickHandler) {
          contentContainer.removeEventListener('click', this._anchorClickHandler);
      }
    }, 
}
</script>


<style scoped>
.post-page {
  min-height: 100vh;
}

.post-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

/* ---------- 阅读进度 ---------- */
.read-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 1000;
  pointer-events: none;
}

.read-progress i {
  display: block;
  height: 100%;
  background: var(--c-accent);
  box-shadow: 0 0 12px var(--c-accent);
  transform-origin: left center;
  transform: scaleX(0);
}

.post-view {
  padding: var(--nav-h) 28px 0;
}

/* ---------- HERO ---------- */
.header-container {
  max-width: 1320px;
  margin: 40px auto 80px;
  color: var(--c-ink);
}

.post-eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 36px;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 12px;
  border: 1px solid var(--c-line-strong);
  border-radius: 8px;
  color: var(--c-ink-2);
  text-decoration: none;
  transition: all 0.3s var(--ease-out);
}

.back-link:hover {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.back-link:hover svg {
  transform: translateX(-3px);
}

.back-link svg {
  transition: transform 0.3s var(--ease-out);
}

.post-eyebrow-line {
  flex: 1;
  height: 1px;
  background: var(--c-line-strong);
}

.post-eyebrow-num {
  color: var(--c-accent);
}

.title {
  color: var(--c-ink);
}

.title h1 {
  margin: 0;
  max-width: 1150px;
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: clamp(2.6rem, 6.4vw, 6.2rem);
  line-height: 1;
  letter-spacing: -0.035em;
  text-transform: uppercase;
}

.post-lead {
  max-width: 760px;
  margin: 30px 0 0;
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  line-height: 1.6;
  color: var(--c-ink-2);
}

.post-lead .ui-serif {
  color: var(--c-accent);
  font-size: 1.6em;
  line-height: 0;
  vertical-align: -0.2em;
  margin: 0 2px;
}

/* 数据格 */
.post-cells {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) minmax(0, 1.6fr);
  margin-top: 48px;
  border-top: 1px solid var(--c-line-strong);
  border-bottom: 1px solid var(--c-line-strong);
}

.cell {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  min-height: 108px;
  padding: 14px 18px 16px;
  border-left: 1px solid var(--c-line);
}

.cell:first-child {
  border-left: 0;
  padding-left: 0;
}

.cell-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--f-sans);
  font-weight: 700;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.cell-value {
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: clamp(1.3rem, 2.4vw, 2.2rem);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--c-ink);
  font-variant-numeric: tabular-nums;
}

.cell-value small {
  margin-left: 4px;
  font-family: var(--f-serif);
  font-style: italic;
  font-weight: 400;
  font-size: 0.6em;
  color: var(--c-accent);
  letter-spacing: 0;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  margin: 0 -0.2em;
}

/* 封面 */
.post-cover {
  position: relative;
  margin: 40px 0 0;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--c-line-strong);
}

.post-cover img {
  display: block;
  width: 100%;
  max-height: 62vh;
  object-fit: cover;
  filter: none;
  transition: filter 0.8s ease;
}

.post-cover:hover img {
  filter: none;
}

.post-cover figcaption {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 12px;
  display: flex;
  justify-content: space-between;
  font-family: var(--f-mono);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  mix-blend-mode: difference;
}

/* ---------- 正文三栏 ---------- */
.main-content-layout {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) 250px;
  gap: 40px;
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.post-rail {
  position: sticky;
  top: 110px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.rail-mark {
  display: flex;
  flex-direction: column;
}

.rail-num {
  font-family: var(--f-sans);
  font-weight: 900;
  font-stretch: 125%;
  font-size: 4.6rem;
  line-height: 0.8;
  letter-spacing: -0.05em;
  color: var(--c-bg);
  filter:
        drop-shadow(1px 0 0 rgba(242, 240, 233, 0.35))
        drop-shadow(-1px 0 0 rgba(242, 240, 233, 0.35))
        drop-shadow(0 1px 0 rgba(242, 240, 233, 0.35))
        drop-shadow(0 -1px 0 rgba(242, 240, 233, 0.35));
}

.rail-year {
  margin-top: 8px;
  font-family: var(--f-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  color: var(--c-accent);
}

.rail-progress {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 14px;
  border-top: 1px dashed var(--c-line-strong);
}

.rail-pct {
  font-family: var(--f-sans);
  font-weight: 800;
  font-size: 2rem;
  line-height: 1;
  color: var(--c-ink);
  font-variant-numeric: tabular-nums;
}

.rail-pct small {
  font-size: 0.5em;
  color: var(--c-ink-3);
}

.content-wrapper {
  min-width: 0;
  max-width: 780px;
  color: var(--c-ink-2);
}

.content-end {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 56px;
}

.end-mark {
  flex: 1;
  height: 1px;
  background: var(--c-line-strong);
}

/* ---------- Markdown ---------- */
.markdown-body {
  line-height: 1.85;
  font-size: 16.5px;
  counter-reset: h2;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5),
.markdown-body :deep(h6) {
  position: relative;
  color: var(--c-ink);
  font-family: var(--f-sans);
  margin-top: 2em;
  margin-bottom: 0.7em;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.015em;
  scroll-margin-top: 110px;
}

.markdown-body :deep(h1:first-child),
.markdown-body :deep(h2:first-child),
.markdown-body :deep(h3:first-child) {
  margin-top: 0;
}

.markdown-body :deep(h1) { font-size: 2.1em; }
.markdown-body :deep(h2) { font-size: 1.7em; padding-top: 0.6em; border-top: 1px solid var(--c-line-strong); }
.markdown-body :deep(h3) { font-size: 1.32em; }
.markdown-body :deep(h4) { font-size: 1.1em; }

/* h2 自动编号，像原站的 RND.18 */
.markdown-body :deep(h2) {
  counter-increment: h2;
}

.markdown-body :deep(h2)::before {
  content: 'RND.' counter(h2, decimal-leading-zero);
  display: block;
  margin-bottom: 10px;
  font-family: var(--f-mono);
  font-size: 0.42em;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--c-accent);
}

.markdown-body :deep(h3)::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 12px;
  border-radius: 2px;
  background: var(--c-accent);
  transform: translateY(-3px) rotate(45deg);
}

.markdown-body :deep(p) {
  margin-bottom: 1.2em;
}

.markdown-body :deep(strong) {
  color: var(--c-ink);
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  margin-bottom: 1.2em;
  padding-left: 1.5em;
}

.markdown-body :deep(li) {
  margin-bottom: 0.45em;
}

.markdown-body :deep(li::marker) {
  color: var(--c-accent);
}

.markdown-body :deep(a) {
  color: var(--c-accent);
  text-decoration: underline;
  text-decoration-color: rgba(255, 128, 0, 0.35);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.25s;
}

.markdown-body :deep(a:hover) {
  text-decoration-color: var(--c-accent);
}

.markdown-body :deep(img) {
  max-width: 100%;
  border-radius: 10px;
  border: 1px solid var(--c-line);
}

/* 引用：大号衬线，像原站的 “Message from Lando” */
.markdown-body :deep(blockquote:not(.markdown-alert)) {
  position: relative;
  margin: 2em 0;
  padding: 0.2em 0 0.2em 1.4em;
  border-left: 2px solid var(--c-accent);
  font-family: var(--f-serif);
  font-style: italic;
  font-size: 1.45em;
  line-height: 1.35;
  color: var(--c-ink);
}

.markdown-body :deep(blockquote p:last-child) {
  margin-bottom: 0;
}

.markdown-body :deep(table) {
  width: 100%;
  margin-bottom: 1.4em;
  border-collapse: collapse;
  font-size: 0.92em;
}

.markdown-body :deep(th),
.markdown-body :deep(td) {
  padding: 10px 12px;
  border-bottom: 1px solid var(--c-line-strong);
  text-align: left;
}

.markdown-body :deep(th) {
  font-family: var(--f-sans);
  font-size: 0.75em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-ink-3);
}

.markdown-body :deep(pre) {
  background-color: #0a0a08;
  border: 1px solid var(--c-line-strong);
  border-radius: 12px;
  padding: 2.4em 1.2em 1.2em;
  overflow-x: auto;
  margin-bottom: 1.6em;
  position: relative;
}

.markdown-body :deep(.code-lang) {
  position: absolute;
  top: 10px;
  left: 14px;
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-accent);
}

.markdown-body :deep(code) {
  background-color: rgba(255, 128, 0, 0.1);
  padding: 0.12em 0.36em;
  border-radius: 4px;
  font-family: var(--f-mono);
  font-size: 0.86em;
  color: var(--c-accent-soft);
}

.markdown-body :deep(pre code) {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  font-size: 0.9em;
  line-height: 1.65;
  color: #e6e1d6;
}

.markdown-body :deep(.copy-btn) {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(20, 20, 17, 0.9);
  border: 1px solid var(--c-line-strong);
  border-radius: 6px;
  color: var(--c-ink-2);
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  opacity: 0;
}

.markdown-body :deep(pre:hover .copy-btn) {
  opacity: 1;
}

.markdown-body :deep(.copy-btn:hover),
.markdown-body :deep(.copy-btn.copied) {
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.markdown-body :deep(hr) {
  height: 1px;
  padding: 0;
  margin: 36px 0;
  background-color: var(--c-line-strong);
  border: 0;
  opacity: 1;
}

/* GitHub Alerts */
.markdown-body :deep(.markdown-alert) {
  padding: 0.8rem 1.1rem;
  margin-bottom: 1.2rem;
  border: 1px solid var(--c-line-strong);
  border-left: 3px solid;
  background-color: rgba(242, 240, 233, 0.025);
  border-radius: 4px 10px 10px 4px;
}

.markdown-body :deep(.markdown-alert-title) {
  display: flex;
  align-items: center;
  font-family: var(--f-mono);
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.markdown-body :deep(.markdown-alert-title svg) {
  margin-right: 8px;
}

.markdown-body :deep(.markdown-alert-note) { border-left-color: #4c8dff; }
.markdown-body :deep(.markdown-alert-note .markdown-alert-title) { color: #79a8ff; }
.markdown-body :deep(.markdown-alert-tip) { border-left-color: #3fb950; }
.markdown-body :deep(.markdown-alert-tip .markdown-alert-title) { color: #5fd471; }
.markdown-body :deep(.markdown-alert-important) { border-left-color: var(--c-accent); }
.markdown-body :deep(.markdown-alert-important .markdown-alert-title) { color: var(--c-accent); }
.markdown-body :deep(.markdown-alert-warning) { border-left-color: #d29922; }
.markdown-body :deep(.markdown-alert-warning .markdown-alert-title) { color: #e3b341; }
.markdown-body :deep(.markdown-alert-caution) { border-left-color: #f85149; }
.markdown-body :deep(.markdown-alert-caution .markdown-alert-title) { color: #ff7b72; }

.markdown-body :deep(.header-anchor) {
  opacity: 0;
  position: absolute;
  left: -1.2em;
  bottom: 0;
  padding: 0 0.4em;
  font-size: 0.8em;
  text-decoration: none;
  color: var(--c-accent);
  transition: opacity 0.2s ease-in-out;
}

.markdown-body :deep(h1:hover .header-anchor),
.markdown-body :deep(h2:hover .header-anchor),
.markdown-body :deep(h3:hover .header-anchor),
.markdown-body :deep(h4:hover .header-anchor),
.markdown-body :deep(h5:hover .header-anchor),
.markdown-body :deep(h6:hover .header-anchor) {
  opacity: 1;
}

/* ---------- 目录 ---------- */
.toc-sidebar {
  position: sticky;
  top: 110px;
  align-self: start;
  max-height: calc(100vh - 140px);
  overflow-y: auto;
  padding-left: 18px;
  border-left: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
}

.toc-sidebar h3 {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 14px;
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--c-ink);
}

.toc-en {
  font-family: var(--f-mono);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-accent);
}

.toc-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-sidebar li {
  margin-bottom: 2px;
}

.toc-sidebar a {
  position: relative;
  display: block;
  padding: 5px 0;
  font-size: 0.84rem;
  line-height: 1.4;
  text-decoration: none;
  color: var(--c-ink-3);
  transition: color 0.2s, transform 0.3s var(--ease-out);
}

.toc-sidebar a:hover {
  color: var(--c-ink);
  transform: translateX(3px);
}

.toc-sidebar li.active a {
  color: var(--c-accent);
}

.toc-sidebar li.active a::before {
  content: '';
  position: absolute;
  left: -19px;
  top: 4px;
  bottom: 4px;
  width: 2px;
  background: var(--c-accent);
  box-shadow: 0 0 8px var(--c-accent);
}

.toc-sidebar li.level-3 {
  padding-left: 12px;
}

.toc-sidebar li.level-4 {
  padding-left: 24px;
}

/* ---------- 结尾 ---------- */
.post-outro {
  max-width: 1320px;
  margin: 60px auto 0;
  padding-top: 70px;
  border-top: 1px solid var(--c-line);
}

.outro-statement {
  margin: 0 0 50px;
  font-size: clamp(3rem, 9vw, 8.6rem);
  line-height: 0.85;
  color: var(--c-ink);
}

.o-sans {
  font-family: var(--f-sans);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.035em;
}

.o-serif {
  font-family: var(--f-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--c-accent);
  margin-left: 0.18em;
}

.post-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.next-page {
  grid-column: 2;
}

.pre-page .card,
.next-page .card {
  position: relative;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 76px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--c-line-strong);
  border-radius: 14px;
  background: rgba(17, 17, 14, 0.9);
  color: var(--c-ink);
  transition: border-color 0.4s var(--ease-out), background 0.4s var(--ease-out);
}

.pre-page .card:hover,
.next-page .card:hover {
  border-color: var(--c-accent);
  background: rgba(255, 128, 0, 0.06);
}

.next-page .page-label,
.next-page .page-title {
  text-align: right;
}

.page-label {
  font-family: var(--f-mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  margin-bottom: 10px;
}

.page-title {
  font-weight: 800;
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.3s;
}

.card:hover .page-title {
  color: var(--c-accent);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid var(--c-line-strong);
  color: var(--c-ink-2);
  font-size: 1.1rem;
  transition: all 0.4s var(--ease-out);
}

.card:hover .arrow {
  background: var(--c-accent);
  border-color: var(--c-accent);
  color: var(--c-accent-ink);
}

.pre-page .arrow { left: 18px; }
.next-page .arrow { right: 18px; }

.outro-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 46px;
  margin-top: 34px;
  padding: 0 18px 0 20px;
  border-radius: 10px;
  background: var(--c-accent);
  color: var(--c-accent-ink);
  font-weight: 800;
  font-size: 0.84rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s, box-shadow 0.4s;
}

.outro-back:hover {
  color: var(--c-accent-ink);
  background: var(--c-accent-soft);
  box-shadow: 0 12px 40px var(--c-accent-glow);
}

/* ---------- 响应式 ---------- */
@media (max-width: 1200px) {
  .main-content-layout {
    grid-template-columns: minmax(0, 1fr) 240px;
  }

  .post-rail {
    display: none;
  }
}

@media (max-width: 900px) {
  .post-cells {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .cell {
    border-left: 0;
    padding-left: 0;
    border-bottom: 1px solid var(--c-line);
    min-height: 88px;
  }

  .cell-tags {
    grid-column: 1 / -1;
    border-bottom: 0;
  }

  .main-content-layout {
    grid-template-columns: 1fr;
  }

  .toc-sidebar {
    display: none;
  }
}

@media (max-width: 640px) {
  .post-view {
    padding: var(--nav-h) 16px 0;
  }

  .post-nav {
    grid-template-columns: 1fr;
  }

  .next-page {
    grid-column: 1;
  }

  .pre-page .card,
  .next-page .card {
    padding: 16px 16px 16px 72px;
  }

  .next-page .card {
    padding: 16px 72px 16px 16px;
  }
}
</style>
