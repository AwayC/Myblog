<template>
    <div class="card mb-3 my-card" >
        
        <slot v-if="$slots.has_img" name="has_img"></slot>
        
        <div class="card-body">
            <div class="tags">
                <slot v-if="$slots.tags" name="tags"></slot>
            </div>
            <h2 class="card-title">
                <slot name="header"></slot>
            </h2>

            <p class="card-text" style="color:#cacaca;">
                <slot></slot>
            </p>

            <div class="card-text"><small class="text-body-secondary">
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
                <span class="time">
                    <slot name="time"></slot>
                </span>
                <span v-if="$slots.views" class="views ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="2" />
                        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                    </svg>
                    <span class="ms-1"><slot name="views"></slot></span>
                </span>
            </small></div>
        </div>
    </div>
</template>

<script>
export default { 
    name: "postCard", 
    components: {
    }
}
</script>

<style scoped>
.my-card { 
    width: 80%; 
    margin: 0 auto;
    border-radius: 16px; /* 稍微调整圆角让其更现代 */
    
    /* 核心修改：毛玻璃背景 */
    background-color: rgba(37, 45, 56, 0.5); /* 半透明底色 */
    backdrop-filter: blur(12px); /* 模糊底层光球 */
    -webkit-backdrop-filter: blur(12px); 
    border: 1px solid rgba(255, 255, 255, 0.08); /* 微弱的高光描边 */
    
    color: #e0e0e0; 
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3); /* 更柔和的深层阴影 */
    overflow: hidden; 
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 让动画更平滑 */
}

/* 悬停时的赛博霓虹发光效果 */
.my-card:hover {
    transform: translateY(-6px);
    /* 边框变亮，并带有青蓝色发光阴影 */
    border-color: rgba(109, 143, 147, 0.4); 
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 
                0 0 20px rgba(0, 230, 255, 0.15); 
}

.card-body { 
    padding: 24px 30px; 
}

/* 标题悬停时的一点小互动 */
.card-title {
    transition: color 0.3s;
}   
.my-card:hover .card-title {
    color: #5abbc6; /* 鼠标放上去时，标题微微泛起赛博青色 */
}

svg { 
    color: #888; 
    transition: color 0.3s;
}

.calender { 
    margin-right: 5px; 
}

.time,
.views { 
    color: #888;
}

/* 日历/视图图标在 hover 时也有一点光泽变化 */
.my-card:hover svg, 
.my-card:hover .time,
.my-card:hover .views {
    color: #b0b0b0;
}

.tags { 
    margin-bottom: 12px; 
}
</style>