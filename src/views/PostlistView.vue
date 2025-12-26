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
        <div v-for='post in posts' :key="post.id" class="container" @click="openPost(post.id)">
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
              </postCard>  
          </div>
      </div>
      <div class="col-1">
        
      </div>
      <div class="footer" style='height: 100px'>
        <div class="copyright">
          © 2025 powered AWAY
        </div>
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
      };
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

        // 3. 图片加载完成后，隐藏 Loading，显示内容
        this.isLoading = false;

        // 4. 执行进场动画
        this.$nextTick(() => {
          gsap.from(".container", {
            duration: 0.8, 
            y: 50, 
            opacity: 0, 
            stagger: 0.15, 
            ease: "back.out(1.7)",
            delay: 0.1 
          }); 
        });

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