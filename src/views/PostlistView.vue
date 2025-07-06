<template>
  <div class="row view-container">
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
        // 更新路径: 从 public/posts/posts.json 加载
        const postsResponse = await fetch('/posts/list.json'); 
        if (!postsResponse.ok) {
          throw new Error(`HTTP error! status: ${postsResponse.status}`);
        }
        console.log(postsResponse);
        this.posts = await postsResponse.json();

        // 更新路径: 从 public/tags/tagmap.json 加载
        const tagMapResponse = await fetch('/tags/tagmap.json'); 
        if (!tagMapResponse.ok) {
          throw new Error(`HTTP error! status: ${tagMapResponse.status}`);
        }
        this.tagColorMap = await tagMapResponse.json();

        this.$nextTick(() => {
          gsap.from(".container", {
            duration: 0.8, 
            y: 50, 
            opacity: 0, 
            stagger: 0.15, 
            ease: "back.out(1.7)",
            delay: 0.3
          }); 
        });
      } catch (error) {
        console.error("加载数据失败:", error);
      }
    }
}
</script>

<style scoped>
.view-container { 
    padding-top: 60px;
}

.container { 
    padding-top: 20px;
    padding-bottom: 15px; 
}

.postCard { 
    margin-bottom: 10px !important; 
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
</style>