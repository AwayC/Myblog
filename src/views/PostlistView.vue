<template>

  <div class="row view-container">
    <div class="col-3">
        <infoCard class="info-card"></infoCard>
    </div>

    <div class="col-8">
      <div v-for='post in posts' :key="post.id" class="container" @click="openPost(post.id)">
            <postCard class="postCard">
              <template v-if="post.has_img" #has_img>
                <img class='my-card-img' src="https://demo.stack.jimmycai.com/p/hello-world/cover_hu3425483315149503896.jpg" alt="">
              </template>

              <template #tags>
                <tagBase v-for='tag in post.tags' :key="tag.name" :style="{backgroundColor: getTagColor(tag)}">
                  {{tag.name}}
                </tagBase>
              </template>

              <template #header>
                {{ post.header }}
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

  </div>
   
</template>

<script>
import postCard from '../components/postCard.vue'; 
import tagBase from '../components/tagBase.vue';
import {getTagColor} from '../posts/list.js';
import {posts} from '../posts/list.js';
import infoCard from '../components/infoCard.vue';
import {gsap} from 'gsap'; 
import router from '@/router/index'


export default { 
    name: "PostlistView", 
    components: { 
        postCard, 
        tagBase, 
        infoCard,
    }, 
    setup() { 

      const openPost = (id) => { 
        console.log(id); 
        router.push({name: 'post', params: {id}}); 
      }; 

      return { 
        posts, 
        getTagColor, 
        openPost, 
      }
      
    }, 
    mounted() { 
      gsap.from(".container", {
        duration: 0.8, 
        y: 50, 
        opacity: 0, 
        stagger: 0.15, 
        ease: "back.out(1.7)",
        delay: 0.3
      }); 
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