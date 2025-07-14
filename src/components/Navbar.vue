<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand orb-font blog-name" href="/" data-text="AWAY">AWAY</a>
            <!-- 关键修改：移除 data-bs-toggle 和 data-bs-target 属性 -->
            <!-- 现在完全通过 @click="toggleNavbarCollapse" 来控制折叠行为 -->
            <button class="navbar-toggler" type="button" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbarCollapse">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <!-- 添加 target="_blank" 和 rel="noopener noreferrer" -->
                        <!-- <a class="nav-link home-link orb-font" aria-current="page" href="/" @click="closeNavbarCollapse">Home</a> -->
                        <router-link class="nav-link home-link orb-font" to="/" @click="closeNavbarCollapse">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- 添加 target="_blank" 和 rel="noopener noreferrer" -->
                        <!-- <a class="nav-link blogs-link orb-font" href="/#/Postlist/" @click="closeNavbarCollapse">posts</a> -->
                        <router-link class="nav-link blogs-link orb-font" to="/Postlist" @click="closeNavbarCollapse">posts</router-link>
                    </li>
                    
                </ul>
                <ul class="navbar-nav right-border">
                    <li class="nav-item">
                        <!-- 添加 target="_blank" 和 rel="noopener noreferrer" -->
                        <a class="nav-link github-link svg-link" href="https://github.com/AwayC/" @click="closeNavbarCollapse" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 
                                        1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 
                                        2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 
                                        3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        </a>
                    </li>
                    <li class="nav-item">
                        <!-- 添加 target="_blank" 和 rel="noopener noreferrer" -->
                        <a class="nav-link bilibili-link svg-link" href="https://space.bilibili.com/470833519" @click="closeNavbarCollapse" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 
                                        2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 
                                        10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 
                                        15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 
                                        14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 
                                        7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 
                                        11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
    
<script>
import { onMounted, ref } from 'vue';
import * as bootstrap from 'bootstrap';

export default { 
    name: "NavBar",
    setup() {
        const navbarCollapseInstance = ref(null);

        onMounted(() => {
            const navbarCollapseElement = document.getElementById('navbarNavDropdown');
            if (navbarCollapseElement) {
                // 确保只创建一次实例
                navbarCollapseInstance.value = new bootstrap.Collapse(navbarCollapseElement, { toggle: false });
                console.log('Bootstrap Collapse instance initialized:', navbarCollapseInstance.value);
            }
        });

        const closeNavbarCollapse = () => {
            // Bootstrap 5 的 Collapse 实例有一个 `_isShown` 属性来指示其当前状态
            // 这是一个内部属性，但通常用于检查状态
            if (navbarCollapseInstance.value && navbarCollapseInstance.value._isShown) {
                console.log('Closing navbar collapse from link click.');
                navbarCollapseInstance.value.hide();
            }
        };

        const toggleNavbarCollapse = () => {
            if (navbarCollapseInstance.value) {
                console.log('Toggling navbar collapse from button click.');
                navbarCollapseInstance.value.toggle();
                // 手动更新 aria-expanded 属性以反映状态变化
                const togglerButton = document.querySelector('.navbar-toggler');
                if (togglerButton) {
                    const isExpanded = navbarCollapseInstance.value._isShown; // 获取当前展开状态
                    togglerButton.setAttribute('aria-expanded', isExpanded);
                }
            } else {
                console.warn('Navbar Collapse instance not found for toggling.');
            }
        };

        return {
            closeNavbarCollapse,
            toggleNavbarCollapse
        };
    }
}
</script>

<style scoped>
/* 添加赛博字体 */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.navbar { 
    position: fixed;
    width: 100%;
    z-index: 999;
    box-shadow: 0 4px 20px rgba(143, 144, 141, 0.1) !important; /* 新增底部阴影 */
}

.orb-font {
  font-family: 'Orbitron', sans-serif;
  color: #e0e0e0; 
  font-weight: 700;
  letter-spacing: 2px;
  transform: skew(-8deg);
  display: inline-block;
}

.orb-font:hover ::before{
    color: #e0e0e0; 
}

.orb-font:hover ::after{
    color: #e0e0e0; 
}


.blog-name {
    color: #e0e0e0 !important; 
  /* 原有样式保持不变 */
  transition: all 0.5s ease; /* 添加过渡效果 */
}

/* 将动画触发限制在悬停状态 */
.blog-name:hover { 
    color: black !important;
  text-shadow: 
    0 0 7px rgb(64, 140, 122),
    2px 0 0 #0ff,
    -2px 0 0 #ff00c1;
}

.blog-name:hover::before,
.blog-name:hover::after {
      
  opacity: 0.8;
}

.nav-item { 
    transition: all 300ms;  /* 添加默认状态过渡 */
}


.home-link {
    color: #e0e0e0 !important; 
    transition: all 300ms;
}
.home-link:hover { 
    color: #e0e0e0 !important; 
    text-shadow: 2px 0 0 #ff00c1; 
}

.blogs-link { 
    color: #e0e0e0 !important; 
    transition: all 300ms;
}
.blogs-link:hover { 
    color: #e0e0e0 !important; 
    text-shadow: 2px 0 0 #0ff;

}

.navbar-toggler { 
    background-color: #6e6d72 !important;
}



.right-border { 
    margin-right: 70px;
}

.svg-link:hover { 
    transform: translateY(-2px); 
}

.github-link {
  color: #6e5494 !important; /* GitHub品牌紫色 */
  transition: all 0.3s ease;
}

.github-link:hover {
  color: #4078c0 !important; /* GitHub悬停蓝色 */
}

.bilibili-link {
  color: grey !important; /* B站粉色 */

  transition: all 0.3s ease;
}

.bilibili-link:hover {
  color: #ff69b4 !important; /* 更亮的粉色悬停效果 */
}

.navbar { 
    background-color: #1a1a1a !important; 
}
</style>
