<template>
  <div class="row view-container">
    <!-- Loading Indicator -->
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
    </div>

    <div v-else class="row" style="width: 100%; margin: 0;">
      <div class="col-3">
          <infoCard class="info-card"></infoCard>
      </div>

      <div class="col-8">
        <div v-for='post in paginatedPosts' :key="post.id" class="container post-item" @click="openPost(post.id)">
              <postCard class="postCard">
                <template v-if="post.has_img" #has_img>
                  <img class='my-card-img' :src="getPostImage(post.img)" :alt="post.name">
                </template>

                <template #tags>
                  <tagBase v-for='tag in post.tags' :key="tag.name" :style="{backgroundColor: getTagColor(tag)}">
                    {{tag.name}}
                  </tagBase>
                </template>

                <template #header>
                  {{ post.name }}
                </template>

                {{ post.summary }}

                <template #time>
                  {{ post.time }}
                </template>

                <template #views>
                  {{ postStats[post.id] || 0 }} views
                </template>
              </postCard>  
          </div>

          <!-- Pagination -->
          <nav v-if="totalPages > 1" class="pagination-nav mt-4 mb-5 d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
              </li>
              <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                <button class="page-link" @click="changePage(page)">{{ page }}</button>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
              </li>
            </ul>
          </nav>
      </div>
      <div class="col-1">
        
      </div>
    </div>

  </div>
</template>

<script>
import postCard from '../components/postCard.vue'; 
import tagBase from '../components/tagBase.vue';
import infoCard from '../components/infoCard.vue';
import {gsap} from 'gsap'; 
import router from '@/router/index';

export default { 
    name: "PostlistView", 
    components: { 
        postCard, 
        tagBase, 
        infoCard,
    }, 
    data() {
      return {
        posts: [], 
        tagColorMap: {}, 
        isLoading: true,
        currentPage: 1,
        pageSize: 3,
        postStats: {},
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.posts.length / this.pageSize);
      },
      paginatedPosts() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.posts.slice(start, end);
      }
    },
    methods: {
      getPostImage(imagePath) {
        if (imagePath && typeof imagePath === 'string' && !imagePath.startsWith('http')) {
          return imagePath.replace(/^@\/posts\//, '/posts/');
        }
        return imagePath;
      },
      getTagColor(tag) { 
          return this.tagColorMap[tag.name] || this.tagColorMap['default']; 
      },
      preloadImages(posts) {
        const promises = posts.filter(post => post.has_img && post.img).map(post => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = this.getPostImage(post.img);
            img.onload = resolve;
            img.onerror = resolve; // 即使加载失败也继续，避免卡死
          });
        });
        return Promise.all(promises);
      },
      async fetchStats() {
        try {
          const baseUrl = process.env.VUE_APP_API_URL || 'http://localhost:3000';
          // 如果 baseUrl 已经以 /api 结尾，就不再加 /api
          const apiUrl = baseUrl.endsWith('/api') ? `${baseUrl}/stats` : `${baseUrl}/api/stats`;
          const response = await fetch(apiUrl);
          if (response.ok) {
            const stats = await response.json();
            const statsMap = {};
            stats.forEach(s => {
              statsMap[s.post_id] = s.views;
            });
            this.postStats = statsMap;
          }
        } catch (error) {
          console.error("Failed to fetch article stats:", error);
        }
      },
      changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.currentPage = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.animatePosts();
      },
      animatePosts() {
        this.$nextTick(() => {
          gsap.from(".post-item", {
            duration: 0.6, 
            y: 30, 
            opacity: 0, 
            stagger: 0.1, 
            ease: "power2.out"
          }); 
        });
      }
    },
    setup() { 
      const openPost = (id) => { 
        console.log(id); 
        router.push({name: 'post', params: {id}}); 
      }; 
      
      return {
        openPost, 
      }
    }, 
    async mounted() { 
      try {
        // 1. 并行加载数据
        const [postsResponse, tagMapResponse] = await Promise.all([
          fetch('/posts/list.json'),
          fetch('/tags/tagmap.json')
        ]);

        if (!postsResponse.ok) throw new Error(`Posts HTTP error! status: ${postsResponse.status}`);
        if (!tagMapResponse.ok) throw new Error(`Tags HTTP error! status: ${tagMapResponse.status}`);

        this.posts = await postsResponse.json();
        this.tagColorMap = await tagMapResponse.json();

        // 2. 预加载所有文章图片
        await this.preloadImages(this.posts);

        // 3. 统计阅读量
        await this.fetchStats();

        // 4. 图片加载完成后，隐藏 Loading，显示内容
        this.isLoading = false;

        // 5. 执行进场动画
        this.animatePosts();

      } catch (error) {
        console.error("加载数据失败:", error);
        this.isLoading = false; // 出错也要显示内容（虽然可能是空的）
      }
    }
}
</script>

<style scoped>
.view-container { 
    padding-top: 60px;
    min-height: 100vh; 
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(156, 197, 226, 0.3);
  border-top-color: #9cc5e2;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.container { 
    padding-top: 20px;
    padding-bottom: 15px; 
}

/* Pagination Styles */
.pagination-nav {
  margin-top: 2rem;
}

.page-link {
  background-color: rgba(37, 45, 56, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

.page-link:hover {
  background-color: rgba(90, 187, 198, 0.2);
  color: #5abbc6;
  border-color: #5abbc6;
}

.page-item.active .page-link {
  background-color: #5abbc6;
  border-color: #5abbc6;
  color: #1a1a1a;
}

.page-item.disabled .page-link {
  background-color: rgba(37, 45, 56, 0.3);
  color: #666;
  border-color: rgba(255, 255, 255, 0.05);
}

.postCard { 
    margin-top: 10px !important; 
}

.my-card-img { 
    object-fit: cover;
    max-height: 20vh;
}

.info-card {
  margin-left: 20px; 
  margin-top: 100px; 
  position: fixed;
  width: 25%; 
}

/* 手机端适配 */
@media (max-width: 768px) {
  .view-container {
    padding-top: 110px;
  }

  .col-3 {
    display: block; /* 显示包含 infoCard 的列 */
    width: 100%; /* 让列宽度占满屏幕 */
  }

  .col-8 {
    width: 100%; /* 内容区域占满屏幕 */
  }

  .col-1 {
    display: none; /* 隐藏空白列 */
  }

  .info-card {
    position: static;
    width: 100%;
    margin: 0;
  }

  .my-card-img {
    max-height: 15vh;
  }

  .container {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>